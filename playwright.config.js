import { defineConfig, devices } from '@playwright/test';

// The site is built first (npm run build), then served twice: at the root, as a user site,
// and under /portfolio/, as a project site would be. Both must work.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { trace: 'retain-on-failure' },
  webServer: [
    { command: 'node scripts/serve.mjs --port 4401', url: 'http://localhost:4401/en/', reuseExistingServer: false },
    { command: 'node scripts/serve.mjs --port 4402 --base /portfolio/', url: 'http://localhost:4402/portfolio/en/', reuseExistingServer: false },
  ],
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4401/' } },
    { name: 'mobile', use: { ...devices['Pixel 7'], baseURL: 'http://localhost:4401/' }, grep: /@mobile/ },
    { name: 'subpath', use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4402/portfolio/' }, grep: /@subpath/ },
  ],
});

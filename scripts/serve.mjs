/**
 * Serves dist/ locally the way GitHub Pages does: folders resolve to index.html, unknown paths get 404.html.
 * Usage: npm run preview [-- --port 4321 --base /portfolio/]
 * --base serves the site under a subpath, to check that a project-site URL works too.
 */
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const PORT = Number(arg('--port', 4321));
const BASE = arg('--base', '/').replace(/\/?$/, '/');
const ROOT = 'dist';
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain' };

createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const send404 = () => {
    res.writeHead(404, { 'content-type': TYPES['.html'] });
    res.end(readFileSync(join(ROOT, '404.html')));
  };
  if (!url.startsWith(BASE)) return send404();
  let file = normalize(join(ROOT, url.slice(BASE.length)));
  if (!file.startsWith(normalize(ROOT))) return send404();
  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!url.endsWith('/')) {
      res.writeHead(301, { location: url + '/' });
      return res.end();
    }
    file = join(file, 'index.html');
  }
  if (!existsSync(file)) return send404();
  res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
}).listen(PORT, () => console.log(`Serving ${ROOT}/ at http://localhost:${PORT}${BASE}`));

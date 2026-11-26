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
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png', '.webm': 'video/webm' };

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
  const body = readFileSync(file);
  // no-store: a preview always shows the latest build. Accept-Ranges: videos can be scrubbed, as on GitHub Pages.
  const headers = { 'content-type': TYPES[extname(file)] || 'application/octet-stream', 'cache-control': 'no-store', 'accept-ranges': 'bytes' };
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
  if (range && (range[1] || range[2])) {
    const start = range[1] ? Number(range[1]) : Math.max(0, body.length - Number(range[2]));
    const end = range[1] && range[2] ? Math.min(Number(range[2]), body.length - 1) : body.length - 1;
    if (start > end || start >= body.length) {
      res.writeHead(416, { 'content-range': `bytes */${body.length}` });
      return res.end();
    }
    res.writeHead(206, { ...headers, 'content-range': `bytes ${start}-${end}/${body.length}`, 'content-length': end - start + 1 });
    return res.end(body.subarray(start, end + 1));
  }
  res.writeHead(200, headers);
  res.end(body);
}).listen(PORT, () => console.log(`Serving ${ROOT}/ at http://localhost:${PORT}${BASE}`));

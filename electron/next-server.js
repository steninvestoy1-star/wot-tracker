const http = require('http');
const path = require('path');
const next = require('next');

const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOSTNAME || '127.0.0.1';
const appDir = path.join(__dirname, '..');

async function start() {
  const app = next({
    dev: false,
    dir: appDir,
    hostname,
    port,
  });

  const handle = app.getRequestHandler();
  await app.prepare();

  const server = http.createServer((req, res) => handle(req, res));

  server.listen(port, hostname, () => {
    process.stdout.write(`WoT Tracker server ready on http://${hostname}:${port}\n`);
  });

  const shutdown = () => {
    server.close(() => process.exit(0));
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});

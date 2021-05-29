const next = require('next')
const {parse} = require('url')
const {createServer} = require('http')
const nextConfig = require('./next.config')

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({dev: false, dir: __dirname, conf: nextConfig})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) =>
    handle(req, res, parse(req.url, true).pathname),
  ).listen(port, err => {
    if (err) throw err
    console.log(`Ready on http://localhost:${port}`)
  });
});

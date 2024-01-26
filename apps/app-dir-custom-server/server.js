const express = require('express');

(() => {
  const next = require('next');
  const { parse } = require('url');

  const dev = process.env.NODE_ENV !== 'production';
  const hostname = 'localhost';
  const port = process.env.PORT;
  const nextApp = next({ dev, hostname, port });

  const handle = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    const app = express();
    app.use((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
    app.listen(process.env.PORT, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  });
})();

(() => {
  // without running cdn server; some assets still loading from application port
  //   const app = express();
  //   app.use('/_next', express.static('.next'));
  //   app.listen(process.env.CDN_PORT);
})();

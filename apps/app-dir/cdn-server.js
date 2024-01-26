const express = require('express');

const app = express();

// app.use('/_next', express.static('.next'));

app.listen(process.env.CDN_PORT);

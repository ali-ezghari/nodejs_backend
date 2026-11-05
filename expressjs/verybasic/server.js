// const http = require("http");

// const PORT = process.env.PORT || 8080;
// const DOMAIN = process.env.DOMAIN;

// const server = http.createServer((req, res) => {
//   try {
//     res.writeHead(200, "ok", { "content-length": "text/html" });
//     res.write(`<h1>Welcome to our app!</h1>`);
//     res.write(`<p>Current date: ${new Date().getTime()}</p>`);
//     res.end();
//   } catch (error) {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Internal Server Error");
//   }
// });

// // module.exports = { server, DOMAIN, PORT };
// exports.server = server;
// exports.DOMAIN = DOMAIN;
// exports.PORT = PORT;

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
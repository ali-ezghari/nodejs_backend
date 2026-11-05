// Using nodejs to listen for requests
// let http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);

//
// const https = require("https");
// https.get("https://example.com", (res) => {
//   let data = "";
//   res.on("data", (chunk) => (data += chunk));
//   res.on("end", () => console.log(data));
// });

// arguments
// console.log("Environment:", process.env.NODE_ENV || "development");
// console.log("Custom variable:", process.env.MY_VARIABLE);
// console.log("Database URL:", process.env.DATABASE_URL || "Not set");
// console.log(`V8 version: ${process.versions.v8}`);

// ? Infos about v8
// const v8 = require('v8');
// const heapStats = v8.getHeapStatistics();

// console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
// console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
// console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');

// ? promies
// console.log("First");
// setTimeout(() => console.log("Third"), 0);
// Promise.resolve().then(() => console.log("Second"));
// console.log("Fourth");

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     // Simulating database call
//     setTimeout(() => {
//       resolve({ id: userId, name: "John" });
//     }, 1000);
//   });
// }

// function getUserPosts(user) {
//   return new Promise((resolve, reject) => {
//     // Simulating API call
//     setTimeout(() => {
//       resolve(["Post 1", "Post 2", "Post 3"]);
//     }, 1000);
//   });
// }

// ? chain promises
// Chain the promises
// getUser(123)
//   .then((user) => {
//     console.log("User:", user);
//     return getUserPosts(user);
//   })
//     .then((posts) => {
//       console.log("Posts:", posts);
//     })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// ? modules
// class Logger {
//   constructor(name) {
//     this.name = name;
//   }

//   log(message) {
//     console.log(`[${this.name}] ${message}`);
//   }

//   error(error) {
//     console.error(`[${this.name}] ERROR:`, error.message);
//   }
// }

// // Exporting a single class
// module.exports = Logger;

// const http = require("http");
// const path = require('path');

// const server = http.createServer((req, res) => {
//   try {
//     console.log(`Request received for ${req.url}`);

//     res.writeHead(200, { "Content-Type": "text/html"});
//     res.write(`<h1>Welcome to our app!</h1>`);
//     res.write(`<p>Current date: ${new Date().getDate()}</p>`);
//     res.end();
//   } catch (error) {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Internal Server Error");
//   }
// });

// const PORT = process.env.PORT || 3000;
// console.log(process.env.PORT);
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// ?
// () => console.log("hi");

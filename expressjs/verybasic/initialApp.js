const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

// Respond to GET request on the root route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Express Routing</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #0066cc; }
          p { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <h1>HTML Response from Express</h1>
        <p>This response was sent using Express routing.</p>
        <p>Try other routes: <a href="/">/</a> | <a href="/about">/about</a> | <a href="/contact">/contact</a></p>
      </body>
    </html>
  `);
});

// Respond to POST request on the root route
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

// Respond to GET request on the /about route
app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/users/:userId", (req, res) => {
  // Access parameters using req.params
  res.send(`User ID: ${req.params.userId}`);
});

// Route handling query parameters
app.get("/search", (req, res) => {
  //   Access query parameters using req.query
  const { q, category } = req.query;
  res.send(`Search query: ${q}, Category: ${category || "none"}`);
});

app.post("/api/users", (req, res) => {
  // req.body contains the parsed JSON data
  console.log(req.body);
  res.status(201).json({ message: "User created", user: req.body });
});

// simulate error page

app.get("/error", (req, res) => {
  throw new Error("Ex: Something went wrong!");
});

// Simulating an asynchronous operation that fails
app.get("/async-error", (req, res, next) => {
  setTimeout(() => {
    try {
      // Something that might fail
      const result = nonExistentFunction(); // This will throw an error
      res.send(result);
    } catch (error) {
      next(error); // Pass errors to Express
    }
  }, 100);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error handler Middleware1: Something Broke");
});
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Error handler Middleware2: Something Broke");
// });

// Catch all other routes
app.all("*splat", (req, res) => {
  res.status(404).send("404 - Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

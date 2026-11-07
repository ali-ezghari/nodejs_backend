const express = require("express");
const app = express();
const path = require("path");
const productsRouter = require("./routes/products");
require("dotenv").config();
const PORT = process.env.PORT;
const pool = require("./config/db");

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Main application home page");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

const express = require("express");
const router = express.Router();
let products_data = require("../data/products");
const pool = require("../config/db");

router.use(express.json());

router.get("/:product_name", async (req, res) => {
  const product_name = req.params.product_name;
  try {
    const result = await pool.query(
      "SELECT * FROM app.products WHERE name = $1",
      [product_name],
    );
    const product = result.rows[0];
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: `product found => name: ${product_name}`,
      product: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/:product_name", async (req, res) => {
  const product_name = req.params.product_name;
  const { newPname, newPprice } = req.body;

  const result = await pool.query(
    "UPDATE app.products SET name = $1, price = $2 WHERE name = $3 RETURNING *",
    [newPname, newPprice, product_name],
  );
  const newUpdatedProduct = result.rows[0];
  if (!newUpdatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (!product_name) {
    return res
      .status(400)
      .json({ message: "Invalid information: 'name' is required" });
  }

  res.status(200).json({
    message: `Product updated successfully`,
    updated_product: product,
    products: products_data,
  });
});

router.delete("/:product_name", async (req, res) => {
  const { product_name } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM app.products WHERE name = $1 RETURNING *",
      [product_name],
    );
    const deletedProduct = result.rows[0];

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: `product deleted => name: ${product_name}`,
      products: deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { product_name, product_price } = req.body;
  try {
    if (!product_name || !product_price) {
      return res.status(400).json({ message: "Invalid information" });
    }

    const result = await pool.query(
      "INSERT INTO app.products (name, price) VALUES ($1, $2) RETURNING *",
      [product_name, product_price],
    );
    const newProduct = result.rows[0];

    res.status(201).json({
      message: `product created => name: ${newProduct["name"]}, id: ${newProduct["price"]}`,
      product: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM app.products");
  res
    .status(200)
    .json({ message: "Returning all products", products: result.rows });
});
module.exports = router;

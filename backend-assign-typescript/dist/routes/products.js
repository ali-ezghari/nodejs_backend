"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../data/products");
const router = express_1.default.Router();
let products_data = products_1.products;
router.use(express_1.default.json());
router.get("/:product_id", (req, res) => {
    const product = products_data.find((product) => product.id == req.params.product_id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
        message: `product found => name: ${product.name}, id: ${product.id}`,
        products: products_data,
    });
});
router.patch("/:product_id", (req, res) => {
    const { product_id } = req.params;
    const { product_name } = req.body;
    let product = products_data.find((p) => p.id == product_id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    if (!product_name) {
        return res
            .status(400)
            .json({ message: "Invalid information: 'name' is required" });
    }
    product.name = product_name;
    res.status(200).json({
        message: `Product updated successfully`,
        updated_product: product,
        products: products_data,
    });
});
router.delete("/:product_id", (req, res) => {
    const product = products_data.find((product) => product.id == req.params.product_id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    products_data = products_data.filter((_product) => _product.id != req.params.product_id);
    res.status(200).json({
        message: `product deleted => name: ${product.name}, id: ${product.id}`,
        products: products_data,
    });
});
router.post("/", (req, res) => {
    const { product_name, product_id } = req.body;
    if (!product_name || !product_id) {
        return res.status(400).json({ message: "Invalid information" });
    }
    products_data.push({ id: product_id, name: product_name });
    res.status(201).json({
        message: `product created => name: ${product_name}, id: ${product_id}`,
        products: products_data,
    });
});
router.get("/", (req, res) => {
    res
        .status(200)
        .json({ message: "Returning all products", products: products_data });
});
exports.default = router;

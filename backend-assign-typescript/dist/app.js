"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./routes/products"));
const path_1 = __importDefault(require("path")); // 1. Import path
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/api/products", products_1.default);
app.get("/", (req, res) => {
    res.send("Main application home page");
});
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

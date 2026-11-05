import express, { Request, Response } from "express";
import productsRouter from "./routes/products";
import path from "path"; // 1. Import path

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "../public")));
app.use("/api/products", productsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Main application home page");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

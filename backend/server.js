// entry point for the api

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json data in the body

app.use("/api/products", productRoute);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});

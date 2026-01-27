import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model";


const router = express.Router();

//  get all the products
router.get("/", async (_req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching products", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
} );

// create a new product
router.post("/", async (req, res) => {
  const product = req.body; // user will provide this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product: ", error.message);
    res.status(501).json({ success: false, message: "Server Error" });
  }
});

// update a product
router.put("/:id", async (req, res) => {
  const {id} = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success : false, message : "Server error"})
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new : true})
    res.status(200).json({success : true, data : updatedProduct})
  } catch (error) {
    res.status(500).json({success : false, message : "server error"})
  }
})

// delete a product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting product", error.message);

    res.status(404).json({ success: false, message: "Product not found" });
  }
});

export default router;


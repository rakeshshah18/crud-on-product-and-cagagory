const express = require("express");
const routes = express.Router();
const Products = require("../models/ProductModel");

//creating a new item
routes.post("/", async (req, res) => {
  try {
    const newItem = new Products(req.body);
    const saveItem = await newItem.save();
    res.status(201).json(saveItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//for reading the products
routes.get("/", async (req, res) => {
  try {
    const items = await Products.find()
      .populate("category")
      .sort({ createdAt: -1 });
    // const items = await items.find().sort({createdAt: -1})
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ mrssage: error.message });
  }
});

// for updating the products items

routes.put("/:id", async (req, res) => {
  try {
    const updatingItem = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatingItem) {
      return res.status(404).json({ message: "Item not found" });
    } else {
      res.status(200).json(updatingItem);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// deleting the items

routes.delete("/:id", async (req, res) => {
  try {
    const deletingItem = await Products.findByIdAndDelete(req.params.id);
    if (!deletingItem) {
      return res.status(404).json({ message: "Item not found." });
    } else {
      res.status(200).json({ message: "Item deleted." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// sorting by created time

module.exports = routes;

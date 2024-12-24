const express = require("express");
const router = express.Router();
const Catagory = require("../models/catagoryModel");

//creating a new catagory
router.post("/", async (req, res) => {
  try {
    const newCatagory = new Catagory(req.body);
    const savedCatagory = await newCatagory.save();
    res.status(201).json(savedCatagory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all catagories

router.get("/", async (req, res) => {
  try {
    const AllCatagory = await Catagory.find();
    res.status(200).json({ AllCatagory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete caatagory

router.delete("/:id", async (req, res) => {
  try {
    const getId = await Catagory.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Catagory deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update catagory

router.put("/:id", async (req, res) => {
  try {
    const getIdToUpdate = await Catagory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Catagory updated." }, getIdToUpdate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

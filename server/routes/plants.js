const express = require("express");

const router = express.Router();
const path = require("path");
const Plant = require("../models/Plant");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// GET ALL PLANTS
router.get("/", async (req, res) => {
  try {
    const Plants = await Plant.find();
    res.json(Plants);
  } catch (err) {
    res.json({ error: err });
  }
});

// SUBMIT A DOG
router.post("/", upload.single("avatar"), async (req, res) => {
  const imgURL = req.file.path.substring(req.file.path.indexOf("\\routes"));
  console.log(imgURL);
  const plant = new Plant({
    ...req.body,
    imgURL
  });
  try {
    const savedPlant = await plant.save();
    console.log("savedPlant", savedPlant);
    res.json(savedPlant);
  } catch (err) {
    res.json({ error: err });
  }
});

// GET SPECIFIC DOG
router.get("/:plantId", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.plantId);
    res.json(plant);
  } catch (err) {
    res.json({ error: err });
  }
});

// DELETE A SPECIFIC DOG

router.delete("/:plantId", async (req, res) => {
  try {
    const removedPlant = await Plant.deleteOne({ _id: req.params.plantId });
    res.json(removedPlant);
  } catch (err) {
    rs.json({ message: err });
  }
});

// UPDATE A SPECIFIC DOG

router.post("/:plantId", upload.single("avatar"), async (req, res) => {
  console.log("HIIIIIII");
  console.log(req.file, "ID", req.params.plantId);
  console.table(req.body);
  try {
    const imgURL = req.file.path.substring(req.file.path.indexOf("\\routes"));
    const updatedPost = await Plant.updateOne(
      {
        _id: req.params.plantId
      },
      {
        $set: { ...req.body, imgURL }
      }
    );
    console.log("[request ]", req.body);
    console.log("[After Update]", updatedPost);
    const plant = await Plant.findById(req.params.plantId);
    res.json(plant);
  } catch (err) {
    res.json({ error: err });
  }
});
module.exports = router;

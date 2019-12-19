const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post("/signup", async (req, res) => {
  console.table(req.body);
  const user = new User({
    ...req.body
  });
  try {
    const savedUser = await user.save();
    console.log("savedUser", savedUser);
    res.json(savedUser);
  } catch (err) {
    console.log("[Error Occured]", err);
    res.json({ error: err });
  }
});

router.post("/login", async (req, res) => {
  console.table(req.body);
  try {
    const user = await User.findOne({
      userName: req.body.userName,
      password: req.body.password
    });
    res.json({ id: user._id, userName: user.userName });
    console.log(user);
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use("/routes", express.static("routes"));
//Import Routes

const platsRoute = require("./routes/plants");
const authRoutes = require("./routes/auth");

//Routes

app.use("/plants", platsRoute);
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Home Page");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected to DB");
  }
);

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Server stared on port ${port}`);
});

const mongoose = require("mongoose");
const PlantSchema = mongoose.Schema({
  imgURL: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String
  },
  gender: {
    type: String
  },
  origin: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("dogs", PlantSchema);

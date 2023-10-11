const mongoose = require("mongoose");

const Resources = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resources", Resources);

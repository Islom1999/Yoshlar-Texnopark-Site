const mongoose = require("mongoose");

const Pages = new mongoose.Schema(
  {
    homeHeader:{
      bgImage: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: true,
        trim: true,
      },
      descr: {
        type: String,
        required: false,
        trim: true,
      }
    },
    aboutHeader:{
      bgImage: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: true,
        trim: true,
      }
    },
    resourceHeader:{
      bgImage: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: true,
        trim: true,
      }
    },
    resourceTitle: {
      title:{
        type: String,
        required: true,
        trim: true
      },
      subTitle:{
        type: String,
        required: true,
        trim: true
      }
    },
    contactHeader:{
      bgImage: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: true,
        trim: true,
      }
    },
    maps: {
      title:{
        type: String,
        required: true,
        trim: true
      },
      location:{
        type: String,
        required: true,
        trim: true
      }
    },
    aboutContent:{
      imageUrl:{
        type: String,
        required: true,
      },
      imageTitle:{
        type: String,
        required: true,
        trim: true
      },
      subTitle:{
        type: String,
        required: true,
        trim: true
      },
      title:{
        type: String,
        required: true,
        trim: true
      },
      textLeft:{
        type: String,
        required: true,
        trim: true
      },
      textBottom:{
        type: String,
        required: true,
        trim: true
      },
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pages", Pages);

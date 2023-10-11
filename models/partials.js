const mongoose = require("mongoose");

const Partials = new mongoose.Schema(
  {
    logoUrl: {
      type: String,
      required: true,
      trim: true,
    },
    logoSubtitle: {
        type: String,
        required: true,
        trim: true, 
    },
    pagesTitle: {
        type: String,
        required: true,
        trim: true,
    },
    pagesLink: [
        {
            title: {
                type: String,
                required: true,
                trim: true,
            },
            link: {
                type: String,
                required: true,
                trim: true,
            }
        }
    ],

    contactTitle: {
        type: String,
        required: true,
        trim: true,
    },
    contactLink: [
        {
            title: {
                type: String,
                required: true,
                trim: true,
            },
            link: {
                type: String,
                required: true,
                trim: true,
            }
        }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Partials", Partials);

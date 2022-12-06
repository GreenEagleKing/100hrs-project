const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }, 
  description: {
    type: String,
    required: true,
  },
  software: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: false,
  },
  tags: {
    type: String,
    required: true,
  },
  downloads: {
    type: Number,
    required: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  file: {
    type: String,
    require: true,
    resource_type: "image",
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);

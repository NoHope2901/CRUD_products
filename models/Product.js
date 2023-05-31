const mongoose = require("mongoose");


const schemaProduct = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = new mongoose.model("Product", schemaProduct);

module.exports = Product;

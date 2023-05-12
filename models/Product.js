const mongoose = require("mongoose");

// tao schema cho collection 'product'
const schemaProduct = new mongoose.Schema({
  name: String,
  price: Number,
});

// tao model schema cho product
const Product = new mongoose.model("Product", schemaProduct);

module.exports = Product;

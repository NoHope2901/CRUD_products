// const express = require("express");
// const router = express.Router();
// const Product = require("../models/Product");

// // Lấy danh sách sản phẩm
// router.get("/", (req, res) => {
//   Product.find()
//     .then((products) => res.json(products))
//     .cath((error) => console.error(error));
// });

// // get product by ID

// router.get("/:id", (req, res) => {
//   Product.findById(req.params.id)
//     .then((product) => res.json(product))
//     .catch((err) => console.error(err));
// });

// // add product
// router.post("/", (req, res) => {
//   const product = new Product({
//     name: req.body.name,
//     price: req.body.price,
//   });
//   product
//     .save()
//     .then((product) => res.json(product))
//     .catch((err) => console.error(err));
// });

// // update

// router.put("/:id", (req, res) => {
//   Product.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       price: req.body.price,
//     },
//     { new: true }
//   )
//     .then((product) => res.json(product))
//     .catch((err) => console.err(err));
// });

// // delete
// router.delete("/:id", (req, res) => {
//   Product.findByIdAndDelete()
//     .then(() => res.sendStatus(204))
//     .catch((err) => console.error(err));
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// get all
router.get("/", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => console.error(err));
});

// get by ID
router.get("/:id", (req, res) => {
  Product.findById()
    .then((product) => res.json(product))
    .catch((err) => console.error(err));
});

// add new
router.post("/", (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((products) => res.json(products))
    .catch((err) => console.error(err));
});

// update
router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
    },
    { new: true }
  )
    .then((product) => res.json(product))
    .catch((err) => console.error(err));
});

// delete

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch((err) => console.error(err));
});

module.exports = router;

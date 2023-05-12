const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/products");

const app = express();

// connect to Mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("server started on port 3000");
});

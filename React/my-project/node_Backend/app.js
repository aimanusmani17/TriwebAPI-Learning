const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./model/product");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("app running");
});

app.post("/product", async (req, res) => {
  try {
    const result = await Product.create(req.body);
    console.log(result);
    res.send({ status: "success" });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

app.get('/product', async (req, res) => {
  try {
    console.log("Product Fetching")
    const products = await Product.find({});
    res.send({ status: "success" ,data:products});
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

mongoose.connect(process.env.connectionString).then(() => {
  app.listen(process.env.port);
  console.log("Server connected");
});



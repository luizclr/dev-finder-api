const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.databaseURl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.listen(3333);

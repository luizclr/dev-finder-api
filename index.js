const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.databaseURl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);

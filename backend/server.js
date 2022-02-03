const express = require("express");

const cors = require("cors");
const app = express();

const allCarsData = require("./datas/allCarsData.json");
app.use(cors());
app.get("/carDatas", (req, res) => {
  res.send(allCarsData);
});

module.exports = app;

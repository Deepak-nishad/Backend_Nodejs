const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Listen at server 3000");
});

// route
app.get("/", (req, res) => {
  res.send("hello ji");
});

// http://localhost:3000/api/cars
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car successfully submitted");
});

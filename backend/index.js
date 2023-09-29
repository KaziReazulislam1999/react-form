const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const { readdirSync } = require("fs");

//app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

//mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection success"))
  .catch(() => console.log("Something went wrong"));

//routes
readdirSync("./routes/").map((r) => app.use("/api", require("./routes/" + r)));

//port
const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(`Server running on ${port}`);
});

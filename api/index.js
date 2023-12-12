const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRoute = require("./routes/productsRoute");
const { connect } = require("react-redux");

const app = express();

const PORT = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/products", productsRoute);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

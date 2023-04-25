//Required dependenceis
//Epxress as Node Framework
//Mongoose as MongoDB framework
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/Users");
require("dotenv").config();

const app = express();

//Establishing Database connection
mongoose
  .connect(
    // "mongodb+srv://waheguru1469:waheguru1469@cluster0.besop.mongodb.net/Assignment"
    process.env.MONGO_URI
  )
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

//using routes
app.use(userRoutes);

//Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

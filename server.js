const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcrpyt");
const passport = require("passport");

const routes = require("./routes");

const app = express();
app.use("/", routes);

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://test:qweeasdd123@cluster0.zfw9e.mongodb.net/boilerPlate?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//register route
app.post("/register", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash;
  } catch (error) {
    console.log(error.message);
  }
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to mongo DB`);
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  });

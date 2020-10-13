const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routes");
const booksRouter = require("./routes/api");
const passport = require("./utils/passport");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(passport.initialize());
server.use("/api", router);
server.use("/api", booksRouter);

mongoose.connect("mongodb://localhost:27017/passport", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

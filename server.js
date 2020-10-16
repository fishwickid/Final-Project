const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routes");
const jamsRouter = require("./routes/api");
const passport = require("./utils/passport");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(passport.initialize());
server.use("/api", router);
server.use("/api", jamsRouter);

mongoose.connect("mongodb://localhost/jamfriends", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// :27017

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

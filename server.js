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

server.use(express.static(__dirname + "/public"));

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));

  server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jamsesh", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// if ((process.env.NODE_ENV = "production")) {
//   server.use(express.static("client/build"));
//   server.use("*", express.static("client/build"));
//   server.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html')), function (
//       err
//     ) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     });
//   });
// }

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

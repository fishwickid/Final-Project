const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { Jam, User } = require("../db/models");
const path = require("path");
const apiRoutes = require("./api");

const router = express.Router();

// Authentications Routes

router.post("/signup", (request, response) => {
  const user = new User({
    username: request.body.username,
    password: request.body.password,
  });
  user
    .save()
    .then(() => {
      const token = jwt.sign({ id: user.id }, "jwt_secret");
      response.json({ token });
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json("Could not create user");
    });
});

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (request, response) => {
    const token = jwt.sign({ id: request.user.id }, "jwt_secret");
    response.json({ token: token });
  }
);

router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  (request, response) => {
    if (!request.user) {
      response.json({ username: "nobody" });
    } else {
      response.json({ username: request.user.username });
    }
  }
);

// API Routes
router.use("/api", apiRoutes);

module.exports = router;

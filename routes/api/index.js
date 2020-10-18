const router = require("express").Router();
const jamRoutes = require("./jams");

// routes
router.use("/jams", jamRoutes);

module.exports = router;

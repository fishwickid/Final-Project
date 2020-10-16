const router = require("express").Router();
const jamRoutes = require("./jams");

// Book routes
router.use("/jams", jamRoutes);

module.exports = router;

const router = require("express").Router();
const jamRoutes = require("./jams");

// Book routes
router.use("/books", jamRoutes);

module.exports = router;

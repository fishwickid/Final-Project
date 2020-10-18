const router = require("express").Router();
const jamsController = require("../../controllers/jamsController");

// Matches with "/api/jams"
router.route("/").get(jamsController.findAll).post(jamsController.create);

// Matches with "/api/jams/:id"
router
  .route("/:id")
  .get(jamsController.findById)
  .put(jamsController.update)
  .delete(jamsController.remove);

module.exports = router;

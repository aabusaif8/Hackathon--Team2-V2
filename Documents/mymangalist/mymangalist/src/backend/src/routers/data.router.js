const router = require("express").Router({ mergeParams: true });
const controller = require("./data.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router
  .route("/createReview")
  .put(controller.update)
  .delete(controller.unassign)
  .all(methodNotAllowed);

router
  .route("/")
  .put(controller.update)
  .delete(controller.unassign)
  .all(methodNotAllowed);

module.exports = router;
const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./tables.controller");
const dataRouter = require("../databaseInteractions/data.router");

router
  .route("/:table_id/seat")
  .put(controller.occupy)
  .delete(controller.free)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;

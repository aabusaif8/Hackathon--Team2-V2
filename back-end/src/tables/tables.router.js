const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./tables.controller");
const dataRouter = require("../databaseInteractions/data.router");

router.use("/:table_id/seat", dataRouter);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;

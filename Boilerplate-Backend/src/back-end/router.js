const router = require("express").Router({ mergeParams: true });
const controller = require("./controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
// .post(controller.create)
// .get(controller.list)
// .all(methodNotAllowed);

// ROUTERS TO BE ADDED

module.exports = router;

const router = require("express").Router();
const assetsController = require("./AssetsController");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router.post('/createInvestmentAccount', assetsController.createInvestmentAccount);
router.get('/search', assetsController.handleGetAssets);

router.all('*', methodNotAllowed);

module.exports = router;

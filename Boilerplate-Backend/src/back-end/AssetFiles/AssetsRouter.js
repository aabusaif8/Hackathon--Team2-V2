const router = require("express").Router({ mergeParams: true });
const assetsController = require("./AssetsController");
const methodNotAllowed = require("../../errors/methodNotAllowed");
const AssetsService = require('./AssetsService')

router.post('/createInvestmentAccount', assetsController.createInvestmentAccount);
            
router.get('/search', assetsController.handleGetAssets).all(methodNotAllowed);

router.get('/:userId/stocks', assetsController.handleGetUserStocks).all(methodNotAllowed);

module.exports = router;
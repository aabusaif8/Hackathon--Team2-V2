const router = require("express").Router({ mergeParams: true });
const controller = require("./AssetsController");
const methodNotAllowed = require("../../errors/methodNotAllowed");
const AssetsService = require('./AssetsService')

router.post('/createInvestmentAccount', (req, res) => {
    controller.createInvestmentAccount(req, res);
});

router.get('/search', async (req, res) => {
    const { assetType, userInput } = req.query;

    try {
        const assets = await AssetsService.displayAssetsByType(assetType, userInput);
        res.json({ success: true, assets });
    } catch (error) {
        console.error('Error fetching assets:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch assets', error: error.message });
    }
});


module.exports = router;
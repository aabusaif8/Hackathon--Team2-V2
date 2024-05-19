const AssetsService = require('./AssetsService');
const validateInvestmentRequestBody = require('./AssetsValidation');

async function handleGetAssets(req, res) {
    try {
        const { assetType, userInput, date } = req.body;
        let assets;

        if (date) {
            assets = await AssetsService.getAssetsByType(assetType, userInput, date);
        } else {
            assets = await AssetsService.displayAssetsByType(assetType, userInput);
        }

        res.json({ success: true, data: assets });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch assets', error: error.message });
    }
}

async function createInvestmentAccount(req, res) {
    try {
        const { Username, Password, 'Investment Amount': investmentAmount, 'Investment Frequency': investmentFrequency, 'Financial Goals': financialGoals, Strategy, 'Stocks in Portfolio': Stocks, 'ETFs in Portfolio': ETFs } = req.body;
        const missingField = !Username ? 'Username' : !Password ? 'Password' : !investmentAmount ? 'Investment Amount' : !investmentFrequency ? 'Investment Frequency' : !Strategy ? 'Strategy' : !Stocks ? 'Stocks in Portfolio' : !ETFs ? 'ETFs in Portfolio' : null;

        if (missingField) {
            return res.status(400).json({ success: false, message: `Missing required field: ${missingField}` });
        }

        const formattedFinancialGoals = typeof financialGoals === 'number' ? financialGoals.toString() : financialGoals;

        const newInvestmentAccount = new AssetsService.InvestmentAccount(Username, Password, investmentAmount, investmentFrequency, formattedFinancialGoals, Strategy, Stocks, ETFs);

        const savedInvestmentAccount = await AssetsService.saveInvestmentAccount(newInvestmentAccount);

        if (savedInvestmentAccount) {
            res.status(200).json({ success: true, data: savedInvestmentAccount });
        } else {
            res.status(500).json({ success: false, message: 'Failed to save investment account' });
        }
    } catch (error) {
        console.error('Error creating investment account:', error);
        res.status(500).json({ success: false, message: 'Failed to create investment account', error: error.message });
    }
}

module.exports = {
    createInvestmentAccount: [validateInvestmentRequestBody, createInvestmentAccount],
    handleGetAssets
};

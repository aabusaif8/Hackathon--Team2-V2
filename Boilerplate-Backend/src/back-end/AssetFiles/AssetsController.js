const AssetsService = require('./AssetsService');
const validateInvestmentRequestBody = require('./AssetsValidation');

async function handleGetAssets(req, res) {
    try {
        const { assetType, userInput, date } = req.query; 
        //console.log(req.query)
        if (!assetType || !userInput) {
            return res.status(400).json({ success: false, message: 'assetType and userInput are required' });
        }

        const assets = await AssetsService.getAssetsByType(assetType, userInput, date);
        
        res.json({ success: true, data: assets });
    } catch (error) {
        console.error('Error fetching assets:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch assets', error: error.message });
    }
}

async function createInvestmentAccount(req, res) {
    try {
        console.log('Request body:', req.body);
        const { Username, Password, 'Investment Amount': investmentAmount, 'Investment Frequency': investmentFrequency, 'Financial Goals': financialGoals, Experience, 'Stocks in Portfolio': Stocks, 'ETFs in Portfolio': ETFs } = req.body;
        
        const missingField = !Username ? 'Username' : !Password ? 'Password' : !investmentAmount ? 'Investment Amount' : !investmentFrequency ? 'Investment Frequency' : !Experience ? 'Experience' : !Stocks ? 'Stocks in Portfolio' : !ETFs ? 'ETFs in Portfolio' : null;

        if (missingField) {
            return res.status(400).json({ success: false, message: `Missing required field: ${missingField}` });
        }

        const formattedFinancialGoals = typeof financialGoals === 'number' ? financialGoals.toString() : financialGoals;

        const newInvestmentAccount = new AssetsService.InvestmentAccount(Username, Password, investmentAmount, investmentFrequency, formattedFinancialGoals, Experience, Stocks, ETFs);

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


async function handleGetUserStocks(req, res) {
    try {
        const { userId } = req.params;
        const stocksData = await AssetsService.getUserStocksData(userId);
        //console.log(stocksData)
        res.json({ success: true, data: stocksData });
    } catch (error) {
        console.error('Error fetching user stocks:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch user stocks', error: error.message });
    }
}

module.exports = {
    createInvestmentAccount: [validateInvestmentRequestBody, createInvestmentAccount],
    handleGetAssets,
    handleGetUserStocks
};

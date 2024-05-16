const stockService = require('./stockService');

async function handleGetStocksByRisk(req, res) {
    try {
        const riskLevel = req.body.data
        const stocks = await stockService.displayStocks(riskLevel);
        res.json({ success: true, data: stocks });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch stocks', error: error.message });
    }
}

module.exports = [
    handleGetStocksByRisk,
]


//Using the users selected risk level (options displayed by chatbot) return only the stocks that have the user input risk level.

async function getStocksByRisk(riskLevel) {
    return knex("Stocks").select("*").where('risk', riskLevel);
}

async function displayStocks(riskLevel) {
    try {
        const stocks = await getStocksByRisk(riskLevel);
        console.log(`${riskLevel} Risk Stocks:`, stocks);
        return stocks;  // Return stocks for further processing or response
    } catch (error) {
        console.error('Error fetching stocks:', error);
        throw error;  // Rethrow or handle error appropriately
    }
}

async function getETFsByRisk(riskLevel) {
    return knex("ETFs").select("*").where('risk', riskLevel);
}
async function displayETFs(riskLevel) {
    try {
        const ETFs = await getETFsByRisk(riskLevel);
        console.log(`${riskLevel} Risk ETFs:`, ETFs);
        return ETFs;  // Return stocks for further processing or response
    } catch (error) {
        console.error('Error fetching stocks:', error);
        throw error;  // Rethrow or handle error appropriately
    }
}

module.exports = [
    getStocksByRisk,
    displayStocks,
    getETFsByRisk,
    displayETFs
]

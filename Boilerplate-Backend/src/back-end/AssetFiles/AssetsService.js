const db = require('../../db/connection'); // Import your database connection
const knex = require("../../db/connection");
async function getAssetsByType(assetType, userInput, date = new Date().toISOString().split('T')[0]) {
    // console.log("Calling getAssetsByType with assetType:", assetType, "and userInput:", userInput);
    try {
        let query = knex.from(assetType).returning("*"); 
        
        if (assetType === "Stocks") {
            query = query.where('Risk Level', userInput)
        } else if (assetType === "ETFs") {
            query = query.where('Risk Level', userInput);
        }
        const results = await query;
        const realDate = await getDateRange(userInput,date)
        // console.log(realDate)
        const filteredResults = results.filter(stock => stock.Date >= realDate); 

        return filteredResults;
    } catch (error) {
        console.error('Error creating query:', error);
        throw error;
    }
}

async function getDateRange(userInput, range) {
    let latestDate;
    // console.log(range)
    if (range === 'month' || range === 'quarter' || range === 'year' || range === '2 years' || range === '3 years') {
        latestDate = await knex(userInput).max('Date as latestDate').first();
    }

    if (latestDate && latestDate.latestDate) {
        const latestDateStr = latestDate.latestDate;
        // console.log('------------------',latestDateStr)
        if (!isNaN(new Date(latestDateStr).getTime())) {
            const pastDate = new Date(latestDateStr);
            // console.log(pastDate)
            if (range === 'month') {
                // console.log(pastDate.getMonth() -1)
                pastDate.setMonth(pastDate.getMonth() - 1);
            } else if (range === 'quarter') {
                pastDate.setMonth(pastDate.getMonth() - 3);
            } else if (range === 'year') {
                pastDate.setFullYear(pastDate.getFullYear() - 1);
            } else if (range === '2 years') {
                pastDate.setFullYear(pastDate.getFullYear() - 2);
            } else if (range === '3 years') {
                pastDate.setFullYear(pastDate.getFullYear() - 3);
            }

            return pastDate;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

async function displayAssetsByType(assetType, userInput) {
    try {
        const assets = await getAssetsByType(assetType, userInput);
        // console.log(assets)
        //console.log(`${assetType} for User Input ${userInput}:`, assets);
        return assets; 
    } catch (error) {
        console.error('Error fetching assets:', error);
        throw error; 
    }
}

class InvestmentAccount {
    constructor(username, password, investmentAmount, investmentFrequency, financialGoals, Strategy, Stocks, ETFs) {
        this.Username = username;
        this.Password = password;
        this["Investment Amount"] = investmentAmount;
        this["Investment Frequency"] = investmentFrequency;
        this["Financial Goals"] = financialGoals;
        this["Strategy"] = Strategy;
        this["Stocks in Portfolio"] = Stocks;
        this["ETFs in Portfolio"] = ETFs;
    }

    setUsername(username) {
        this.Username = username;
    }

    setPassword(password) {
        this.Password = password;
    }

    setInvestmentAmount(amount) {
        this["Investment Amount"] = amount;
    }

    setInvestmentFrequency(frequency) {
        this["Investment Frequency"] = frequency;
    }

    setFinancialGoals(goals) {
        this["Financial Goals"] = goals;
    }

    setAccountType(Strategy) {
        this["Strategy"] = Strategy;
    }

    setAccountPortfolio(Stocks, ETFs) {
        this["Stocks in Portfolio"] = Stocks;
        this["ETFs in Portfolio"] = ETFs;
    }
}

async function saveInvestmentAccount(investmentAccount) {
    try {
        const savedInvestmentAccount = await db('User Info').insert({
            "Username": investmentAccount.Username,
            "Password": investmentAccount.Password,
            "Investment Amount": investmentAccount["Investment Amount"],
            "Investment Frequency": investmentAccount["Investment Frequency"],
            "Financial Goals": investmentAccount["Financial Goals"],
            "Strategy": investmentAccount["Strategy"],
            "Stocks in Portfolio": investmentAccount["Stocks in Portfolio"],
            "ETFs in Portfolio": investmentAccount["ETFs in Portfolio"]
        });

        return savedInvestmentAccount;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAssetsByType,
    displayAssetsByType,
    InvestmentAccount,
    saveInvestmentAccount
};
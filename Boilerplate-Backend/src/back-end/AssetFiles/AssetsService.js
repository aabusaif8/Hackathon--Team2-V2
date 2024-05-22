const db = require('../../db/connection'); // Import your database connection
const knex = require("../../db/connection");

async function getAssetsByType(assetType, userInput, dateRange) {
    try {
        let query = knex.from(assetType).returning("*");

        if (assetType === "Stocks" || assetType === "ETFs") {
            query = query.where('Risk Level', userInput);
        }

        const results = await query;
        const realDate = await getDateRange(assetType, dateRange);
        const filteredResults = results.filter(stock => stock.Date >= realDate);

        return filteredResults;
    } catch (error) {
        console.error('Error creating query:', error);
        throw error;
    }
}

async function getUserStocksData(userId) {
    console.log(userId)

    try {
        const userStockIds = await db('User Info')
            .select('Stocks in Portfolio')
            .where('Id', userId)
            .first();
        if (!userStockIds) {
            throw new Error('User not found or no stocks associated with the user');
        }

        const stockIds = userStockIds['Stocks in Portfolio'];

        const stockIdArray = stockIds.split(',').map(Number);
        console.log(stockIdArray)

        // Use parameterized query to prevent syntax errors
        const stockData = await db('Stocks')
            .whereIn('Id', stockIdArray.map(id => Number(id)))
            .select('*');
        return stockData;
    } catch (error) {
        console.error('Error fetching user stocks data:', error);
        throw error;
    }
}

async function getDateRange(assetType, range) {
    try {
        let latestDate;
        if (range === 'month' || range === 'quarter' || range === 'year' || range === '3 years' || range === '5 years') {
            // Calculate the latest date
            latestDate = await knex(assetType).max('Date').first();
        }

        if (latestDate && latestDate.max) {
            const latestDateStr = latestDate.max;
            if (!isNaN(new Date(latestDateStr).getTime())) {
                const pastDate = new Date(latestDateStr);
                if (range === 'month') {
                    // Adjust the past date by one month
                    pastDate.setMonth(pastDate.getMonth() - 1);
                } else if (range === 'quarter') {
                    // Adjust the past date to the start of the last quarter
                    const quarterStartMonth = Math.floor(pastDate.getMonth() - 3);
                    pastDate.setMonth(quarterStartMonth);
                } else if (range === 'year') {
                    // Adjust the past date to the same month and day but one year ago
                    pastDate.setFullYear(pastDate.getFullYear() - 1);
                } else if (range === '3 years') {
                    // Adjust the past date to the same month and day but three years ago
                    pastDate.setFullYear(pastDate.getFullYear() - 3);
                } else if (range === '5 years') {
                    // Adjust the past date to the same month and day but five years ago
                    pastDate.setFullYear(pastDate.getFullYear() - 5);
                }
                return pastDate;
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching latest date:', error);
        throw error;
    }
}

async function displayAssetsByType(assetType, userInput) {
    try {
        const assets = await getAssetsByType(assetType, userInput);
        return assets;
    } catch (error) {
        console.error('Error fetching assets:', error);
        throw error;
    }
}

class InvestmentAccount {
    constructor(username, password, email, phoneNumber, investmentAmount, investmentFrequency, financialGoals, Experience, Stocks, ETFs) {
        this.Username = username;
        this.Password = password;
        this.Email = email;
        this["Phone"] = phoneNumber;
        this["Investment Amount"] = investmentAmount;
        this["Investment Frequency"] = investmentFrequency;
        this["Financial Goals"] = financialGoals;
        this.Experience = Experience;
        this["Stocks in Portfolio"] = Stocks;
        this["ETFs in Portfolio"] = ETFs;
    }

    setUsername(username) {
        this.Username = username;
    }

    setPassword(password) {
        this.Password = password;
    }

    setEmail(email) {
        this.Email = email;
    }

    setPhoneNumber(phoneNumber) {
        this.PhoneNumber = phoneNumber;
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

    setAccountType(Experience) {
        this.Experience = Experience;
    }

    setAccountPortfolio(Stocks, ETFs) {
        this["Stocks in Portfolio"] = Stocks;
        this["ETFs in Portfolio"] = ETFs;
    }
}

async function saveInvestmentAccount(investmentAccount) {
    try {
        const savedInvestmentAccount = await db('User Info').returning("Id").insert({
            Username: investmentAccount.Username,
            Password: investmentAccount.Password,
            Email: investmentAccount.Email,
            "Phone": investmentAccount.PhoneNumber,
            "Investment Amount": investmentAccount["Investment Amount"],
            "Investment Frequency": investmentAccount["Investment Frequency"],
            "Financial Goals": investmentAccount["Financial Goals"],
            Experience: investmentAccount.Experience,
            "Stocks in Portfolio": investmentAccount["Stocks in Portfolio"],
            "ETFs in Portfolio": investmentAccount["ETFs in Portfolio"]
        });
        const userId = savedInvestmentAccount[0];
        const newUserId = userId.Id;
        //console.log(newUserId)
        return newUserId;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAssetsByType,
    displayAssetsByType,
    InvestmentAccount,
    saveInvestmentAccount,
    getUserStocksData
};

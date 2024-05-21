const db = require('../../db/connection');

async function verifyUserCredentials(username, password) {
    const user = await db('User Info').where({ Username: username, Password: password }).select('*').first();
    return user;
}

async function getUserById(userId) {
    const user = await db('User Info').where('Id', userId).select('*').first();
    if (user) {
        user['Stocks in Portfolio'] = parseIds(user['Stocks in Portfolio']);
        user['ETFs in Portfolio'] = parseIds(user['ETFs in Portfolio']);
    }
    return user;
}

async function getStockById(stockId) {
    return await db('Stocks').where('Id', stockId).select('*').first();
}

async function getETFById(etfId) {
    return await db('ETFs').where('Id', etfId).select('*').first();
}

function parseIds(idsString) {
    return idsString ? idsString.split(',').map(id => id.trim()) : [];
}

async function updateUserPortfolio(userId, updatedStocks, updatedETFs) {
    try {
        await db('User Info').where({ Id: userId }).update({
            'Stocks in Portfolio': updatedStocks.join(','),
            'ETFs in Portfolio': updatedETFs.join(',')
        });

        return { success: true, message: 'User portfolio updated successfully' };
    } catch (error) {
        return { success: false, message: 'Failed to update user portfolio', error: error.message };
    }
}

module.exports = {
    verifyUserCredentials,
    getUserById,
    getStockById,
    getETFById,
    parseIds,
    updateUserPortfolio
};
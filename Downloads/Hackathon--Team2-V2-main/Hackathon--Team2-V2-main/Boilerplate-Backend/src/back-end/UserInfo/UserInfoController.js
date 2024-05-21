const UserService = require('./UserInfoService');
const validateSignup = require('./UserInfoValidation');


async function signIn(req, res) {
    const { username, password } = req.body;

    try {
        const user = await UserService.verifyUserCredentials(username, password);

        if (user) {
            const userId = user.Id;
            // res.json({ success: true, data: { userId } })
            res.redirect(`/users/${userId}/dashboard`); 
        } else {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to authenticate user', error: error.message });
    }
}

async function getDashboard(req, res) {
    const userId = req.params.userId; // Access the user ID from the URL parameters

    try {
        const user = await UserService.getUserById(userId);
        // Fetch other user-specific information like stocks, ETFs, etc.

        res.json({ success: true, data: { user } }); // Return user information as JSON response
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch user information', error: error.message });
    }
}

async function getUserById(req, res) {
    const userId = req.params.userId;
    try {
        const user = await UserService.getUserById(userId);
        
        if (user) {
            const stockIds = UserService.parseIds(user['Stocks in Portfolio']);
            const etfIds = UserService.parseIds(user['ETFs in Portfolio']);
            
            const stocks = await Promise.all(stockIds.map(stockId => UserService.getStockById(stockId)));
            const etfs = await Promise.all(etfIds.map(etfId => UserService.getETFById(etfId)));
            
            res.json({ success: true, data: { user, stocks, etfs } });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch user', error: error.message });
    }
}


async function updatePortfolio(req, res) {
    const userId = req.params.userId;
    const { action, type, id } = req.body;
    try {
        let user = await UserService.getUserById(userId);

        let updatedStocks = user['Stocks in Portfolio'];
        let updatedETFs = user['ETFs in Portfolio'];

        if (!Array.isArray(updatedStocks)) {
            updatedStocks = [];
        }
        if (!Array.isArray(updatedETFs)) {
            updatedETFs = [];
        }

        if (action === 'add') {
            if (type === 'stock') {
                updatedStocks.push(id);
            } else if (type === 'etf') {
                updatedETFs.push(id);
            }
        } else if (action === 'remove') {
            if (type === 'stock') {
                updatedStocks = updatedStocks.filter(stockId => stockId !== id);
            } else if (type === 'etf') {
                updatedETFs = updatedETFs.filter(etfId => etfId !== id);
            }
        }
        const updateResult = await UserService.updateUserPortfolio(userId, updatedStocks, updatedETFs);

        if (updateResult.success) {
            res.json({ success: true, message: 'Portfolio updated successfully' });
        } else {
            res.status(500).json({ success: false, message: 'Failed to update portfolio', error: updateResult.error });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update portfolio', error: error.message });
    }
}

module.exports = {
    signIn: [validateSignup, signIn],
    getUserById,
    getDashboard,
    updatePortfolio
};
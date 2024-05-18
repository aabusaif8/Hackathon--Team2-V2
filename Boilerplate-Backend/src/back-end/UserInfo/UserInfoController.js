// UserController.js

const UserService = require('./UserInfoService');

async function getUserById(req, res) {
    const userId = req.params.userId;
    try {
        const user = await UserService.getUserById(userId);
        
        if (user) {
            res.json({ success: true, data: user });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch user', error: error.message });
    }
}

module.exports = {
    getUserById,
};
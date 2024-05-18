const db = require('../../db/connection'); // Import your database connection
const knex = require("../../db/connection");

async function getUserById(userId) {
    return await db('User Info').where('Id', userId).select('*').first();
}

module.exports = {
    getUserById,
};
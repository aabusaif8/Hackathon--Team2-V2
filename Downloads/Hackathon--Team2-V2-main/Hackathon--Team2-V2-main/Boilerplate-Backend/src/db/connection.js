const environment = process.env.NODE_ENV || "development"; // CHANGE TO "Production" DURING FINAL COMMIT
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;

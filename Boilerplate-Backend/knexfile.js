const path = require("path");
require("dotenv").config();
const { DEV_DATABASE_URL, PROD_DATABASE_URL } = process.env; 

module.exports = {
  development: {
    client: "postgresql",
    connection: DEV_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: PROD_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};

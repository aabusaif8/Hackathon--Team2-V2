import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {
  DATABASE_URL = "postgres://lxzogqoe:MATVNuiV6KyRWmzchqM8kxQU9hjMM0sS@raja.db.elephantsql.com/lxzogqoe",
  DATABASE_URL_DEVELOPMENT = "postgres://lxzogqoe:MATVNuiV6KyRWmzchqM8kxQU9hjMM0sS@raja.db.elephantsql.com/lxzogqoe",
  DATABASE_URL_TEST = "postgres://lxzogqoe:MATVNuiV6KyRWmzchqM8kxQU9hjMM0sS@raja.db.elephantsql.com/lxzogqoe",
  DATABASE_URL_PREVIEW = "postgres://lxzogqoe:MATVNuiV6KyRWmzchqM8kxQU9hjMM0sS@raja.db.elephantsql.com/lxzogqoe",
  DEBUG,
} = process.env;

export default {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
    debug: !!DEBUG,
  },
};
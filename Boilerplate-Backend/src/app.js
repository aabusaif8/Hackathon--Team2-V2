const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const assetsRouter = require("./back-end/AssetFiles/AssetsRouter");
const userInfoRouter = require("./back-end/UserInfo/UserInfoRouter"); // Import the UserInfoRouter

const app = express();

app.use(cors());
app.use(express.json());

// Mount the assetsRouter under a specific path
app.use("/assets", assetsRouter);

// Mount the userInfoRouter under a specific path
app.use("/users", userInfoRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
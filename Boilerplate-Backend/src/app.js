const express = require("express");
const app = express();
const cors = require("cors");

// const router = require('./back-end/router')
// const { chatCompletion } = require('./chatbot/chatbot-controller');

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const assetsRouter = require("./back-end/AssetFiles/AssetsRouter");
const userInfoRouter = require("./back-end/UserInfo/UserInfoRouter"); // Import the UserInfoRouter


app.use(cors());
app.use(express.json());

app.use("/assets", assetsRouter);

app.use("/users", userInfoRouter);

// app.use("/", router)
// app.post("/api/chatbot", chatCompletion);


app.use(notFound);
app.use(errorHandler);

module.exports = app;
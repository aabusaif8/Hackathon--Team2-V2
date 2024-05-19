const express = require("express");
const app = express();
const cors = require("cors");

// const router = require('./back-end/router')
<<<<<<< HEAD
// const { chatCompletion } = require('./chatbot/chatbot-controller');
=======
const { chatCompletion } = require('./chatbot/chatbot-controller');
>>>>>>> df916aab516aeb8f57e9f0b1d28e1074e0c14fd2

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const assetsRouter = require("./back-end/AssetFiles/AssetsRouter");
const userInfoRouter = require("./back-end/UserInfo/UserInfoRouter"); // Import the UserInfoRouter

<<<<<<< HEAD

=======
>>>>>>> df916aab516aeb8f57e9f0b1d28e1074e0c14fd2
app.use(cors());
app.use(express.json());

app.use("/assets", assetsRouter);

app.use("/users", userInfoRouter);

// app.use("/", router)
<<<<<<< HEAD
// app.post("/api/chatbot", chatCompletion);
=======
app.post("/learning-resources", chatCompletion);
>>>>>>> df916aab516aeb8f57e9f0b1d28e1074e0c14fd2


app.use(notFound);
app.use(errorHandler);

module.exports = app;
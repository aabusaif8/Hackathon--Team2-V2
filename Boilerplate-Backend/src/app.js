const express = require("express");
const app = express();
const cors = require("cors");

const router = require('./back-end/router')
const { chatCompletion } = require('./chatbot/chatbot-controller');

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

app.use(cors())
app.use(express.json());

app.use("/", router)
app.post("/api/chatbot", chatCompletion);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
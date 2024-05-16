const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// require ROUTERouter
// const ROUTERouter = require(ROUTE path)

const app = express();

app.use(cors())
app.use(express.json());

// app.use("/ROUTE", ROUTERouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

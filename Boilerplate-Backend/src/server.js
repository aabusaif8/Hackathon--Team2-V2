const { PORT = 5000 } = process.env;

const app = require("./app");

const listEndpoints = require('express-list-endpoints');

const listener = () => {
    console.log(`Listening on Port ${PORT}!`);
    
    // Log all routes
    const endpoints = listEndpoints(app);
    //console.log(endpoints);
};

// const listener = () => console.log(`Listening on Port ${PORT}!`);

app.listen(PORT, listener);

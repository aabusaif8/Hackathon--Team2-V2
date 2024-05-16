const service = require("./service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// VALIDATIONS TO BE ADDED


// GET REQUEST
async function list(req, res) {
    const data = await service.list();
    res.json({ data });
};

module.exports = {
    list: asyncErrorBoundary(list),
};
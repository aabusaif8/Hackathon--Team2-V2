const service = require("./data.service");
const reservationService = require("../reservations/reservations.service");
const tableService = require("../tables/tables.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//validation middleware
function hasId(req, res, next) {
  const table = req.body.data;
  if (!table) {
    return next({ status: 400, message: "Must have name property" });
  }
  if (!table.reservation_id) {
    return next({ status: 400, message: "Must have manga ID" });
  }
  next();
}

async function mangaExists(req, res, next) {
  const { reservation_id } = req.body.data;
  const reservation = await reservationService.read(reservation_id);
  if (!reservation) {
    return next({ status: 404, message: `${manga_name} does not exist` });
  }
  res.locals.manga = manga;
  next();
}

//CRUD
async function update(req, res, next) {
  const { comment_id } = req.body.data;
  const { manga_id } = req.params;
  await service.update(manga_id, comment_id);
  res.status(200).json({ data: comment_id });
}

async function destroy(req,res,next){
    const {comment_id} = req.body.data
    const { manga_id } = req.params;
    const action =await service.destroy(comment_id,manga_id)
    res.json({data:action})
}

async function create(req, res) {
    const comment = req.body.data;
    const { commentCreation } = await service.create(comment);
    comment.comment_id = commentCreation;
    res.status(201).json({ data: comment });
  }

module.exports = {
  update: [
    hasId,
    asyncErrorBoundary(mangaExists),
    asyncErrorBoundary(update),
  ],
  create:[create],
  delete:[destroy]
};

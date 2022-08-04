const Comic = require("./comic.model");
const { setError } = require("../helpers/errors");

const getAll = async (req, res, next) => {
  try {
    const comics = await Comic.find();
    return res.json({
      status: 200,
      message: "Recovered all comics",
      comics: comics,
    });
  } catch (error) {
    return next(setError(500, "Failed recovering comics"));
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comic = await Comic.findById(id);
    if (!comic) return next(setError(404, "Comic not found"));
    return res.json({
      status: 200,
      message: "Recovered comic",
      comic: comic,
    });
  } catch (error) {
    return next(setError(500, "Failed comic"));
  }
};

const create = async (req, res, next) => {
  try {
    const comic = new Comic(req.body);
    const comicInDB = await comic.save();
    return res.json({
      status: 201,
      message: "Created new comic",
      comic: comicInDB,
    });
  } catch (error) {
    return next(setError(500, "Failed created comic"));
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comic = new Comic(req.body);
    comic._id = id;
    const updatedComic = await Comic.findByIdAndUpdate(id, comic);
    if (!updatedComic) return next(setError(404, "Comic not found"));
    return res.json({
      status: 201,
      message: "Updated element",
      updatedComic: updatedComic,
    });
  } catch (error) {
    return next(setError(500, "Failed updated comic"));
  }
};

const deleteElement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedComic = await Comic.findByIdAndDelete(id);
    if (!deletedComic) return next(setError(404, "Comic not found"));
    return res.json({
      status: 200,
      message: "Deleted comic",
      deletedComic: deletedComic,
    });
  } catch (error) {
    return next(setError(500, "Failed deleted comic"));
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteElement,
};

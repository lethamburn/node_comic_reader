const ComicRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteElement } = require('./comic.controller');

ComicRoutes.get('/', getAll)
ComicRoutes.get('/:id', getById)
ComicRoutes.post('/', create)
ComicRoutes.patch('/:id', update)
ComicRoutes.delete('/:id', deleteElement)

module.exports = ComicRoutes
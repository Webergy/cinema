const filmController = require('../controllers/filmController.js');

const FilmRouter = require('express').Router();

FilmRouter.post('/film', filmController.create);
FilmRouter.get('/film',filmController.getFilms)

module.exports = FilmRouter;



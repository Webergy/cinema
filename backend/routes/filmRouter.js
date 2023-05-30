const filmController = require('../controllers/filmController.js');

const FilmRouter = require('express').Router();

FilmRouter.post('/create', filmController.create);


module.exports = FilmRouter;



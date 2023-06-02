const { QueryTypes,Op } = require('sequelize');
const { sequelize } = require('../models');
const db = require('../models');



const Film = db.film;

const create = async (req, res) =>
{
    const {title,director,premiere,description} = req.body;
    
    const film = await Film.create({
        title,
        director,
        description,
        premiere
    });

    res.status(201).send(film);
}

const getFilms = async (req, res) =>
{
    const films = await Film.findAll();

    res.status(200).send(films);
}

module.exports = {
   create,
    getFilms
};

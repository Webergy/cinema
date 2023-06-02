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


module.exports = {
   create,

};

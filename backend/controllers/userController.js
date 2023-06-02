const { QueryTypes,Op } = require('sequelize');
const { sequelize } = require('../models');
const db = require('../models');



const User = db.user;

const register = async (req, res) =>
{
    const {email,password} = req.body;
    const user = await User.create({
        email,
        password
    });

    res.status(201).send(user);
}


module.exports = {
   register,

};

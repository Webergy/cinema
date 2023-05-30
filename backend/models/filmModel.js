
module.exports = (sequelize, DataTypes) => {

    const Film = sequelize.define("user", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        premiere: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },      
    },

    {
        timestamps: true,
        }
   );


    return Film;
};
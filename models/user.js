const {  DataTypes } = require("sequelize");

module.exports = (db) =>{
    const user = db.define("User", {
        nume:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        prenume:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        facultate:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        esteTerminata:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        experienta: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        linkedIn:{
            type:DataTypes.STRING,
            allowNull: false
        },
        telefon :{
            type:DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    })
    return user;
}
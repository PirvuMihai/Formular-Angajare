const {DataTypes} = require(`sequelize`);

module.exports = (db) => {
    const departament = db.define("Departament", {
        nume:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        director: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        locuriLibere: {
            type:DataTypes.STRING,
            allowNull: true,
        },
    },{
        freezeTableName: true,
        timeStamps: true,
    })
    return departament;
}
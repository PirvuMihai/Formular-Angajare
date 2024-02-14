const db = require(`../config/db`);
const sequelize = require(`sequelize`);

const UserModel = require(`./user`);
const UserDb = UserModel(db, sequelize);

const DepartamentModel = require(`./departament`);
const DepartamentDb = DepartamentModel(db, sequelize);

DepartamentDb.hasMany(UserDb);
UserDb.belongsTo(DepartamentDb, {
    foreignKey:{
        name:"id_departament",
        allowNull: false
    }
})

module.exports = {
    UserDb,
    DepartamentDb
}
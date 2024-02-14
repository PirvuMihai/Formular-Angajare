const Sequelize = require(`sequelize`);

let db;

db = new Sequelize("formular_app", "root", "", {
    dialect:`mysql`,
    host:`localhost`,
    logging:false,
    define:{
        charset:`utf8`,
        collate:`utf8_general_ci`,
        timestamps:true,
    }
});

module.exports = db;
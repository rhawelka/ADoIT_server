const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.DB_USER,process.env.DB_PASS,{
    host: 'localhost',
    dialect: "mysql",
    operatorsAliases: 0,
    port: process.env.DB_PORT,

    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
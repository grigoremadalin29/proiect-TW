const mysql = require('mysql2/promise')
const Sequelize = require('sequelize')
const fs = require('fs');
const path = require('path')
const db = {}
const dbConfig = require('../config/db.json')
const basename = path.basename(module.filename)

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  dialect: "mysql",
  host: dbConfig.host
})
//console.log(sequelize);
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    try{
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
   // console.log(path.join(__dirname, file));
}
catch(err){console.log(model.name);}

  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Activity = require('./activity')(sequelize, Sequelize);
db.Feedback = require('./feedback')(sequelize, Sequelize);
db.Profesor = require('./profesor')(sequelize, Sequelize);
db.Student = require('./student')(sequelize, Sequelize);

module.exports = db;
const mysql = require("mysql2");
const Config = require("../config/default");

const connection = (configDb) => {
  let con;
  if (configDb) {
    con = mysql.createPool({
      multipleStatements: true,
      host: Config[configDb].HOST,
      user: Config[configDb].USER,
      password: Config[configDb].PASSWORD,
      database: Config[configDb].DB
    });
  } else {
    con = mysql.createPool({
      multipleStatements: true,
      host: Config["Default"].HOST,
      user: Config["Default"].USER,
      password: Config["Default"].PASSWORD,
      database: Config["Default"].DB
    });
  }
  return con;
};

module.exports = { connection };

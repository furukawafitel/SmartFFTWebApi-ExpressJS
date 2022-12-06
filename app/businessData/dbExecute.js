// ** MySQL Execute database
const sql = require("./db.js");

class MySQLExecute {
  // ** GET METHOD
  static async search(query, result, configDb) {
    return new Promise((resolve, reject) => {
      sql.connection(configDb).query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(null, err));
          return;
        }
        console.log("Get data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
    });
  }

  static async searchList(query, result, configDb) {
    return new Promise((resolve, reject) => {
      sql.connection(configDb).query(query, [1, 1], (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(null, err));
        }
        console.log("Get data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
    });
  }

  static async create(query, result, configDb) {
    return new Promise((resolve, reject) => {
      sql.connection(configDb).query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(err, null));
          return;
        }
        console.log("Inserted data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
    });
  }

  static async update(query, result, configDb) {
    return new Promise((resolve, reject) => {
      sql.connection(configDb).query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(err, null));
          return;
        }
        console.log("Update data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
    });
  }

  static async delete(query, result, configDb) {
    return new Promise((resolve, reject) => {
      sql.connection(configDb).query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(err, null));
          return;
        }
        console.log("Delete data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
    });
  }
}
module.exports = MySQLExecute;

// ** MySQL Execute database
const sql = require("./db.js");

class MySQLExecute {
  // ** GET METHOD
  static async search(query, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(null, err));
        }
        console.log("Get data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
      con.end();
    });
  }

  static async searchList(query, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(query, [1, 1], (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(null, err));
        }
        console.log("Get data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
      con.end();
    });
  }

  static async create(query, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(err, null));
        }
        console.log("Inserted data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
      con.end();
    });
  }

  static async createList(query, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(query, [1, 1], (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(null, err));
        }
        console.log("Insert data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
      con.end();
    });
  }

  static async update(query, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(err, null));
        }
        console.log("Update data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
      con.end();
    });
  }

  static async updateList(query, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(query, [1, 1], (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(null, err));
        }
        console.log("Update data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
      con.end();
    });
  }

  static async delete(query, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          res.StatusOnDb = false;
          reject(result(err, null));
        }
        console.log("Delete data successfully");
        res.StatusOnDb = true;
        resolve(result(null, res));
      });
      con.end();
    });
  }

  static async callProcedures(args, result, configDb) {
    return new Promise((resolve, reject) => {
      let con = sql.connection(configDb);
      con.query(
        "call generate_jcode(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        args,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            res.StatusOnDb = false;
            reject(result(err, null));
          }
          console.log("Inserted procedures data successfully");
          res.StatusOnDb = true;
          resolve(result(null, res));
        }
      );
    });
  }
}
module.exports = MySQLExecute;

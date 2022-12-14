// ** Services

const MakerSQL = require("../../sql/itemMaster/makerSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MakerService {
  static async getMaker(dataItem, result) {
    let query = await MakerSQL.getMaker(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaker(dataItem, result) {
    let resultData = [];
    let query;
    query = await MakerSQL.searchMaker(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaker(dataItem, result) {
    let query = await MakerSQL.createMaker(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateMaker(dataItem, result) {
    let query = await MakerSQL.updateMaker(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteMaker(dataItem, result) {
    let query = await MakerSQL.deleteMaker(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMakerNameAndInuse(dataItem, result) {
    let query = await MakerSQL.GetByLikeMakerNameAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MakerService;

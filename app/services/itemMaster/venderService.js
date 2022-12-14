// ** Services

const VenderSQL = require("../../sql/itemMaster/venderSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class VenderService {
  static async getVender(dataItem, result) {
    let query = await VenderSQL.getVender(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchVender(dataItem, result) {
    let resultData = [];
    let query;
    query = await VenderSQL.searchVender(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createVender(dataItem, result) {
    let query = await VenderSQL.createVender(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateVender(dataItem, result) {
    let query = await VenderSQL.updateVender(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteVender(dataItem, result) {
    let query = await VenderSQL.deleteVender(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeVendorName(dataItem, result) {
    let query = await VenderSQL.GetByLikeVendorName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeVendorAlphabetAndInuse(dataItem, result) {
    let query = await VenderSQL.GetByLikeVendorAlphabetAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = VenderService;

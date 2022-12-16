// ** Services

const SctSubCodeSQL = require("../../sql/standardCost/SctSubCodeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctSubCodeService {
  static async getSctSubCode(dataItem, result) {
    let query = await SctSubCodeSQL.getSctSubCode(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchSctSubCode(dataItem, result) {
    let resultData = [];
    let query;
    query = await SctSubCodeSQL.searchSctSubCode(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createSctSubCode(dataItem, result) {
    let query = await SctSubCodeSQL.createSctSubCode(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateSctSubCode(dataItem, result) {
    let query = await SctSubCodeSQL.updateSctSubCode(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteSctSubCode(dataItem, result) {
    let query = await SctSubCodeSQL.deleteSctSubCode(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeSctSubCodeNameAndInuse(dataItem, result) {
    let query = await SctSubCodeSQL.GetByLikeSctSubCodeNameAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctSubCodeService;

// ** Services

const SctTotalCostSQL = require("../../sql/standardCost/SctTotalCostSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctTotalCostService {
  static async createSctTotalCost(dataItem, result) {
    let query = await SctTotalCostSQL.createSctTotalCost(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let query = await SctTotalCostSQL.DeleteBySctId(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetBySctId(dataItem, result) {
    let query = await SctTotalCostSQL.GetBySctId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctTotalCostService;

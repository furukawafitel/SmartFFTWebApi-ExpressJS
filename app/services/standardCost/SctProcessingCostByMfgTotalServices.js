// ** Services

const SctProcessingCostByMfgTotalSQL = require("../../sql/standardCost/SctProcessingCostByMfgTotalSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctProcessingCostByMfgTotalService {
  static async createSctProcessingCostByMfgTotal(dataItem, result) {
    let query =
      await SctProcessingCostByMfgTotalSQL.createSctProcessingCostByMfgTotal(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let query = await SctProcessingCostByMfgTotalSQL.DeleteBySctId(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let query = await SctProcessingCostByMfgTotalSQL.GetBySctIdAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctProcessingCostByMfgTotalService;

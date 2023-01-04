// ** Services

const SctFlowProcessProcessingCostByMfgSQL = require("../../sql/standardCost/SctFlowProcessProcessingCostByMfgSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctFlowProcessProcessingCostByMfgService {
  static async createSctFlowProcessProcessingCostByMfg(dataItem, result) {
    let query =
      await SctFlowProcessProcessingCostByMfgSQL.createSctFlowProcessProcessingCostByMfg(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let query = await SctFlowProcessProcessingCostByMfgSQL.DeleteBySctId(
      dataItem
    );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetBySctId(dataItem, result) {
    let query = await SctFlowProcessProcessingCostByMfgSQL.GetBySctId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctFlowProcessProcessingCostByMfgService;

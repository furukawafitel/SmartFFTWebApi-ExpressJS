// ** Services

const SctFlowProcessProcessingCostByEngineerSQL = require("../../sql/standardCost/SctProcessingCostByEngTotalSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctFlowProcessProcessingCostByEngineerService {
  static async createSctProcessingCostByEngTotal(dataItem, result) {
    let query =
      await SctFlowProcessProcessingCostByEngineerSQL.createSctProcessingCostByEngTotal(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let query = await SctFlowProcessProcessingCostByEngineerSQL.DeleteBySctId(
      dataItem
    );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let query =
      await SctFlowProcessProcessingCostByEngineerSQL.GetBySctIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctFlowProcessProcessingCostByEngineerService;

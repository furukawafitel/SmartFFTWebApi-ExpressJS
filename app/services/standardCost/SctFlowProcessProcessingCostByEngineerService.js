// ** Services

const SctFlowProcessProcessingCostByEngineerSQL = require("../../sql/standardCost/SctFlowProcessProcessingCostByEngineerSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctFlowProcessProcessingCostByEngineerService {
  static async createSctFlowProcessProcessingCostByEngineer(dataItem, result) {
    let query =
      await SctFlowProcessProcessingCostByEngineerSQL.createSctFlowProcessProcessingCostByEngineer(
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

  static async GetBySctId(dataItem, result) {
    let query = await SctFlowProcessProcessingCostByEngineerSQL.GetBySctId(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctFlowProcessProcessingCostByEngineerService;

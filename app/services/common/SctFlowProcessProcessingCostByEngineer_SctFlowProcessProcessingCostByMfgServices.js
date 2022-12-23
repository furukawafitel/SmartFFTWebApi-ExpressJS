// ** Services

const SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgSQL = require("../../sql/common/SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgServices {
  static async GetBySctId(dataItem, result) {
    let query =
      await SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgSQL.GetBySctId(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports =
  SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgServices;

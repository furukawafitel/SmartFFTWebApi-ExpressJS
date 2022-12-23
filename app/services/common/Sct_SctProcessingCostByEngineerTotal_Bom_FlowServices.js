// ** Services

const Sct_SctProcessingCostByEngineerTotal_Bom_FlowSQL = require("../../sql/common/Sct_SctProcessingCostByEngineerTotal_Bom_FlowSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class Sct_SctProcessingCostByEngineerTotal_Bom_FlowServices {
  static async GetBySctId(dataItem, result) {
    let query =
      await Sct_SctProcessingCostByEngineerTotal_Bom_FlowSQL.GetBySctId(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = Sct_SctProcessingCostByEngineerTotal_Bom_FlowServices;

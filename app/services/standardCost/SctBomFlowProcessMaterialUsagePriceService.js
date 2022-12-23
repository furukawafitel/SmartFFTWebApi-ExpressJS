// ** Services

const SctBomFlowProcessMaterialUsagePriceSQL = require("../../sql/standardCost/SctBomFlowProcessMaterialUsagePriceSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctBomFlowProcessMaterialUsagePriceService {
  static async createSctBomFlowProcessMaterialUsagePrice(dataItem, result) {
    let query =
      await SctBomFlowProcessMaterialUsagePriceSQL.createSctBomFlowProcessMaterialUsagePrice(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async GetBySctId(dataItem, result) {
    let query = await SctBomFlowProcessMaterialUsagePriceSQL.GetBySctId(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let query = await SctBomFlowProcessMaterialUsagePriceSQL.DeleteBySctId(
      dataItem
    );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }
}
module.exports = SctBomFlowProcessMaterialUsagePriceService;

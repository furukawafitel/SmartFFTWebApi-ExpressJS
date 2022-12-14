// ** Services

const BomFlowProcessMaterialUsageSQL = require("../../sql/bom/BomFlowProcessMaterialUsageSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class BomFlowProcessMaterialUsageService {
  static async getBomFlowProcessMaterialUsage(dataItem, result) {
    let query =
      await BomFlowProcessMaterialUsageSQL.getBomFlowProcessMaterialUsage(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchBomFlowProcessMaterialUsage(dataItem, result) {
    let resultData = [];
    let query;
    query =
      await BomFlowProcessMaterialUsageSQL.searchBomFlowProcessMaterialUsage(
        dataItem
      );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createBomFlowProcessMaterialUsage(dataItem, result) {
    let query =
      await BomFlowProcessMaterialUsageSQL.createBomFlowProcessMaterialUsage(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateBomFlowProcessMaterialUsage(dataItem, result) {
    let query =
      await BomFlowProcessMaterialUsageSQL.updateBomFlowProcessMaterialUsage(
        dataItem
      );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteBomFlowProcessMaterialUsage(dataItem, result) {
    let query =
      await BomFlowProcessMaterialUsageSQL.deleteBomFlowProcessMaterialUsage(
        dataItem
      );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeBomFlowProcessMaterialUsageName(dataItem, result) {
    let query =
      await BomFlowProcessMaterialUsageSQL.GetByLikeBomFlowProcessMaterialUsageName(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByFlowId(dataItem, result) {
    let query = await BomFlowProcessMaterialUsageSQL.GetByFlowId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByBomIdAndFlowProcessIdAndLikeInuse(dataItem, result) {
    let query =
      await BomFlowProcessMaterialUsageSQL.GetByBomIdAndFlowProcessIdAndLikeInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = BomFlowProcessMaterialUsageService;

// ** Services

const BomFlowProcessMaterialUsageSQL = require("../../sql/bom/BomFlowProcessMaterialUsageSQL");
const BomSQL = require("../../sql/bom/BomSQL");
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
    let resultData;
    let sqlList = [];

    sqlList += await BomSQL.createBomId();
    sqlList += await BomSQL.createBom(dataItem);

    for (const [index, item] of dataItem[
      "FLOW_PROCESS_MATERIAL_USAGE"
    ].entries()) {
      sqlList +=
        await BomFlowProcessMaterialUsageSQL.createBomFlowProcessMaterialUsage(
          item
        );
    }

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateBomFlowProcessMaterialUsage(dataItem, result) {
    let resultData;
    let sqlList = [];

    sqlList += await BomFlowProcessMaterialUsageSQL.DeleteByBomId(dataItem);
    sqlList += await BomSQL.updateBom(dataItem);

    for (const [index, item] of dataItem[
      "FLOW_PROCESS_MATERIAL_USAGE"
    ].entries()) {
      sqlList += await BomFlowProcessMaterialUsageSQL.InsertByExistBomId(item);
    }

    resultData = MySQLExecute.createList(sqlList, result);
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

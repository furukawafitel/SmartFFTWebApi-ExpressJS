// ** Services
const FlowSQL = require("../../sql/flow/flowSQL");
const FlowProcessSQL = require("../../sql/flow/flowProcessSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class FlowProcessService {
  static async getFlowProcess(dataItem, result) {
    let query = await FlowProcessSQL.getFlowProcess(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchFlowProcess(dataItem, result) {
    let resultData = [];
    let query;
    query = await FlowProcessSQL.searchFlowProcess(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createFlowProcess(dataItem, result) {
    let sqlList = [];
    let resultData;
    sqlList += await FlowSQL.CreateFlowId();
    sqlList += await FlowSQL.createFlow(dataItem);

    for (const [index, item] of dataItem["FLOW_PROCESS"].entries()) {
      item["NO"] = String(index + 1);
      item["CREATE_BY"] = dataItem["CREATE_BY"];
      sqlList += await FlowProcessSQL.createFlowProcess(item);
    }
    resultData = await MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateFlowProcess(dataItem, result) {
    let sqlList = [];
    let resultData;

    sqlList += await FlowProcessSQL.DeleteByFlowId(dataItem);
    sqlList += await FlowSQL.updateFlow(dataItem);

    for (const [index, item] of dataItem["FLOW_PROCESS"].entries()) {
      item["FLOW_ID"] = dataItem["FLOW_ID"];
      item["NO"] = String(index + 1);
      item["CREATE_BY"] = dataItem["CREATE_BY"];
      sqlList += await FlowProcessSQL.InsertByExistFlowId(item);
    }
    resultData = await MySQLExecute.updateList(sqlList, result);
    return resultData;
  }

  static async deleteFlowProcess(dataItem, result) {
    let query = await FlowProcessSQL.deleteFlowProcess(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeFlowProcessName(dataItem, result) {
    let query = await FlowProcessSQL.GetByLikeFlowProcessName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByFlowId(dataItem, result) {
    let query = await FlowProcessSQL.GetByFlowId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = FlowProcessService;

// ** Services

const FlowSQL = require("../../sql/flow/flowSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class FlowService {
  static async getFlow(dataItem, result) {
    let query = await FlowSQL.getFlow(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchFlow(dataItem, result) {
    let resultData = [];
    let query;

    if (dataItem["PRODUCT_MAIN_ID"] != "") {
      query = await FlowSQL.SearchByProductMainId(dataItem);
    } else {
      query = await FlowSQL.searchFlow(dataItem);
    }

    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createFlow(dataItem, result) {
    let query = await FlowSQL.createFlow(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateFlow(dataItem, result) {
    let query = await FlowSQL.updateFlow(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteFlow(dataItem, result) {
    let query = await FlowSQL.deleteFlow(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeFlowName(dataItem, result) {
    let query = await FlowSQL.GetByLikeFlowName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async SearchByProductMainId(dataItem, result) {
    let query = await FlowSQL.SearchByProductMainId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = FlowService;

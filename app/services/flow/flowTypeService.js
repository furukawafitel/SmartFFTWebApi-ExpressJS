// ** Services

const FlowTypeSQL = require("../../sql/flow/flowTypeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class FlowTypeService {
  static async getFlowType(dataItem, result) {
    let query = await FlowTypeSQL.getFlowType(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchFlowType(dataItem, result) {
    let resultData = [];
    let query;
    query = await FlowTypeSQL.searchFlowType(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createFlowType(dataItem, result) {
    let query = await FlowTypeSQL.createFlowType(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateFlowType(dataItem, result) {
    let query = await FlowTypeSQL.updateFlowType(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteFlowType(dataItem, result) {
    let query = await FlowTypeSQL.deleteFlowType(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeFlowTypeName(dataItem, result) {
    let query = await FlowTypeSQL.GetByLikeFlowTypeName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = FlowTypeService;

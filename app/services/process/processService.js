// ** Services

const ProcessSQL = require("../../sql/process/processSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class ProcessService {
  static async getProcess(dataItem, result) {
    let query = await ProcessSQL.getProcess(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchProcess(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    if (dataItem["PRODUCT_MAIN_ID"] != "") {
      sqlWhere += " AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    }
    query = await ProcessSQL.searchProcess(dataItem, sqlWhere);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createProcess(dataItem, result) {
    let query = await ProcessSQL.createProcess(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateProcess(dataItem, result) {
    let query = await ProcessSQL.updateProcess(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteProcess(dataItem, result) {
    let query = await ProcessSQL.deleteProcess(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeProcessName(dataItem, result) {
    let query = await ProcessSQL.GetByLikeProcessName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeProcessNameAndProductMainIdAndInuse(dataItem, result) {
    let query = await ProcessSQL.GetByLikeProcessNameAndProductMainIdAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = ProcessService;

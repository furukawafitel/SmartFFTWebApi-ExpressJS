// ** Services

const WorkOrderSQL = require("../../sql/customerCondition/workOrderSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class WorkOrderService {
  static async getWorkOrder(dataItem, result) {
    let query = await WorkOrderSQL.getWorkOrder(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchWorkOrder(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    if (dataItem["PRODUCT_MAIN_ID"] !== "") {
      sqlWhere += " AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    }
    query = await WorkOrderSQL.searchWorkOrder(dataItem, sqlWhere);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createWorkOrder(dataItem, result) {
    let query = await WorkOrderSQL.createWorkOrder(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateWorkOrder(dataItem, result) {
    let query = await WorkOrderSQL.updateWorkOrder(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteWorkOrder(dataItem, result) {
    let query = await WorkOrderSQL.deleteWorkOrder(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeWorkOrderCodeAndInuse(dataItem, result) {
    let query = await WorkOrderSQL.GetByLikeWorkOrderCodeAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeWorkOrderCodeAndProductMainIdAndInuse(
    dataItem,
    result
  ) {
    let query =
      await WorkOrderSQL.GetByLikeWorkOrderCodeAndProductMainIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = WorkOrderService;

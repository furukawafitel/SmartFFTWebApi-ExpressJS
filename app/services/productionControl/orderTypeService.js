// ** Services

const OrderTypeSQL = require("../../sql/productionControl/orderTypeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class OrderTypeService {
  static async getOrderType(dataItem, result) {
    let query = await OrderTypeSQL.getOrderType(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchOrderType(dataItem, result) {
    let resultData = [];
    let query;
    query = await OrderTypeSQL.searchOrderType(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createOrderType(dataItem, result) {
    let query = await OrderTypeSQL.createOrderType(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateOrderType(dataItem, result) {
    let query = await OrderTypeSQL.updateOrderType(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteOrderType(dataItem, result) {
    let query = await OrderTypeSQL.deleteOrderType(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeOrderTypeNameAndInuse(dataItem, result) {
    let query = await OrderTypeSQL.GetByLikeOrderTypeNameAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeOrderTypeNameAndProductionPurposeIdAndInuse(
    dataItem,
    result
  ) {
    let query =
      await OrderTypeSQL.GetByLikeOrderTypeNameAndProductionPurposeIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = OrderTypeService;

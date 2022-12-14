// ** Model

const OrderTypeService = require("../../services/productionControl/orderTypeService");

class OrderTypeModels {
  static async getOrderType(dataItem, result) {
    let resultData = await OrderTypeService.getOrderType(dataItem, result);
    return resultData;
  }

  static async searchOrderType(dataItem, result) {
    let resultData = await OrderTypeService.searchOrderType(dataItem, result);
    return resultData;
  }

  static async createOrderType(dataItem, result) {
    let resultData = await OrderTypeService.createOrderType(dataItem, result);
    return resultData;
  }

  static async updateOrderType(dataItem, result) {
    let resultData = await OrderTypeService.updateOrderType(dataItem, result);
    return resultData;
  }

  static async deleteOrderType(dataItem, result) {
    let resultData = await OrderTypeService.deleteOrderType(dataItem, result);
    return resultData;
  }

  static async GetByLikeOrderTypeNameAndInuse(dataItem, result) {
    let resultData = await OrderTypeService.GetByLikeOrderTypeNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeOrderTypeNameAndProductionPurposeIdAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await OrderTypeService.GetByLikeOrderTypeNameAndProductionPurposeIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = OrderTypeModels;

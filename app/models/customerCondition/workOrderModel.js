// ** Model

const WorkOrderService = require("../../services/customerCondition/workOrderService");

class WorkOrderModels {
  static async getWorkOrder(dataItem, result) {
    let resultData = await WorkOrderService.getWorkOrder(dataItem, result);
    return resultData;
  }

  static async searchWorkOrder(dataItem, result) {
    let resultData = await WorkOrderService.searchWorkOrder(dataItem, result);
    return resultData;
  }

  static async createWorkOrder(dataItem, result) {
    let resultData = await WorkOrderService.createWorkOrder(dataItem, result);
    return resultData;
  }

  static async updateWorkOrder(dataItem, result) {
    let resultData = await WorkOrderService.updateWorkOrder(dataItem, result);
    return resultData;
  }

  static async deleteWorkOrder(dataItem, result) {
    let resultData = await WorkOrderService.deleteWorkOrder(dataItem, result);
    return resultData;
  }

  static async GetByLikeWorkOrderCodeAndInuse(dataItem, result) {
    let resultData = await WorkOrderService.GetByLikeWorkOrderCodeAndInuse(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeWorkOrderCodeAndProductMainIdAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await WorkOrderService.GetByLikeWorkOrderCodeAndProductMainIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = WorkOrderModels;

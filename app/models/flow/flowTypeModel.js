// ** Model

const FlowTypeService = require("../../services/flow/flowTypeService");

class FlowTypeModels {
  static async getFlowType(dataItem, result) {
    let resultData = await FlowTypeService.getFlowType(dataItem, result);
    return resultData;
  }

  static async searchFlowType(dataItem, result) {
    let resultData = await FlowTypeService.searchFlowType(dataItem, result);
    return resultData;
  }

  static async createFlowType(dataItem, result) {
    let resultData = await FlowTypeService.createFlowType(dataItem, result);
    return resultData;
  }

  static async updateFlowType(dataItem, result) {
    let resultData = await FlowTypeService.updateFlowType(dataItem, result);
    return resultData;
  }

  static async deleteFlowType(dataItem, result) {
    let resultData = await FlowTypeService.deleteFlowType(dataItem, result);
    return resultData;
  }

  static async GetByLikeFlowTypeName(dataItem, result) {
    let resultData = await FlowTypeService.GetByLikeFlowTypeName(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = FlowTypeModels;

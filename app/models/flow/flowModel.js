// ** Model

const FlowService = require("../../services/flow/flowService");

class FlowModels {
  static async getFlow(dataItem, result) {
    let resultData = await FlowService.getFlow(dataItem, result);
    return resultData;
  }

  static async searchFlow(dataItem, result) {
    let resultData = await FlowService.searchFlow(dataItem, result);
    return resultData;
  }

  static async createFlow(dataItem, result) {
    let resultData = await FlowService.createFlow(dataItem, result);
    return resultData;
  }

  static async updateFlow(dataItem, result) {
    let resultData = await FlowService.updateFlow(dataItem, result);
    return resultData;
  }

  static async deleteFlow(dataItem, result) {
    let resultData = await FlowService.deleteFlow(dataItem, result);
    return resultData;
  }

  static async GetByLikeFlowName(dataItem, result) {
    let resultData = await FlowService.GetByLikeFlowName(dataItem, result);
    return resultData;
  }

  static async SearchByProductMainId(dataItem, result) {
    let resultData = await FlowService.SearchByProductMainId(dataItem, result);
    return resultData;
  }
}
module.exports = FlowModels;

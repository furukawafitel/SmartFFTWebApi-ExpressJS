// ** Model

const FlowProcessService = require("../../services/flow/flowProcessService");

class FlowProcessModels {
  static async getFlowProcess(dataItem, result) {
    let resultData = await FlowProcessService.getFlowProcess(dataItem, result);
    return resultData;
  }

  static async searchFlowProcess(dataItem, result) {
    let resultData = await FlowProcessService.searchFlowProcess(
      dataItem,
      result
    );
    return resultData;
  }

  static async createFlowProcess(dataItem, result) {
    let resultData = await FlowProcessService.createFlowProcess(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateFlowProcess(dataItem, result) {
    let resultData = await FlowProcessService.updateFlowProcess(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteFlowProcess(dataItem, result) {
    let resultData = await FlowProcessService.deleteFlowProcess(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeFlowProcessName(dataItem, result) {
    let resultData = await FlowProcessService.GetByLikeFlowProcessName(
      dataItem,
      result
    );
    return resultData;
  }
  static async GetByFlowId(dataItem, result) {
    let resultData = await FlowProcessService.GetByFlowId(dataItem, result);
    return resultData;
  }
}
module.exports = FlowProcessModels;

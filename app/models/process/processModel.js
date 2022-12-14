// ** Model

const ProcessService = require("../../services/process/processService");

class ProcessModels {
  static async getProcess(dataItem, result) {
    let resultData = await ProcessService.getProcess(dataItem, result);
    return resultData;
  }

  static async searchProcess(dataItem, result) {
    let resultData = await ProcessService.searchProcess(dataItem, result);
    return resultData;
  }

  static async createProcess(dataItem, result) {
    let resultData = await ProcessService.createProcess(dataItem, result);
    return resultData;
  }

  static async updateProcess(dataItem, result) {
    let resultData = await ProcessService.updateProcess(dataItem, result);
    return resultData;
  }

  static async deleteProcess(dataItem, result) {
    let resultData = await ProcessService.deleteProcess(dataItem, result);
    return resultData;
  }

  static async GetByLikeProcessName(dataItem, result) {
    let resultData = await ProcessService.GetByLikeProcessName(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeProcessNameAndProductMainIdAndInuse(dataItem, result) {
    let resultData =
      await ProcessService.GetByLikeProcessNameAndProductMainIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = ProcessModels;

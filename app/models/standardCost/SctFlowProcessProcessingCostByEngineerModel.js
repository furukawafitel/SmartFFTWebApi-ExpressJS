// ** Model

const SctFlowProcessProcessingCostByEngineerService = require("../../services/standardCost/SctFlowProcessProcessingCostByEngineerService");

class SctFlowProcessProcessingCostByEngineerModel {
  static async createSctFlowProcessProcessingCostByEngineer(dataItem, result) {
    let resultData =
      await SctFlowProcessProcessingCostByEngineerService.createSctFlowProcessProcessingCostByEngineer(
        dataItem,
        result
      );
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let resultData =
      await SctFlowProcessProcessingCostByEngineerService.DeleteBySctId(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetBySctId(dataItem, result) {
    let resultData =
      await SctFlowProcessProcessingCostByEngineerService.GetBySctId(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = SctFlowProcessProcessingCostByEngineerModel;

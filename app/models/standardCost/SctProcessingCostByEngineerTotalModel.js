// ** Model

const SctProcessingCostByEngineerTotalService = require("../../services/standardCost/SctProcessingCostByEngineerTotalService");

class SctProcessingCostByEngineerTotalModel {
  static async createSctFlowProcessProcessingCostByEngineer(dataItem, result) {
    let resultData =
      await SctProcessingCostByEngineerTotalService.createSctFlowProcessProcessingCostByEngineer(
        dataItem,
        result
      );
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let resultData =
      await SctProcessingCostByEngineerTotalService.DeleteBySctId(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let resultData =
      await SctProcessingCostByEngineerTotalService.GetBySctIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = SctProcessingCostByEngineerTotalModel;

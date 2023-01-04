// ** Model

const SctFlowProcessProcessingCostByMfgService = require("../../services/standardCost/SctFlowProcessProcessingCostByMfgService");

class SctFlowProcessProcessingCostByMfgModel {
  static async createSctFlowProcessProcessingCostByMfg(dataItem, result) {
    let resultData =
      await SctFlowProcessProcessingCostByMfgService.createSctFlowProcessProcessingCostByMfg(
        dataItem,
        result
      );
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let resultData =
      await SctFlowProcessProcessingCostByMfgService.DeleteBySctId(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetBySctId(dataItem, result) {
    let resultData = await SctFlowProcessProcessingCostByMfgService.GetBySctId(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = SctFlowProcessProcessingCostByMfgModel;

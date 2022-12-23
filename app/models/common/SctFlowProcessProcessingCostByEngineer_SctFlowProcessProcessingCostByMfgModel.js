// ** Model

const SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgServices = require("../../services/common/SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgServices");

class SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgModel {
  static async GetBySctId(dataItem, result) {
    let resultData =
      await SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgServices.GetBySctId(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports =
  SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgModel;

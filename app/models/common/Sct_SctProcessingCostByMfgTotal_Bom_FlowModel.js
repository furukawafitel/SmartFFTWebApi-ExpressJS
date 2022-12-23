// ** Model

const Sct_SctProcessingCostByMfgTotal_Bom_FlowServices = require("../../services/common/Sct_SctProcessingCostByMfgTotal_Bom_FlowServices");

class Sct_SctProcessingCostByMfgTotal_Bom_FlowModel {
  static async GetBySctId(dataItem, result) {
    let resultData =
      await Sct_SctProcessingCostByMfgTotal_Bom_FlowServices.GetBySctId(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = Sct_SctProcessingCostByMfgTotal_Bom_FlowModel;

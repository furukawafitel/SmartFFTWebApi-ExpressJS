// ** Model

const Sct_SctProcessingCostByEngineerTotal_Bom_FlowServices = require("../../services/common/Sct_SctProcessingCostByEngineerTotal_Bom_FlowServices");

class Sct_SctProcessingCostByEngineerTotal_Bom_FlowModel {
  static async GetBySctId(dataItem, result) {
    let resultData =
      await Sct_SctProcessingCostByEngineerTotal_Bom_FlowServices.GetBySctId(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = Sct_SctProcessingCostByEngineerTotal_Bom_FlowModel;

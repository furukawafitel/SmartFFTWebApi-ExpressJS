// ** Model

const SctProcessingCostByMfgTotalServices = require("../../services/standardCost/SctProcessingCostByMfgTotalServices");

class SctProcessingCostByMfgTotalModel {
  static async createSctProcessingCostByMfgTotal(dataItem, result) {
    let resultData =
      await SctProcessingCostByMfgTotalServices.createSctProcessingCostByMfgTotal(
        dataItem,
        result
      );
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let resultData = await SctProcessingCostByMfgTotalServices.DeleteBySctId(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let resultData =
      await SctProcessingCostByMfgTotalServices.GetBySctIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = SctProcessingCostByMfgTotalModel;

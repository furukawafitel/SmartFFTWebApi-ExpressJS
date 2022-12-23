// ** Model

const SctBomFlowProcessMaterialUsagePriceService = require("../../services/standardCost/SctBomFlowProcessMaterialUsagePriceService");

class SctBomFlowProcessMaterialUsagePriceModels {
  static async createSctBomFlowProcessMaterialUsagePrice(dataItem, result) {
    let resultData =
      await SctBomFlowProcessMaterialUsagePriceService.createSctBomFlowProcessMaterialUsagePrice(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetBySctId(dataItem, result) {
    let resultData =
      await SctBomFlowProcessMaterialUsagePriceService.GetBySctId(
        dataItem,
        result
      );
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let resultData =
      await SctBomFlowProcessMaterialUsagePriceService.DeleteBySctId(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = SctBomFlowProcessMaterialUsagePriceModels;

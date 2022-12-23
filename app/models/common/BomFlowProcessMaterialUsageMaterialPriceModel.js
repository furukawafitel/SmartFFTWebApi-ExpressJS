// ** Model

const BomFlowProcessMaterialUsageMaterialPriceService = require("../../services/common/BomFlowProcessMaterialUsageMaterialPriceService");

class BomFlowProcessMaterialUsageMaterialPriceModels {
  static async GetByBomIdAndFlowProcessIdAndLikeInuse(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageMaterialPriceService.GetByBomIdAndFlowProcessIdAndLikeInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = BomFlowProcessMaterialUsageMaterialPriceModels;

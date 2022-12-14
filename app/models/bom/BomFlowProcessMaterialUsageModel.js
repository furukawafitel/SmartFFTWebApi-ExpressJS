// ** Model

const BomFlowProcessMaterialUsageService = require("../../services/bom/BomFlowProcessMaterialUsageService");

class BomFlowProcessMaterialUsageModels {
  static async getBomFlowProcessMaterialUsage(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageService.getBomFlowProcessMaterialUsage(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchBomFlowProcessMaterialUsage(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageService.searchBomFlowProcessMaterialUsage(
        dataItem,
        result
      );
    return resultData;
  }

  static async createBomFlowProcessMaterialUsage(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageService.createBomFlowProcessMaterialUsage(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateBomFlowProcessMaterialUsage(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageService.updateBomFlowProcessMaterialUsage(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteBomFlowProcessMaterialUsage(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageService.deleteBomFlowProcessMaterialUsage(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeBomFlowProcessMaterialUsageName(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageService.GetByLikeBomFlowProcessMaterialUsageName(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByFlowId(dataItem, result) {
    let resultData = await BomFlowProcessMaterialUsageService.GetByFlowId(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByBomIdAndFlowProcessIdAndLikeInuse(dataItem, result) {
    let resultData =
      await BomFlowProcessMaterialUsageService.GetByBomIdAndFlowProcessIdAndLikeInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = BomFlowProcessMaterialUsageModels;

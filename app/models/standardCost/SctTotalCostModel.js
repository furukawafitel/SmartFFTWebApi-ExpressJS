// ** Model

const SctTotalCostService = require("../../services/standardCost/SctTotalCostService");

class SctTotalCostModels {
  static async createSctTotalCost(dataItem, result) {
    let resultData = await SctTotalCostService.createSctTotalCost(
      dataItem,
      result
    );
    return resultData;
  }

  static async DeleteBySctId(dataItem, result) {
    let resultData = await SctTotalCostService.DeleteBySctId(dataItem, result);
    return resultData;
  }

  static async GetBySctId(dataItem, result) {
    let resultData = await SctTotalCostService.GetBySctId(dataItem, result);
    return resultData;
  }
}
module.exports = SctTotalCostModels;

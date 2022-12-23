// ** Model

const SctCostConditionForFiscalYearResultService = require("../../services/standardCost/SctCostConditionForFiscalYearResultService");

class SctCostConditionForFiscalYearResultModels {
  static async getSctCostConditionForFiscalYearResult(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearResultService.getSctCostConditionForFiscalYearResult(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchSctCostConditionForFiscalYearResult(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearResultService.searchSctCostConditionForFiscalYearResult(
        dataItem,
        result
      );
    return resultData;
  }

  static async createSctCostConditionForFiscalYearResult(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearResultService.createSctCostConditionForFiscalYearResult(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateSctCostConditionForFiscalYearResult(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearResultService.updateSctCostConditionForFiscalYearResult(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteSctCostConditionForFiscalYearResult(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearResultService.deleteSctCostConditionForFiscalYearResult(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearResultService.GetBySctIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = SctCostConditionForFiscalYearResultModels;

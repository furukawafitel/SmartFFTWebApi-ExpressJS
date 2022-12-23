// ** Model

const SctCostConditionForFiscalYearDefaultService = require("../../services/standardCost/SctCostConditionForFiscalYearDefaultService");

class SctCostConditionForFiscalYearDefaultModels {
  static async getSctCostConditionForFiscalYearDefault(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearDefaultService.getSctCostConditionForFiscalYearDefault(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchSctCostConditionForFiscalYearDefault(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearDefaultService.searchSctCostConditionForFiscalYearDefault(
        dataItem,
        result
      );
    return resultData;
  }

  static async createSctCostConditionForFiscalYearDefault(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearDefaultService.createSctCostConditionForFiscalYearDefault(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateSctCostConditionForFiscalYearDefault(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearDefaultService.updateSctCostConditionForFiscalYearDefault(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteSctCostConditionForFiscalYearDefault(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearDefaultService.deleteSctCostConditionForFiscalYearDefault(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let resultData =
      await SctCostConditionForFiscalYearDefaultService.GetBySctIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = SctCostConditionForFiscalYearDefaultModels;

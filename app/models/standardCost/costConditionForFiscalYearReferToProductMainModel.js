// ** Model

const CostConditionForFiscalYearReferToProductMainService = require("../../services/standardCost/costConditionForFiscalYearReferToProductMainService");

class CostConditionForFiscalYearReferToProductMainModels {
  static async getCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductMainService.getCostConditionForFiscalYearReferToProductMain(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductMainService.searchCostConditionForFiscalYearReferToProductMain(
        dataItem,
        result
      );
    return resultData;
  }

  static async createCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductMainService.createCostConditionForFiscalYearReferToProductMain(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductMainService.updateCostConditionForFiscalYearReferToProductMain(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductMainService.deleteCostConditionForFiscalYearReferToProductMain(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = CostConditionForFiscalYearReferToProductMainModels;

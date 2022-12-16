// ** Model

const CostConditionForFiscalYearReferToProductTypeService = require("../../services/standardCost/costConditionForFiscalYearReferToProductTypeService");

class CostConditionForFiscalYearReferToProductTypeModels {
  static async getCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductTypeService.getCostConditionForFiscalYearReferToProductType(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductTypeService.searchCostConditionForFiscalYearReferToProductType(
        dataItem,
        result
      );
    return resultData;
  }

  static async createCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductTypeService.createCostConditionForFiscalYearReferToProductType(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductTypeService.updateCostConditionForFiscalYearReferToProductType(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductTypeService.deleteCostConditionForFiscalYearReferToProductType(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = CostConditionForFiscalYearReferToProductTypeModels;

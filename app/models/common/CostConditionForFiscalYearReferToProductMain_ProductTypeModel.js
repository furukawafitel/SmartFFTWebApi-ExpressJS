// ** Model

const CostConditionForFiscalYearReferToProductMain_ProductTypeService = require("../../services/common/CostConditionForFiscalYearReferToProductMain_ProductTypeService");

class CostConditionForFiscalYearReferToProductMain_ProductTypeModel {
  static async GetByProductMainIdAndProductTypeIdAndFiscalYear(
    dataItem,
    result
  ) {
    let resultData =
      await CostConditionForFiscalYearReferToProductMain_ProductTypeService.GetByProductMainIdAndProductTypeIdAndFiscalYear(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = CostConditionForFiscalYearReferToProductMain_ProductTypeModel;

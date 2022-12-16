// ** Services

const CostConditionForFiscalYearReferToProductMain_ProductTypeSQL = require("../../sql/common/CostConditionForFiscalYearReferToProductMain_ProductTypeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class CostConditionForFiscalYearReferToProductMain_ProductTypeService {
  static async GetByProductMainIdAndProductTypeIdAndFiscalYear(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductMain_ProductTypeSQL.GetByProductMainIdAndProductTypeIdAndFiscalYear(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports =
  CostConditionForFiscalYearReferToProductMain_ProductTypeService;

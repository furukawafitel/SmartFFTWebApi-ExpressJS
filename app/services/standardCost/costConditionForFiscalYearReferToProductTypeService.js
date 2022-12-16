// ** Services

const CostConditionForFiscalYearReferToProductTypeSQL = require("../../sql/standardCost/costConditionForFiscalYearReferToProductTypeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class CostConditionForFiscalYearReferToProductTypeService {
  static async getCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductTypeSQL.getCostConditionForFiscalYearReferToProductType(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    if (dataItem["PRODUCT_TYPE_ID"] != "") {
      sqlWhere += " AND tb_1.PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'";
    }
    query =
      await CostConditionForFiscalYearReferToProductTypeSQL.searchCostConditionForFiscalYearReferToProductType(
        dataItem,
        sqlWhere
      );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductTypeSQL.createCostConditionForFiscalYearReferToProductType(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductTypeSQL.updateCostConditionForFiscalYearReferToProductType(
        dataItem
      );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteCostConditionForFiscalYearReferToProductType(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductTypeSQL.deleteCostConditionForFiscalYearReferToProductType(
        dataItem
      );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }
}
module.exports = CostConditionForFiscalYearReferToProductTypeService;

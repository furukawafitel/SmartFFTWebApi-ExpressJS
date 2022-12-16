// ** Services

const CostConditionForFiscalYearReferToProductMainSQL = require("../../sql/standardCost/costConditionForFiscalYearReferToProductMainSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class CostConditionForFiscalYearReferToProductMainService {
  static async getCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductMainSQL.getCostConditionForFiscalYearReferToProductMain(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    if (dataItem["PRODUCT_MAIN_ID"] != "") {
      sqlWhere += " AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    }
    query =
      await CostConditionForFiscalYearReferToProductMainSQL.searchCostConditionForFiscalYearReferToProductMain(
        dataItem,
        sqlWhere
      );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductMainSQL.createCostConditionForFiscalYearReferToProductMain(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductMainSQL.updateCostConditionForFiscalYearReferToProductMain(
        dataItem
      );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteCostConditionForFiscalYearReferToProductMain(
    dataItem,
    result
  ) {
    let query =
      await CostConditionForFiscalYearReferToProductMainSQL.deleteCostConditionForFiscalYearReferToProductMain(
        dataItem
      );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }
}
module.exports = CostConditionForFiscalYearReferToProductMainService;

// ** Services

const SctCostConditionForFiscalYearDefaultSQL = require("../../sql/standardCost/SctCostConditionForFiscalYearDefaultSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctCostConditionForFiscalYearDefaultService {
  static async getSctCostConditionForFiscalYearDefault(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearDefaultSQL.getSctCostConditionForFiscalYearDefault(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchSctCostConditionForFiscalYearDefault(dataItem, result) {
    let resultData = [];
    let query;
    query =
      await SctCostConditionForFiscalYearDefaultSQL.searchSctCostConditionForFiscalYearDefault(
        dataItem
      );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createSctCostConditionForFiscalYearDefault(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearDefaultSQL.createSctCostConditionForFiscalYearDefault(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateSctCostConditionForFiscalYearDefault(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearDefaultSQL.updateSctCostConditionForFiscalYearDefault(
        dataItem
      );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteSctCostConditionForFiscalYearDefault(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearDefaultSQL.deleteSctCostConditionForFiscalYearDefault(
        dataItem
      );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearDefaultSQL.GetBySctIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctCostConditionForFiscalYearDefaultService;

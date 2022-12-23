// ** Services

const SctCostConditionForFiscalYearResultSQL = require("../../sql/standardCost/SctCostConditionForFiscalYearResultSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctCostConditionForFiscalYearResultService {
  static async getSctCostConditionForFiscalYearResult(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearResultSQL.getSctCostConditionForFiscalYearResult(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchSctCostConditionForFiscalYearResult(dataItem, result) {
    let resultData = [];
    let query;
    query =
      await SctCostConditionForFiscalYearResultSQL.searchSctCostConditionForFiscalYearResult(
        dataItem
      );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createSctCostConditionForFiscalYearResult(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearResultSQL.createSctCostConditionForFiscalYearResult(
        dataItem
      );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateSctCostConditionForFiscalYearResult(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearResultSQL.updateSctCostConditionForFiscalYearResult(
        dataItem
      );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteSctCostConditionForFiscalYearResult(dataItem, result) {
    let query =
      await SctCostConditionForFiscalYearResultSQL.deleteSctCostConditionForFiscalYearResult(
        dataItem
      );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetBySctIdAndInuse(dataItem, result) {
    let query = await SctCostConditionForFiscalYearResultSQL.GetBySctIdAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctCostConditionForFiscalYearResultService;

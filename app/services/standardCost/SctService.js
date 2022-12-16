// ** Services

const SctSQL = require("../../sql/standardCost/SctSQL");
const SctWorkingProgressSQL = require("../../sql/standardCost/SctWorkingProgressSQL");
const SctCostConditionForFiscalYearResultSQL = require("../../sql/standardCost/SctCostConditionForFiscalYearResultSQL");
const SctCostConditionForFiscalYearDefaultSQL = require("../../sql/standardCost/SctCostConditionForFiscalYearDefaultSQL");

const SctComparePreviousCurrentYearSQL = require("../../sql/standardCost/SctComparePreviousCurrentYearSQL");
const SctCompareLastYearSQL = require("../../sql/standardCost/SctCompareLastYearSQL");

const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SctService {
  static async GetDataExcel(dataItem, result) {
    let query = await SctSQL.GetDataExcel(dataItem);
    let resultData = await MySQLExecute.searchList(query, result);
    return resultData;
  }

  static async getSct(dataItem, result) {
    let query = await SctSQL.getSct(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchSct(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";

    if (dataItem["CUSTOMER_INVOICE_TO_ID"] != "") {
      sqlWhere +=
        " AND tb_1.CUSTOMER_INVOICE_TO_ID = 'dataItem.CUSTOMER_INVOICE_TO_ID'";
    }
    if (dataItem["SCT_PATTERN_ID"] != "") {
      sqlWhere += " AND tb_1.SCT_PATTERN_ID = 'dataItem.SCT_PATTERN_ID'";
    }
    if (dataItem["MATERIAL_CATEGORY_ID"] != "") {
      sqlWhere +=
        " AND tb_1.MATERIAL_CATEGORY_ID = 'dataItem.MATERIAL_CATEGORY_ID'";
    }
    if (dataItem["PRODUCTION_PURPOSE_ID"] != "") {
      sqlWhere +=
        " AND tb_1.PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'";
    }
    if (dataItem["ORDER_TYPE_ID"] != "") {
      sqlWhere += " AND tb_1.ORDER_TYPE_ID = 'dataItem.ORDER_TYPE_ID'";
    }
    if (dataItem["SCT_SUB_CODE_ID"] != "") {
      sqlWhere += " AND tb_1.SCT_SUB_CODE_ID = 'dataItem.SCT_SUB_CODE_ID'";
    }

    if (dataItem.hasOwnProperty("BOM_ID") && dataItem["BOM_ID"] != "") {
      sqlWhere += " AND tb_13.BOM_ID = 'dataItem.BOM_ID'";
    }

    if (dataItem["PRODUCT_TYPE_ID"] != "") {
      sqlWhere += " AND tb_1.PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'";
    } else if (dataItem["PRODUCT_SUB_ID"] != "") {
      sqlWhere += " AND tb_10.PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'";
    } else if (dataItem["PRODUCT_MAIN_ID"] != "") {
      sqlWhere += " AND tb_11.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    } else if (dataItem["PRODUCT_CATEGORY_ID"] != "") {
      sqlWhere +=
        " AND tb_12.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'";
    }

    if (dataItem["TOTAL_WORKING_PROGRESS_PERCENT"] != "") {
      sqlWhere +=
        " AND tb_2.TOTAL_WORKING_PROGRESS_PERCENT = dataItem.TOTAL_WORKING_PROGRESS_PERCENT";
    }

    // *** For search compare previous year
    if (
      dataItem["EFFECTIVE_DATE_FOR_SEARCH_COMPARE_PREVIOUS_CURRENT_YEAR"] != ""
    ) {
      sqlWhere +=
        " AND tb_1.EFFECTIVE_DATE < DATE('dataItem.EFFECTIVE_DATE_FOR_SEARCH_COMPARE_PREVIOUS_CURRENT_YEAR')";
    }

    query = await SctSQL.searchSct(dataItem, sqlWhere);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createSctStep1(dataItem, result) {
    let sqlList = [];
    let resultData;
    sqlList += await SctSQL.CreateSctId();
    sqlList += await SctSQL.createSct(dataItem);
    sqlList += await SctWorkingProgressSQL.createStep1(dataItem);
    sqlList +=
      await SctCostConditionForFiscalYearResultSQL.createSctCostConditionForFiscalYearResult(
        dataItem
      );
    sqlList +=
      await SctCostConditionForFiscalYearDefaultSQL.createSctCostConditionForFiscalYearDefault(
        dataItem
      );

    if (dataItem["SCT_PREVIOUS_CURRENT_YEAR_ID"] !== "") {
      sqlList +=
        await SctComparePreviousCurrentYearSQL.createSctComparePreviousCurrentYear(
          dataItem
        );
    }

    if (dataItem["SCT_LAST_YEAR_ID"] !== "") {
      sqlList += await SctCompareLastYearSQL.createSctCompareLastYear(dataItem);
    }

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateSct(dataItem, result) {
    let query = await SctSQL.updateSct(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteSct(dataItem, result) {
    let query = await SctSQL.deleteSct(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeSctNameAndInuse(dataItem, result) {
    let query = await SctSQL.GetByLikeSctNameAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SctService;

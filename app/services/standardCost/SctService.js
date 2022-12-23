// ** Services

const SctSQL = require("../../sql/standardCost/SctSQL");
const SctWorkingProgressSQL = require("../../sql/standardCost/SctWorkingProgressSQL");
const SctCostConditionForFiscalYearResultSQL = require("../../sql/standardCost/SctCostConditionForFiscalYearResultSQL");
const SctCostConditionForFiscalYearDefaultSQL = require("../../sql/standardCost/SctCostConditionForFiscalYearDefaultSQL");
const SctComparePreviousCurrentYearSQL = require("../../sql/standardCost/SctComparePreviousCurrentYearSQL");
const SctCompareLastYearSQL = require("../../sql/standardCost/SctCompareLastYearSQL");
const SctFlowProcessProcessingCostByEngineerSQL = require("../../sql/standardCost/SctFlowProcessProcessingCostByEngineerSQL");
const SctFlowProcessProcessingCostByMfgSQL = require("../../sql/standardCost/SctFlowProcessProcessingCostByMfgSQL");
const SctFlowProcessSequenceSQL = require("../../sql/standardCost/SctFlowProcessSequenceSQL");
const SctProcessingCostByEngTotalSQL = require("../../sql/standardCost/SctProcessingCostByEngTotalSQL");
const SctProcessingCostByMfgTotalSQL = require("../../sql/standardCost/SctProcessingCostByMfgTotalSQL");
const SctBomSQL = require("../../sql/standardCost/SctBomSQL");
const SctTotalCostSQL = require("../../sql/standardCost/SctTotalCostSQL");
const SctBomFlowProcessMaterialUsagePriceSQL = require("../../sql/standardCost/SctBomFlowProcessMaterialUsagePriceSQL");

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

  static async createSctStep2(dataItem, result) {
    let sqlList = [];
    let resultData;

    for (const [index, item] of dataItem[
      "FLOW_PROCESS_PROCESSING_COST"
    ].entries()) {
      sqlList +=
        await SctFlowProcessProcessingCostByEngineerSQL.createSctFlowProcessProcessingCostByEngineer(
          item
        );
      sqlList += await SctFlowProcessSequenceSQL.createSctFlowProcessSequence(
        item
      );
    }

    sqlList +=
      await SctProcessingCostByEngTotalSQL.createSctProcessingCostByEngTotal(
        dataItem
      );

    sqlList += await SctWorkingProgressSQL.UpdateStep2(dataItem);
    sqlList += await SctBomSQL.createSctBom(dataItem);

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async createSctStep3(dataItem, result) {
    let sqlList = [];
    let resultData;

    for (const [index, item] of dataItem[
      "FLOW_PROCESS_PROCESSING_COST"
    ].entries()) {
      sqlList +=
        await SctFlowProcessProcessingCostByMfgSQL.createSctFlowProcessProcessingCostByMfg(
          item
        );
    }

    sqlList +=
      await SctProcessingCostByMfgTotalSQL.createSctProcessingCostByMfgTotal(
        dataItem
      );
    sqlList += await SctWorkingProgressSQL.UpdateStep3(dataItem);

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async createSctStep4(dataItem, result) {
    let sqlList = [];
    let resultData;

    for (const [index, item] of dataItem[
      "SCT_BOM_FLOW_PROCESS_MATERIAL_USAGE_PRICE"
    ].entries()) {
      sqlList +=
        await SctBomFlowProcessMaterialUsagePriceSQL.createSctBomFlowProcessMaterialUsagePrice(
          item
        );
    }

    sqlList += await SctTotalCostSQL.createSctTotalCost(dataItem);
    sqlList += await SctWorkingProgressSQL.UpdateStep4(dataItem);

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateSctStep1(dataItem, result) {
    let sqlList = [];
    let resultData;
    sqlList += await SctSQL.CreateExistSctId(dataItem);
    sqlList += await SctSQL.updateSctStep1(dataItem);

    sqlList += await SctCostConditionForFiscalYearResultSQL.DeleteBySctId(
      dataItem
    );
    sqlList += await SctCostConditionForFiscalYearDefaultSQL.DeleteBySctId(
      dataItem
    );
    sqlList +=
      await SctCostConditionForFiscalYearResultSQL.createSctCostConditionForFiscalYearResult(
        dataItem
      );
    sqlList +=
      await SctCostConditionForFiscalYearDefaultSQL.createSctCostConditionForFiscalYearDefault(
        dataItem
      );
    sqlList += await SctComparePreviousCurrentYearSQL.DeleteBySctId(dataItem);
    sqlList += await SctCompareLastYearSQL.DeleteBySctId(dataItem);

    if (dataItem["SCT_PREVIOUS_CURRENT_YEAR_ID"] !== "") {
      sqlList +=
        await SctComparePreviousCurrentYearSQL.createSctComparePreviousCurrentYear(
          dataItem
        );
    }

    if (dataItem["SCT_LAST_YEAR_ID"] !== "") {
      sqlList += await SctCompareLastYearSQL.createSctCompareLastYear(dataItem);
    }

    sqlList += await SctWorkingProgressSQL.UpdateUpdateByAndUpdateDate(
      dataItem
    );

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateSctStep2(dataItem, result) {
    let sqlList = [];
    let resultData;

    sqlList += await SctSQL.CreateExistSctId(dataItem);
    sqlList += await SctFlowProcessSequenceSQL.DeleteBySctId(dataItem);
    sqlList += await SctFlowProcessProcessingCostByEngineerSQL.DeleteBySctId(
      dataItem
    );

    for (const [index, item] of dataItem[
      "FLOW_PROCESS_PROCESSING_COST"
    ].entries()) {
      sqlList +=
        await SctFlowProcessProcessingCostByEngineerSQL.createSctFlowProcessProcessingCostByEngineer(
          item
        );
      sqlList += await SctFlowProcessSequenceSQL.createSctFlowProcessSequence(
        item
      );
    }

    sqlList += await SctProcessingCostByEngTotalSQL.DeleteBySctId(dataItem);
    sqlList += await SctBomSQL.DeleteBySctId(dataItem);
    sqlList +=
      await SctProcessingCostByEngTotalSQL.createSctProcessingCostByEngTotal(
        dataItem
      );
    sqlList += await SctBomSQL.createSctBom(dataItem);
    sqlList += await SctWorkingProgressSQL.UpdateUpdateByAndUpdateDate(
      dataItem
    );
    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateSctStep3(dataItem, result) {
    let sqlList = [];
    let resultData;

    sqlList += await SctFlowProcessProcessingCostByMfgSQL.DeleteBySctId(
      dataItem
    );

    for (const [index, item] of dataItem[
      "FLOW_PROCESS_PROCESSING_COST"
    ].entries()) {
      sqlList +=
        await SctFlowProcessProcessingCostByMfgSQL.createSctFlowProcessProcessingCostByMfg(
          item
        );
    }

    sqlList += await SctProcessingCostByMfgTotalSQL.DeleteBySctId(dataItem);
    sqlList +=
      await SctProcessingCostByMfgTotalSQL.createSctProcessingCostByMfgTotal(
        dataItem
      );

    sqlList += await SctWorkingProgressSQL.UpdateUpdateByAndUpdateDate(
      dataItem
    );

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateSctStep4(dataItem, result) {
    let sqlList = [];
    let resultData;

    sqlList += await SctBomFlowProcessMaterialUsagePriceSQL.DeleteBySctId(
      dataItem
    );

    for (const [index, item] of dataItem[
      "SCT_BOM_FLOW_PROCESS_MATERIAL_USAGE_PRICE"
    ].entries()) {
      sqlList +=
        await SctBomFlowProcessMaterialUsagePriceSQL.createSctBomFlowProcessMaterialUsagePrice(
          item
        );
    }
    sqlList += await SctTotalCostSQL.DeleteBySctId(dataItem);
    sqlList += await SctTotalCostSQL.createSctTotalCost(dataItem);
    sqlList += await SctWorkingProgressSQL.UpdateUpdateByAndUpdateDate(
      dataItem
    );

    resultData = MySQLExecute.createList(sqlList, result);
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

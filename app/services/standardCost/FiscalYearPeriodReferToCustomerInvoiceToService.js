// ** Services

const FiscalYearPeriodReferToCustomerInvoiceToSQL = require("../../sql/standardCost/FiscalYearPeriodReferToCustomerInvoiceToSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class FiscalYearPeriodReferToCustomerInvoiceToService {
  static async getFiscalYearPeriodReferToCustomerInvoiceTo(dataItem, result) {
    let query =
      await FiscalYearPeriodReferToCustomerInvoiceToSQL.getFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let resultData = [];
    let query;
    let sqlWhere = "";

    if (dataItem["CUSTOMER_INVOICE_TO_ID"] != "") {
      sqlWhere +=
        " AND tb_1.CUSTOMER_INVOICE_TO_ID = 'dataItem.CUSTOMER_INVOICE_TO_ID'";
    }
    if (dataItem["P2_START_MONTH_OF_FISCAL_YEAR_ID"] != "") {
      sqlWhere +=
        " AND tb_1.P2_START_MONTH_OF_FISCAL_YEAR_ID = 'dataItem.P2_START_MONTH_OF_FISCAL_YEAR_ID'";
    }
    if (dataItem["P3_START_MONTH_OF_FISCAL_YEAR_ID"] != "") {
      sqlWhere +=
        " AND tb_1.P3_START_MONTH_OF_FISCAL_YEAR_ID = 'dataItem.P3_START_MONTH_OF_FISCAL_YEAR_ID'";
    }

    query =
      await FiscalYearPeriodReferToCustomerInvoiceToSQL.searchFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        sqlWhere
      );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let sqlList = [];
    let resultData;

    sqlList +=
      await FiscalYearPeriodReferToCustomerInvoiceToSQL.DeleteByCustomerInvoiceToId(
        dataItem
      );
    sqlList +=
      await FiscalYearPeriodReferToCustomerInvoiceToSQL.createFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem
      );

    resultData = MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let query =
      await FiscalYearPeriodReferToCustomerInvoiceToSQL.updateFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem
      );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let query =
      await FiscalYearPeriodReferToCustomerInvoiceToSQL.deleteFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem
      );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByCustomerInvoiceToIdAndInuse(dataItem, result) {
    let query =
      await FiscalYearPeriodReferToCustomerInvoiceToSQL.GetByCustomerInvoiceToIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = FiscalYearPeriodReferToCustomerInvoiceToService;

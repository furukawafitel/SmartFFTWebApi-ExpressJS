// ** Model

const FiscalYearPeriodReferToCustomerInvoiceToService = require("../../services/standardCost/FiscalYearPeriodReferToCustomerInvoiceToService");

class FiscalYearPeriodReferToCustomerInvoiceToModels {
  static async getFiscalYearPeriodReferToCustomerInvoiceTo(dataItem, result) {
    let resultData =
      await FiscalYearPeriodReferToCustomerInvoiceToService.getFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let resultData =
      await FiscalYearPeriodReferToCustomerInvoiceToService.searchFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        result
      );
    return resultData;
  }

  static async createFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let resultData =
      await FiscalYearPeriodReferToCustomerInvoiceToService.createFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let resultData =
      await FiscalYearPeriodReferToCustomerInvoiceToService.updateFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteFiscalYearPeriodReferToCustomerInvoiceTo(
    dataItem,
    result
  ) {
    let resultData =
      await FiscalYearPeriodReferToCustomerInvoiceToService.deleteFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByCustomerInvoiceToIdAndInuse(dataItem, result) {
    let resultData =
      await FiscalYearPeriodReferToCustomerInvoiceToService.GetByCustomerInvoiceToIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = FiscalYearPeriodReferToCustomerInvoiceToModels;

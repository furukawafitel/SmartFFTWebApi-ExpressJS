// ** Model

const CustomerInvoiceService = require("../../services/customer/customerInvoiceService");

class CustomerInvoiceModels {
  static async getCustomerInvoice(dataItem, result) {
    let resultData = await CustomerInvoiceService.getCustomerInvoice(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchCustomerInvoice(dataItem, result) {
    let resultData = await CustomerInvoiceService.searchCustomerInvoice(
      dataItem,
      result
    );
    return resultData;
  }

  static async createCustomerInvoice(dataItem, result) {
    let resultData = await CustomerInvoiceService.createCustomerInvoice(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateCustomerInvoice(dataItem, result) {
    let resultData = await CustomerInvoiceService.updateCustomerInvoice(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteCustomerInvoice(dataItem, result) {
    let resultData = await CustomerInvoiceService.deleteCustomerInvoice(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeCustomerInvoiceToName(dataItem, result) {
    let resultData =
      await CustomerInvoiceService.GetByLikeCustomerInvoiceToName(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeCustomerInvoiceToAlphabetAndInuse(dataItem, result) {
    let resultData =
      await CustomerInvoiceService.GetByLikeCustomerInvoiceToAlphabetAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await CustomerInvoiceService.GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = CustomerInvoiceModels;

// ** Model

const CustomerShipToService = require("../../services/customer/customerShipService");

class CustomerShipToModels {
  static async getCustomerShipTo(dataItem, result) {
    let resultData = await CustomerShipToService.getCustomerShipTo(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchCustomerShipTo(dataItem, result) {
    let resultData = await CustomerShipToService.searchCustomerShipTo(
      dataItem,
      result
    );
    return resultData;
  }

  static async createCustomerShipTo(dataItem, result) {
    let resultData = await CustomerShipToService.createCustomerShipTo(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateCustomerShipTo(dataItem, result) {
    let resultData = await CustomerShipToService.updateCustomerShipTo(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteCustomerShipTo(dataItem, result) {
    let resultData = await CustomerShipToService.deleteCustomerShipTo(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeCustomerShipToName(dataItem, result) {
    let resultData = await CustomerShipToService.GetByLikeCustomerShipToName(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeCustomerShipToAlphabetAndInuse(dataItem, result) {
    let resultData =
      await CustomerShipToService.GetByLikeCustomerShipToAlphabetAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = CustomerShipToModels;

// ** Model

const CustomerOrderFromService = require("../../services/customer/customerOrderFromService");

class CustomerOrderFromModels {
  static async getCustomerOrderFrom(dataItem, result) {
    let resultData = await CustomerOrderFromService.getCustomerOrderFrom(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchCustomerOrderFrom(dataItem, result) {
    let resultData = await CustomerOrderFromService.searchCustomerOrderFrom(
      dataItem,
      result
    );
    return resultData;
  }

  static async createCustomerOrderFrom(dataItem, result) {
    let resultData = await CustomerOrderFromService.createCustomerOrderFrom(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateCustomerOrderFrom(dataItem, result) {
    let resultData = await CustomerOrderFromService.updateCustomerOrderFrom(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteCustomerOrderFrom(dataItem, result) {
    let resultData = await CustomerOrderFromService.deleteCustomerOrderFrom(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeCustomerOrderFromName(dataItem, result) {
    let resultData =
      await CustomerOrderFromService.GetByLikeCustomerOrderFromName(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeCustomerOrderFromAlphabetAndInuse(dataItem, result) {
    let resultData =
      await CustomerOrderFromService.GetByLikeCustomerOrderFromAlphabetAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = CustomerOrderFromModels;

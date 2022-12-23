// ** Model

const PurchaseModuleService = require("../../services/itemMaster/purchaseModuleService");

class PurchaseModuleModels {
  static async getPurchaseModule(dataItem, result) {
    let resultData = await PurchaseModuleService.getPurchaseModule(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchPurchaseModule(dataItem, result) {
    let resultData = await PurchaseModuleService.searchPurchaseModule(
      dataItem,
      result
    );
    return resultData;
  }

  static async createPurchaseModule(dataItem, result) {
    let resultData = await PurchaseModuleService.createPurchaseModule(
      dataItem,
      result
    );
    return resultData;
  }

  static async updatePurchaseModule(dataItem, result) {
    let resultData = await PurchaseModuleService.updatePurchaseModule(
      dataItem,
      result
    );
    return resultData;
  }

  static async deletePurchaseModule(dataItem, result) {
    let resultData = await PurchaseModuleService.deletePurchaseModule(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikePurchaseModuleNameAndInuse(dataItem, result) {
    let resultData =
      await PurchaseModuleService.GetByLikePurchaseModuleNameAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = PurchaseModuleModels;

// ** Services

const PurchaseModuleSQL = require("../../sql/itemMaster/purchaseModuleSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class PurchaseModuleService {
  static async getPurchaseModule(dataItem, result) {
    let query = await PurchaseModuleSQL.getPurchaseModule(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchPurchaseModule(dataItem, result) {
    let resultData = [];
    let query;
    query = await PurchaseModuleSQL.searchPurchaseModule(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createPurchaseModule(dataItem, result) {
    let query = await PurchaseModuleSQL.createPurchaseModule(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updatePurchaseModule(dataItem, result) {
    let query = await PurchaseModuleSQL.updatePurchaseModule(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deletePurchaseModule(dataItem, result) {
    let query = await PurchaseModuleSQL.deletePurchaseModule(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikePurchaseModuleNameAndInuse(dataItem, result) {
    let query = await PurchaseModuleSQL.GetByLikePurchaseModuleNameAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = PurchaseModuleService;

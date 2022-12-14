// ** Services

const MaterialCategorySQL = require("../../sql/itemMaster/materialCategorySQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialCategoryService {
  static async getMaterialCategory(dataItem, result) {
    let query = await MaterialCategorySQL.getMaterialCategory(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterialCategory(dataItem, result) {
    let resultData = [];
    let query;
    query = await MaterialCategorySQL.searchMaterialCategory(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterialCategory(dataItem, result) {
    let query = await MaterialCategorySQL.createMaterialCategory(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateMaterialCategory(dataItem, result) {
    let query = await MaterialCategorySQL.updateMaterialCategory(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteMaterialCategory(dataItem, result) {
    let query = await MaterialCategorySQL.deleteMaterialCategory(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMaterialCategoryNameAndInuse(dataItem, result) {
    let query = await MaterialCategorySQL.GetByLikeMaterialCategoryNameAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetForBomByLikeMaterialCategoryNameAndInuse(dataItem, result) {
    let query =
      await MaterialCategorySQL.GetForBomByLikeMaterialCategoryNameAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeMaterialCategoryNameAndPurchaseModuleIdAndInuse(
    dataItem,
    result
  ) {
    let query =
      await MaterialCategorySQL.GetByLikeMaterialCategoryNameAndPurchaseModuleIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetMaterialCategoryCanBeSoldByLikeMaterialCategoryNameAndInuse(
    dataItem,
    result
  ) {
    let query =
      await MaterialCategorySQL.GetMaterialCategoryCanBeSoldByLikeMaterialCategoryNameAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetAllByInuse(dataItem, result) {
    let query = await MaterialCategorySQL.GetAllByInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialCategoryService;

// ** Services

const MaterialTypeSQL = require("../../sql/itemMaster/materialTypeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialTypeService {
  static async getMaterialType(dataItem, result) {
    let query = await MaterialTypeSQL.getMaterialType(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterialType(dataItem, result) {
    let resultData = [];
    let query;
    query = await MaterialTypeSQL.searchMaterialType(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterialType(dataItem, result) {
    let query = await MaterialTypeSQL.createMaterialType(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateMaterialType(dataItem, result) {
    let query = await MaterialTypeSQL.updateMaterialType(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteMaterialType(dataItem, result) {
    let query = await MaterialTypeSQL.deleteMaterialType(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMaterialTypeName(dataItem, result) {
    let query = await MaterialTypeSQL.GetByLikeMaterialTypeName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeMaterialTypeNameAndMaterialTypeCategoryId(
    dataItem,
    result
  ) {
    let query =
      await MaterialTypeSQL.GetByLikeMaterialTypeNameAndMaterialTypeCategoryId(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialTypeService;

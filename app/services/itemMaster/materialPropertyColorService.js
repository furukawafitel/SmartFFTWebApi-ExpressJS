// ** Services

const MaterialPropertyColorSQL = require("../../sql/itemMaster/materialPropertyColorSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialPropertyColorService {
  static async getMaterialPropertyColor(dataItem, result) {
    let query = await MaterialPropertyColorSQL.getMaterialPropertyColor(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterialPropertyColor(dataItem, result) {
    let resultData = [];
    let query;
    query = await MaterialPropertyColorSQL.searchMaterialPropertyColor(
      dataItem
    );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterialPropertyColor(dataItem, result) {
    let query = await MaterialPropertyColorSQL.createMaterialPropertyColor(
      dataItem
    );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateMaterialPropertyColor(dataItem, result) {
    let query = await MaterialPropertyColorSQL.updateMaterialPropertyColor(
      dataItem
    );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteMaterialPropertyColor(dataItem, result) {
    let query = await MaterialPropertyColorSQL.deleteMaterialPropertyColor(
      dataItem
    );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMaterialPropertyColorName(dataItem, result) {
    let query =
      await MaterialPropertyColorSQL.GetByLikeMaterialPropertyColorName(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialPropertyColorService;

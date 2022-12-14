// ** Services

const MaterialPropertyMadeBySQL = require("../../sql/itemMaster/materialPropertyMadeBySQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialPropertyMadeByService {
  static async getMaterialPropertyMadeBy(dataItem, result) {
    let query = await MaterialPropertyMadeBySQL.getMaterialPropertyMadeBy(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterialPropertyMadeBy(dataItem, result) {
    let resultData = [];
    let query;
    query = await MaterialPropertyMadeBySQL.searchMaterialPropertyMadeBy(
      dataItem
    );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterialPropertyMadeBy(dataItem, result) {
    let query = await MaterialPropertyMadeBySQL.createMaterialPropertyMadeBy(
      dataItem
    );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateMaterialPropertyMadeBy(dataItem, result) {
    let query = await MaterialPropertyMadeBySQL.updateMaterialPropertyMadeBy(
      dataItem
    );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteMaterialPropertyMadeBy(dataItem, result) {
    let query = await MaterialPropertyMadeBySQL.deleteMaterialPropertyMadeBy(
      dataItem
    );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMaterialPropertyMadeByName(dataItem, result) {
    let query =
      await MaterialPropertyMadeBySQL.GetByLikeMaterialPropertyMadeByName(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialPropertyMadeByService;

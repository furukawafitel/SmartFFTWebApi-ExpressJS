// ** Services

const MaterialPurposeSQL = require("../../sql/itemMaster/materialPurposeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialPurposeService {
  static async getMaterialPurpose(dataItem, result) {
    let query = await MaterialPurposeSQL.getMaterialPurpose(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterialPurpose(dataItem, result) {
    let resultData = [];
    let query;
    query = await MaterialPurposeSQL.searchMaterialPurpose(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterialPurpose(dataItem, result) {
    let query = await MaterialPurposeSQL.createMaterialPurpose(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateMaterialPurpose(dataItem, result) {
    let query = await MaterialPurposeSQL.updateMaterialPurpose(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteMaterialPurpose(dataItem, result) {
    let query = await MaterialPurposeSQL.deleteMaterialPurpose(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMaterialPurposeNameAndInuse(dataItem, result) {
    let query = await MaterialPurposeSQL.GetByLikeMaterialPurposeNameAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialPurposeService;

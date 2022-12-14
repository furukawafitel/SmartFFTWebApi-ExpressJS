// ** Services

const MaterialPropertyShapeSQL = require("../../sql/itemMaster/materialPropertyShapeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialPropertyShapeService {
  static async getMaterialPropertyShape(dataItem, result) {
    let query = await MaterialPropertyShapeSQL.getMaterialPropertyShape(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterialPropertyShape(dataItem, result) {
    let resultData = [];
    let query;
    query = await MaterialPropertyShapeSQL.searchMaterialPropertyShape(
      dataItem
    );
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterialPropertyShape(dataItem, result) {
    let query = await MaterialPropertyShapeSQL.createMaterialPropertyShape(
      dataItem
    );
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateMaterialPropertyShape(dataItem, result) {
    let query = await MaterialPropertyShapeSQL.updateMaterialPropertyShape(
      dataItem
    );
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteMaterialPropertyShape(dataItem, result) {
    let query = await MaterialPropertyShapeSQL.deleteMaterialPropertyShape(
      dataItem
    );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMaterialPropertyShapeName(dataItem, result) {
    let query =
      await MaterialPropertyShapeSQL.GetByLikeMaterialPropertyShapeName(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialPropertyShapeService;

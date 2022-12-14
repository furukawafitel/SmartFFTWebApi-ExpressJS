// ** Services

const ProductionPurposeSQL = require("../../sql/productionControl/productionPurposeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class ProductionPurposeService {
  static async getProductionPurpose(dataItem, result) {
    let query = await ProductionPurposeSQL.getProductionPurpose(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchProductionPurpose(dataItem, result) {
    let resultData = [];
    let query;
    query = await ProductionPurposeSQL.searchProductionPurpose(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createProductionPurpose(dataItem, result) {
    let query = await ProductionPurposeSQL.createProductionPurpose(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateProductionPurpose(dataItem, result) {
    let query = await ProductionPurposeSQL.updateProductionPurpose(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteProductionPurpose(dataItem, result) {
    let query = await ProductionPurposeSQL.deleteProductionPurpose(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeProductionPurposeNameAndInuse(dataItem, result) {
    let query =
      await ProductionPurposeSQL.GetByLikeProductionPurposeNameAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = ProductionPurposeService;

// ** Model

const ProductionPurposeService = require("../../services/productionControl/productionPurpose");

class ProductionPurposeModels {
  static async getProductionPurpose(dataItem, result) {
    let resultData = await ProductionPurposeService.getProductionPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchProductionPurpose(dataItem, result) {
    let resultData = await ProductionPurposeService.searchProductionPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async createProductionPurpose(dataItem, result) {
    let resultData = await ProductionPurposeService.createProductionPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateProductionPurpose(dataItem, result) {
    let resultData = await ProductionPurposeService.updateProductionPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteProductionPurpose(dataItem, result) {
    let resultData = await ProductionPurposeService.deleteProductionPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeProductionPurposeNameAndInuse(dataItem, result) {
    let resultData =
      await ProductionPurposeService.GetByLikeProductionPurposeNameAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = ProductionPurposeModels;

// ** Model

const ProductSubService = require("../../services/productGroup/productSubService");

class ProductSubModels {
  static async getProductSub(dataItem, result) {
    let resultData = await ProductSubService.getProductSub(dataItem, result);
    return resultData;
  }

  static async searchProductSub(dataItem, result) {
    let resultData = await ProductSubService.searchProductSub(dataItem, result);
    return resultData;
  }

  static async createProductSub(dataItem, result) {
    let resultData = await ProductSubService.createProductSub(dataItem, result);
    return resultData;
  }

  static async updateProductSub(dataItem, result) {
    let resultData = await ProductSubService.updateProductSub(dataItem, result);
    return resultData;
  }

  static async deleteProductSub(dataItem, result) {
    let resultData = await ProductSubService.deleteProductSub(dataItem, result);
    return resultData;
  }

  static async getByLikeProductSubNameAndInuse(dataItem, result) {
    let resultData = await ProductSubService.getByLikeProductSubNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }

  static async getByLikeProductSubNameAndProductMainIdAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await ProductSubService.getByLikeProductSubNameAndProductMainIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async getByProductMainId(dataItem, result) {
    let resultData = await ProductSubService.getByProductMainId(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = ProductSubModels;

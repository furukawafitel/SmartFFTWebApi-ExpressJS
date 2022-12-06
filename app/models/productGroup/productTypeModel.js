// ** Model

const ProductTypeService = require("../../services/productGroup/productTypeService");

class ProductTypeModels {
  static async getProductType(dataItem, result) {
    let resultData = await ProductTypeService.getProductType(dataItem, result);
    return resultData;
  }

  static async searchProductType(dataItem, result) {
    let resultData = await ProductTypeService.searchProductType(
      dataItem,
      result
    );
    return resultData;
  }

  static async createProductType(dataItem, result) {
    let resultData = await ProductTypeService.createProductType(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateProductType(dataItem, result) {
    let resultData = await ProductTypeService.updateProductType(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteProductType(dataItem, result) {
    let resultData = await ProductTypeService.deleteProductType(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeProductTypeNameAndInuse(dataItem, result) {
    let resultData = await ProductTypeService.GetByLikeProductTypeNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeProductTypeNameAndProductSubIdAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await ProductTypeService.GetByLikeProductTypeNameAndProductSubIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByProductSubId(dataItem, result) {
    let resultData = await ProductTypeService.GetByProductSubId(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = ProductTypeModels;

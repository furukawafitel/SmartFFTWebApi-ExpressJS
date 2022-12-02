// ** MODEL

const ProductMainService = require("../../services/productGroup/productMainService");
// constructor
class ProductMainModels {
  // ** Get Signin
  static async getProductMain(dataItem, result) {
    let resultData = await ProductMainService.getProductMain(dataItem, result);
    return resultData;
  }

  // ** Get Signin
  static async searchProductMain(dataItem, result) {
    let resultData = await ProductMainService.searchProductMain(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Crate productCategory
  static async createProductMain(dataItem, result) {
    let resultData = await ProductMainService.createProductMain(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Update productCategory
  static async updateProductMain(dataItem, result) {
    let resultData = await ProductMainService.updateProductMain(
      dataItem,
      result
    );
    return resultData;
  }

  // ** delet productCategory
  static async deleteProductMain(dataItem, result) {
    let resultData = await ProductMainService.deleteProductMain(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Get getByLikeProductCategoryNameAndInuse
  static async getByLikeProductMainNameAndInuse(dataItem, result) {
    let resultData = await ProductMainService.getByLikeProductMainNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Get getByLikeProductCategoryNameAndInuse
  static async getByLikeProductMainNameAndProductCategoryIdAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await ProductMainService.getByLikeProductMainNameAndProductCategoryIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  // ** Get getByLikeProductCategoryNameAndInuse
  static async getByProductCategoryId(dataItem, result) {
    let resultData = await ProductMainService.getByProductCategoryId(
      dataItem,
      result
    );
    return resultData;
  }
}

module.exports = ProductMainModels;

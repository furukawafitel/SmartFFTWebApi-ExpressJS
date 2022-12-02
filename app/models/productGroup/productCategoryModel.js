// ** SERVICES PERMISSION

const ProductCategoryService = require("../../services/productGroup/productCategoryService");
// constructor
class ProductCategoryModels {
  // ** Get Signin
  static async getProductcategory(dataItem, result) {
    let resultData = await ProductCategoryService.getProductcategory(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Get Signin
  static async searchProductcategory(dataItem, result) {
    let resultData = await ProductCategoryService.searchProductcategory(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Crate productCategory
  static async createProductcategory(dataItem, result) {
    let resultData = await ProductCategoryService.createProductcategory(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Update productCategory
  static async updateProductcategory(dataItem, result) {
    let resultData = await ProductCategoryService.updateProductcategory(
      dataItem,
      result
    );
    return resultData;
  }

  // ** delet productCategory
  static async deleteProductcategory(dataItem, result) {
    let resultData = await ProductCategoryService.deleteProductcategory(
      dataItem,
      result
    );
    return resultData;
  }

  // ** Get getByLikeProductCategoryNameAndInuse
  static async getByLikeProductCategoryNameAndInuse(dataItem, result) {
    let resultData =
      await ProductCategoryService.getByLikeProductCategoryNameAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}

module.exports = ProductCategoryModels;

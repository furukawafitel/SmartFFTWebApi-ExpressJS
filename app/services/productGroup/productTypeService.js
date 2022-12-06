// ** Services

const ProductType = require("../../sql/productGroup/productTypeSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class ProductTypeService {
  static async getProductType(dataItem, result) {
    let query = await ProductType.getProductType(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchProductType(dataItem, result) {
    let resultData = [];
    let query;

    if (dataItem["PRODUCT_SUB_ID"] !== "") {
      query = await ProductType.SearchByProductSubId(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    } else if (dataItem["PRODUCT_MAIN_ID"] !== "") {
      query = await ProductType.SearchByProductMainId(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    } else if (dataItem["PRODUCT_CATEGORY_ID"] !== "") {
      query = await ProductType.SearchByProductCategoryId(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    } else {
      query = await ProductType.searchProductType(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    }

    return resultData;
  }

  static async createProductType(dataItem, result) {
    let query = await ProductType.createProductType(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateProductType(dataItem, result) {
    let query = await ProductType.updateProductType(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteProductType(dataItem, result) {
    let query = await ProductType.deleteProductType(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeProductTypeNameAndInuse(dataItem, result) {
    let query = await ProductType.GetByLikeProductTypeNameAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeProductTypeNameAndProductSubIdAndInuse(
    dataItem,
    result
  ) {
    let query =
      await ProductType.GetByLikeProductTypeNameAndProductSubIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByProductSubId(dataItem, result) {
    let query = await ProductType.GetByProductSubId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = ProductTypeService;

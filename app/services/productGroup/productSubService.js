// ** Services

const ProductSubSQL = require("../../sql/productGroup/productSubSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class ProductSubService {
  static async getProductSub(dataItem, result) {
    let query = await ProductSubSQL.getProductSub(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchProductSub(dataItem, result) {
    let resultData = [];
    let query;

    if (dataItem["PRODUCT_MAIN_ID"] !== "") {
      query = await ProductSubSQL.searchByProductMainId(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    } else if (dataItem["PRODUCT_CATEGORY_ID"] !== "") {
      query = await ProductSubSQL.SearchByProductCategoryId(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    } else {
      query = await ProductSubSQL.searchProductSub(dataItem);
      resultData = MySQLExecute.search(query, result);
    }

    return resultData;
  }

  static async createProductSub(dataItem, result) {
    let query = await ProductSubSQL.createProductSub(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateProductSub(dataItem, result) {
    let query = await ProductSubSQL.updateProductSub(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteProductSub(dataItem, result) {
    let query = await ProductSubSQL.deleteProductSub(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async getByLikeProductSubNameAndInuse(dataItem, result) {
    let query = await ProductSubSQL.getByLikeProductSubNameAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async getByLikeProductSubNameAndProductMainIdAndInuse(
    dataItem,
    result
  ) {
    let query =
      await ProductSubSQL.getByLikeProductSubNameAndProductMainIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async getByProductMainId(dataItem, result) {
    let query = await ProductSubSQL.getByProductMainId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = ProductSubService;

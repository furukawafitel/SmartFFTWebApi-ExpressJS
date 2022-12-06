// ** Services

const ProductMainSQL = require("../../sql/productGroup/productMainSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class ProductCategoryService {
  static async getProductMain(dataItem, result) {
    let query = await ProductMainSQL.getProductMain(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchProductMain(dataItem, result) {
    let resultData = [];
    let query;

    if (dataItem["PRODUCT_CATEGORY_ID"] == "") {
      query = await ProductMainSQL.searchProductMain(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    } else {
      query = await ProductMainSQL.searchByProductCategoryId(dataItem);
      resultData = MySQLExecute.searchList(query, result);
    }
    return resultData;
  }

  static async createProductMain(dataItem, result) {
    let query = await ProductMainSQL.createProductMain(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateProductMain(dataItem, result) {
    let query = await ProductMainSQL.updateProductMain(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteProductMain(dataItem, result) {
    let query = await ProductMainSQL.deleteProductMain(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async getByLikeProductMainNameAndInuse(dataItem, result) {
    let query = await ProductMainSQL.getByLikeProductMainNameAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async getByLikeProductMainNameAndProductCategoryIdAndInuse(
    dataItem,
    result
  ) {
    let query =
      await ProductMainSQL.getByLikeProductMainNameAndProductCategoryIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async getByProductCategoryId(dataItem, result) {
    let query = await ProductMainSQL.getByProductCategoryId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = ProductCategoryService;

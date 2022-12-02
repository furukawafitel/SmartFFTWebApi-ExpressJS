// ** Services

const ProductCategorySQL = require("../../sql/productGroup/productCategorySQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class ProductCategoryService {
  static async getProductcategory(dataItem, result) {
    let query = await ProductCategorySQL.getProductcategory(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchProductcategory(dataItem, result) {
    let resultData = [];
    let query = await ProductCategorySQL.searchProductcategory(dataItem);
    resultData = MySQLExecute.searchList(query, result);
    return resultData;
  }

  static async createProductcategory(dataItem, result) {
    let query = await ProductCategorySQL.createProductcategory(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateProductcategory(dataItem, result) {
    let query = await ProductCategorySQL.updateProductcategory(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteProductcategory(dataItem, result) {
    let query = await ProductCategorySQL.deleteProductcategory(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async getByLikeProductCategoryNameAndInuse(dataItem, result) {
    let query = await ProductCategorySQL.getByLikeProductCategoryNameAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = ProductCategoryService;

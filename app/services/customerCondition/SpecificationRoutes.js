// ** Services

const SpecificationSQL = require("../../sql/customerCondition/SpecificationSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class SpecificationService {
  static async getSpecification(dataItem, result) {
    let query = await SpecificationSQL.getSpecification(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchSpecification(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    if (dataItem["PRODUCT_MAIN_ID"] !== "") {
      sqlWhere += " AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    }
    query = await SpecificationSQL.searchSpecification(dataItem, sqlWhere);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createSpecification(dataItem, result) {
    let query = await SpecificationSQL.createSpecification(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateSpecification(dataItem, result) {
    let query = await SpecificationSQL.updateSpecification(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteSpecification(dataItem, result) {
    let query = await SpecificationSQL.deleteSpecification(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeSpecificationCodeAndInuse(dataItem, result) {
    let query = await SpecificationSQL.GetByLikeSpecificationCodeAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeSpecificationCodeAndProductMainIdAndInuse(
    dataItem,
    result
  ) {
    let query =
      await SpecificationSQL.GetByLikeSpecificationCodeAndProductMainIdAndInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = SpecificationService;

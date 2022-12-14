// ** Services

const PartNoSQL = require("../../sql/customerCondition/partNoSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class PartNoService {
  static async getPartNo(dataItem, result) {
    let query = await PartNoSQL.getPartNo(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchPartNo(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    if (dataItem["PRODUCT_MAIN_ID"] !== "") {
      sqlWhere += " AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    }
    query = await PartNoSQL.searchPartNo(dataItem, sqlWhere);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createPartNo(dataItem, result) {
    let query = await PartNoSQL.createPartNo(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updatePartNo(dataItem, result) {
    let query = await PartNoSQL.updatePartNo(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deletePartNo(dataItem, result) {
    let query = await PartNoSQL.deletePartNo(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikePartNoCodeAndInuse(dataItem, result) {
    let query = await PartNoSQL.GetByLikePartNoCodeAndInuse(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikePartNoCodeAndProductMainIdAndInuse(dataItem, result) {
    let query = await PartNoSQL.GetByLikePartNoCodeAndProductMainIdAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = PartNoService;

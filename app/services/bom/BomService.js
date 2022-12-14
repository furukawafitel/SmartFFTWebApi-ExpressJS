// ** Services

const BomSQL = require("../../sql/bom/BomSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class BomService {
  static async getBom(dataItem, result) {
    let query = await BomSQL.getBom(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchBom(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";

    if (dataItem["PRODUCTION_PURPOSE_ID"] != "") {
      sqlWhere +=
        " AND tb_2.PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'";
    }
    if (dataItem["FLOW_ID"] != "") {
      sqlWhere += " AND tb_3.FLOW_ID = 'dataItem.FLOW_ID'";
    }
    if (dataItem["PRODUCT_TYPE_ID"] != "") {
      sqlWhere += " AND tb_4.PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'";
    } else if (dataItem["PRODUCT_SUB_ID"] != "") {
      sqlWhere += " AND tb_5.PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'";
    } else if (dataItem["PRODUCT_MAIN_ID"] != "") {
      sqlWhere += " AND tb_6.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    } else if (dataItem["PRODUCT_CATEGORY_ID"] != "") {
      sqlWhere +=
        " AND tb_7.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'";
    }

    query = await BomSQL.searchBom(dataItem, sqlWhere);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createBom(dataItem, result) {
    let query = await BomSQL.createBom(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateBom(dataItem, result) {
    let query = await BomSQL.updateBom(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteBom(dataItem, result) {
    let query = await BomSQL.deleteBom(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeBomName(dataItem, result) {
    let query = await BomSQL.GetByLikeBomName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async SearchByProductTypeId(dataItem, result) {
    let query = await BomSQL.SearchByProductTypeId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = BomService;

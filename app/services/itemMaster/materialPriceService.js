// ** Services

const MaterialPriceSQL = require("../../sql/itemMaster/materialPriceSQL");
const MaterialPriceSctSQL = require("../../sql/itemMaster/materialPriceSctSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialPriceService {
  static async getMaterialPrice(dataItem, result) {
    let query = await MaterialPriceSQL.getMaterialPrice(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterialPrice(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    if (
      dataItem.hasOwnProperty("MATERIAL_CATEGORY_ID") &&
      dataItem["MATERIAL_CATEGORY_ID"] !== ""
    ) {
      sqlWhere +=
        " AND tb_6.MATERIAL_CATEGORY_ID = 'dataItem.MATERIAL_CATEGORY_ID'";
    }

    if (
      dataItem.hasOwnProperty("ORDER_TYPE_ID") &&
      dataItem["ORDER_TYPE_ID"] !== ""
    ) {
      sqlWhere += " AND tb_6.ORDER_TYPE_ID = 'dataItem.ORDER_TYPE_ID'";
    }

    if (
      dataItem.hasOwnProperty("PRODUCTION_PURPOSE_ID") &&
      dataItem["PRODUCTION_PURPOSE_ID"] !== ""
    ) {
      sqlWhere +=
        " AND tb_6.PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'";
    }
    query = await MaterialPriceSQL.searchMaterialPrice(dataItem, sqlWhere);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterialPrice(dataItem, result) {
    let sqlList = [];
    let resultData;
    sqlList += await MaterialPriceSQL.CreateMaterialPriceId();
    sqlList += await MaterialPriceSQL.createMaterialPrice(dataItem);

    if (dataItem["SCT_ID"] !== "") {
      sqlList += await MaterialPriceSctSQL.createMaterialPriceSct(dataItem);
    }

    resultData = await MySQLExecute.createList(sqlList, result);
    return resultData;
  }

  static async updateMaterialPrice(dataItem, result) {
    let sqlList = [];
    sqlList += await MaterialPriceSQL.updateMaterialPrice(dataItem);
    if (dataItem["SCT_ID"] !== "") {
      sqlList += await MaterialPriceSctSQL.updateMaterialPriceSct(dataItem);
    }
    let resultData = MySQLExecute.updateList(sqlList, result);
    return resultData;
  }

  static async deleteMaterialPrice(dataItem, result) {
    let query = await MaterialPriceSQL.deleteMaterialPrice(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByMaterialIdAndFiscalYearAndInuse(dataItem, result) {
    let query = await MaterialPriceSQL.GetByMaterialIdAndFiscalYearAndInuse(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialPriceService;

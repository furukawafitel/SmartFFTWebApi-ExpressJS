// ** Services

const MaterialSQL = require("../../sql/itemMaster/materialSQL");
const MaterialProductMainSQL = require("../../sql/itemMaster/materialProductMainSQL");
const MaterialProductDetailSQL = require("../../sql/itemMaster/materialProductDetailSQL");
const MaterialBomSQL = require("../../sql/itemMaster/materialBomSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialService {
  static async getMaterial(dataItem, result) {
    let query = await MaterialSQL.getMaterial(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchMaterial(dataItem, result) {
    let resultData = [];
    let query;
    let sqlWhere = "";
    let sqlSelect = "";

    if (dataItem["CHECK_ITEM_IN_PRODUCT_MAIN_ID"] !== "") {
      sqlSelect +=
        " , (SELECT COUNT(*) FROM MATERIAL_PRODUCT_MAIN WHERE PRODUCT_MAIN_ID  = 'dataItem.PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN' AND tb_1.MATERIAL_ID = MATERIAL_ID) AS IS_EXIST_MATERIAL_IN_PRODUCT_MAIN , 'dataItem.PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN' AS PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN ";
    }

    if (dataItem["MATERIAL_INTERNAL_SHORT_NAME"] != "") {
      sqlWhere +=
        " AND tb_1.MATERIAL_INTERNAL_SHORT_NAME LIKE '%dataItem.MATERIAL_INTERNAL_SHORT_NAME%'";
    }

    if (dataItem["WIDTH"] != "") {
      sqlWhere += " AND tb_1.WIDTH LIKE '%dataItem.WIDTH%'";
    }

    if (dataItem["HEIGHT"] != "") {
      sqlWhere += " AND tb_1.HEIGHT LIKE '%dataItem.HEIGHT%'";
    }

    if (dataItem["DEPTH"] != "") {
      sqlWhere += " AND tb_1.DEPTH LIKE '%dataItem.DEPTH%'";
    }

    if (dataItem["IS_SEARCH_FOR_BOM"] != "") {
      sqlWhere += " AND tb_1.MATERIAL_CATEGORY_ID != 1";
    }

    if (dataItem["MATERIAL_CATEGORY_ID"] != "") {
      sqlWhere +=
        " AND tb_1.MATERIAL_CATEGORY_ID = 'dataItem.MATERIAL_CATEGORY_ID'";
    }

    if (dataItem["MATERIAL_PURPOSE_ID"] != "") {
      sqlWhere +=
        " AND tb_1.MATERIAL_PURPOSE_ID = 'dataItem.MATERIAL_PURPOSE_ID'";
    }

    if (dataItem["MATERIAL_TYPE_ID"] != "") {
      sqlWhere += " AND tb_1.MATERIAL_TYPE_ID = 'dataItem.MATERIAL_TYPE_ID'";
    }

    if (dataItem["VENDOR_ID"] != "") {
      sqlWhere += " AND tb_1.VENDOR_ID = 'dataItem.VENDOR_ID'";
    }

    if (dataItem["MAKER_ID"] != "") {
      sqlWhere += " AND tb_1.MAKER_ID = 'dataItem.MAKER_ID'";
    }

    if (dataItem["PRODUCT_TYPE_ID"] != "") {
      sqlWhere += " AND tb_12.PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'";
    } else if (dataItem["PRODUCT_SUB_ID"] != "") {
      sqlWhere += " AND tb_13.PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'";
    } else if (dataItem["PRODUCT_MAIN_ID"] != "") {
      sqlWhere += " AND tb_18.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'";
    } else if (dataItem["PRODUCT_CATEGORY_ID"] != "") {
      sqlWhere +=
        " AND tb_19.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'";
    }

    if (dataItem["WORK_ORDER_ID"] != "") {
      sqlWhere += " AND tb_14.WORK_ORDER_ID = 'dataItem.WORK_ORDER_ID'";
    }
    if (dataItem["PART_NO_ID"] != "") {
      sqlWhere += " AND tb_15.PART_NO_ID = 'dataItem.PART_NO_ID'";
    }
    if (dataItem["SPECIFICATION_ID"] != "") {
      sqlWhere += " AND tb_16.SPECIFICATION_ID = 'dataItem.SPECIFICATION_ID'";
    }
    if (dataItem["CUSTOMER_ORDER_FROM_ID"] != "") {
      sqlWhere +=
        " AND tb_17.CUSTOMER_ORDER_FROM_ID = 'dataItem.CUSTOMER_ORDER_FROM_ID'";
    }

    if (dataItem["WORK_ORDER_ID"] != "") {
      sqlWhere += " AND tb_14.WORK_ORDER_ID = 'dataItem.WORK_ORDER_ID'";
    }
    if (dataItem["PART_NO_ID"] != "") {
      sqlWhere += " AND tb_15.PART_NO_ID = 'dataItem.PART_NO_ID'";
    }
    if (dataItem["SPECIFICATION_ID"] != "") {
      sqlWhere += " AND tb_16.SPECIFICATION_ID = 'dataItem.SPECIFICATION_ID'";
    }
    if (dataItem["CUSTOMER_ORDER_FROM_ID"] != "") {
      sqlWhere +=
        " AND tb_17.CUSTOMER_ORDER_FROM_ID = 'dataItem.CUSTOMER_ORDER_FROM_ID'";
    }

    if (dataItem["MATERIAL_PROPERTY_COLOR_ID"] != "") {
      sqlWhere +=
        " AND tb_1.MATERIAL_PROPERTY_COLOR_ID = 'dataItem.MATERIAL_PROPERTY_COLOR_ID'";
    }
    if (dataItem["MATERIAL_PROPERTY_SHAPE_ID"] != "") {
      sqlWhere +=
        " AND tb_1.MATERIAL_PROPERTY_SHAPE_ID = 'dataItem.MATERIAL_PROPERTY_SHAPE_ID'";
    }
    if (dataItem["MATERIAL_PROPERTY_MADE_BY_ID"] != "") {
      sqlWhere +=
        " AND tb_1.MATERIAL_PROPERTY_MADE_BY_ID = 'dataItem.MATERIAL_PROPERTY_MADE_BY_ID'";
    }

    if (dataItem["USAGE_UNIT_ID"] != "") {
      sqlWhere += " AND tb_1.USAGE_UNIT_ID = 'dataItem.USAGE_UNIT_ID'";
    }

    if (dataItem.hasOwnProperty("BOM_ID") && dataItem["BOM_ID"] != "") {
      sqlWhere += " AND tb_21.BOM_ID = 'dataItem.BOM_ID'";
    }

    if (dataItem["IS_HAVE_MATERIAL_PRICE_OF_FISCAL_YEAR"] != "") {
      if (dataItem["IS_HAVE_MATERIAL_PRICE_OF_FISCAL_YEAR"] == "1") {
        sqlWhere += ` AND EXISTS (
            SELECT 
                 MATERIAL_PRICE_ID 
            FROM 
                 MATERIAL_PRICE 
            WHERE 
                     MATERIAL_ID = tb_1.MATERIAL_ID 
                 AND FISCAL_YEAR = 'dataItem.FISCAL_YEAR' 
                 AND INUSE = 1
         )  `;
      } else {
        sqlWhere += `
        AND NOT EXISTS (
                       SELECT 
                            MATERIAL_PRICE_ID 
                       FROM 
                            MATERIAL_PRICE 
                       WHERE 
                                MATERIAL_ID = tb_1.MATERIAL_ID 
                            AND FISCAL_YEAR = 'dataItem.FISCAL_YEAR' 
                            AND INUSE = 1
                    )                          
     `;
      }
    }

    if (dataItem["IS_EXISTS_MATERIAL_IN_PRODUCT_MAIN"] != "") {
      if (dataItem["IS_EXISTS_MATERIAL_IN_PRODUCT_MAIN"] == "1") {
        sqlWhere += ` AND EXISTS (
            SELECT 
                 MATERIAL_ID 
            FROM 
                 MATERIAL_PRODUCT_MAIN 
            WHERE 
                     MATERIAL_ID = tb_1.MATERIAL_ID 
                 AND PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN' 
                 AND INUSE = 1
         )                      `;
      } else {
        sqlWhere += `  AND NOT EXISTS (
            SELECT 
                 MATERIAL_ID 
            FROM 
                 MATERIAL_PRODUCT_MAIN 
            WHERE 
                     MATERIAL_ID = tb_1.MATERIAL_ID 
                 AND PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN' 
                 AND INUSE = 1
         )           `;
      }
    }

    query = await MaterialSQL.searchMaterial(dataItem, sqlWhere, sqlSelect);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createMaterial(dataItem, result) {
    let resultData;
    let args = [];
    let sqlList = [];

    if (dataItem["PRODUCT_TYPE_ID"] == "") {
      args.push(dataItem["MATERIAL_CATEGORY_ID"]);
      args.push(dataItem["MATERIAL_PURPOSE_ID"]);
      args.push(dataItem["MATERIAL_TYPE_ID"]);
      args.push(dataItem["VENDOR_ID"]);
      args.push(dataItem["MAKER_ID"]);
      args.push(dataItem["WIDTH"] != "" ? dataItem["WIDTH"] : null);
      args.push(dataItem["HEIGHT"] != "" ? dataItem["HEIGHT"] : null);
      args.push(dataItem["DEPTH"] != "" ? dataItem["DEPTH"] : null);

      args.push(
        dataItem["MATERIAL_PROPERTY_COLOR_ID"] != ""
          ? dataItem["MATERIAL_PROPERTY_COLOR_ID"]
          : null
      );
      args.push(
        dataItem["MATERIAL_PROPERTY_SHAPE_ID"] != ""
          ? dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
          : null
      );
      args.push(
        dataItem["MATERIAL_PROPERTY_MADE_BY_ID"] != ""
          ? dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
          : null
      );
      args.push(dataItem["USAGE_UNIT_ID"]);
      args.push(dataItem["MATERIAL_INTERNAL_FULL_NAME"]);
      args.push(
        dataItem["MATERIAL_INTERNAL_SHORT_NAME"] != ""
          ? dataItem["MATERIAL_INTERNAL_SHORT_NAME"]
          : null
      );
      args.push(dataItem["MATERIAL_EXTERNAL_CODE"]);
      args.push(dataItem["MATERIAL_EXTERNAL_FULL_NAME"]);
      args.push(dataItem["MATERIAL_EXTERNAL_SHORT_NAME"]);

      args.push(
        dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME"]
      );
      args.push(
        dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME"]
      );
      args.push(
        dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME"]
      );
      args.push(
        dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME"]
      );
      args.push(dataItem["IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE"]);

      args.push(dataItem["CREATE_BY"]);
      args.push(dataItem["IMAGE"] != "" ? dataItem["IMAGE_ROOT_PATH"] : null);
      args.push(dataItem["ITEM_CODE_FOR_SUPPORT_MES"]);

      resultData = MySQLExecute.call_JCode(args, result);
    } else {
      // ** Optional
      if (dataItem["IMAGE"] != "") {
        dataItem["IMAGE_PATH"] =
          dataItem["IMAGE_ROOT_PATH"] +
          dataItem["MATERIAL_INTERNAL_CODE"] +
          ".png";
      } else {
        dataItem["IMAGE_PATH"] = "";
      }
      // ** insert list Data
      sqlList += await MaterialSQL.CreateMaterialId();
      sqlList += await MaterialSQL.createMaterial(dataItem);
      sqlList += await MaterialProductDetailSQL.createMaterialProductDetail(
        dataItem
      );
      sqlList += await MaterialProductMainSQL.InsertByMaterialIdGenKey(
        dataItem
      );
      sqlList += await MaterialBomSQL.InsertByMaterialIdGenKey(dataItem);
      resultData = MySQLExecute.createList(sqlList, result);
    }

    return resultData;
  }

  static async updateMaterial(dataItem, result) {
    let resultData;
    let query;
    let sqlList = [];

    if (dataItem["IMAGE"] != "") {
      dataItem["IMAGE_PATH"] =
        dataItem["IMAGE_ROOT_PATH"] +
        dataItem["MATERIAL_INTERNAL_CODE"] +
        ".png";
    }

    if (
      dataItem["MATERIAL_PRODUCT_DETAIL_ID"] == "" ||
      dataItem["MATERIAL_PRODUCT_DETAIL_ID"] == null
    ) {
      query = await MaterialSQL.updateMaterial(dataItem);
      resultData = MySQLExecute.update(query, result);
    } else {
      dataItem["CREATE_BY"] = dataItem["UPDATE_BY"];
      sqlList += await MaterialSQL.UpdateIncludeMaterialInternalCode(dataItem);
      sqlList += await MaterialProductDetailSQL.updateMaterialProductDetail(
        dataItem
      );
      sqlList += await MaterialProductMainSQL.DeleteByOldProductMainId(
        dataItem
      );
      sqlList += await MaterialProductMainSQL.createMaterialProductMain(
        dataItem
      );
      sqlList += await MaterialBomSQL.DeleteByMaterialId(dataItem);
      sqlList += await MaterialBomSQL.createMaterialBom(dataItem);
      resultData = MySQLExecute.updateList(sqlList, result);
    }

    return resultData;
  }

  static async deleteMaterial(dataItem, result) {
    let query = await MaterialSQL.deleteMaterial(dataItem);
    let resultData = await MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeMaterialName(dataItem, result) {
    let query = await MaterialSQL.GetByLikeMaterialName(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetCountByMaterialCategoryId(dataItem, result) {
    let query = await MaterialSQL.GetCountByMaterialCategoryId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetCountByMaterialPurposeId(dataItem, result) {
    let query = await MaterialSQL.GetCountByMaterialPurposeId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetCountByMaterialTypeId(dataItem, result) {
    let query = await MaterialSQL.GetCountByMaterialTypeId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetCountByVendorId(dataItem, result) {
    let query = await MaterialSQL.GetCountByVendorId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetCountByMakerId(dataItem, result) {
    let query = await MaterialSQL.GetCountByMakerId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetImageByItemCodeForSupportMesAndOldSystem(dataItem, result) {
    let query = await MaterialSQL.GetImageByItemCodeForSupportMesAndOldSystem(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = MaterialService;

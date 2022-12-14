// ** SQLFactory

// *** Declare Function SQL

class MaterialSQL {
  // *** Function Get
  static getMaterial = async (dataItem) => {
    let sql = `    SELECT
                        MATERIAL_ID
                    , MATERIAL_INTERNAL_CODE
                    , MATERIAL_INTERNAL_FULL_NAME
                    , MATERIAL_INTERNAL_SHORT_NAME
                    , MATERIAL_EXTERNAL_CODE
                    , MATERIAL_EXTERNAL_FULL_NAME
                    , MATERIAL_EXTERNAL_SHORT_NAME
                    , INUSE
                    FROM 
                    MATERIAL                    
                    WHERE 
                    MATERIAL_ID = 'dataItem.MATERIAL_ID'
                    `;

    sql = sql.replace("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    return sql;
  };

  // *** Function Search
  static searchMaterial = async (dataItem, sqlWhere, sqlSelect) => {
    let sqlList = [];

    let sql = `    SELECT 
                    COUNT(*) AS TOTAL_COUNT
                FROM 
                    MATERIAL tb_1
                        INNER JOIN 
                    MATERIAL_CATEGORY tb_2
                        ON tb_1.MATERIAL_CATEGORY_ID = tb_2.MATERIAL_CATEGORY_ID
                        INNER JOIN 
                    MATERIAL_PURPOSE tb_3
                        ON tb_1.MATERIAL_PURPOSE_ID  = tb_3.MATERIAL_PURPOSE_ID
                        INNER JOIN 
                    MATERIAL_TYPE tb_4
                        ON tb_1.MATERIAL_TYPE_ID  = tb_4.MATERIAL_TYPE_ID 
                        INNER JOIN 
                    VENDOR tb_5
                        ON tb_1.VENDOR_ID  = tb_5.VENDOR_ID
                        INNER JOIN 
                    MAKER tb_6
                        ON tb_1.MAKER_ID  = tb_6.MAKER_ID
                        LEFT JOIN 
                    MATERIAL_PROPERTY_COLOR tb_7
                        ON tb_1.MATERIAL_PROPERTY_COLOR_ID  = tb_7.MATERIAL_PROPERTY_COLOR_ID  
                        LEFT JOIN 
                    MATERIAL_PROPERTY_SHAPE tb_8
                        ON tb_1.MATERIAL_PROPERTY_SHAPE_ID  = tb_8.MATERIAL_PROPERTY_SHAPE_ID  
                        LEFT JOIN 
                    MATERIAL_PROPERTY_MADE_BY tb_9
                        ON tb_1.MATERIAL_PROPERTY_MADE_BY_ID  = tb_9.MATERIAL_PROPERTY_MADE_BY_ID
                        LEFT JOIN 
                    MATERIAL_PRODUCT_DETAIL tb_11
                        ON tb_1.MATERIAL_ID = tb_11.MATERIAL_ID
                        LEFT JOIN
                    PRODUCT_TYPE tb_12
                        ON tb_11.PRODUCT_TYPE_ID = tb_12.PRODUCT_TYPE_ID
                        LEFT JOIN
                    PRODUCT_SUB tb_13
                        ON tb_12.PRODUCT_SUB_ID = tb_13.PRODUCT_SUB_ID
                        LEFT JOIN
                    WORK_ORDER tb_14
                        ON tb_11.WORK_ORDER_ID  = tb_14.WORK_ORDER_ID 
                        LEFT JOIN
                    PART_NO  tb_15
                        ON tb_11.PART_NO_ID  = tb_15.PART_NO_ID  
                        LEFT JOIN
                    SPECIFICATION tb_16
                        ON tb_11.SPECIFICATION_ID  = tb_16.SPECIFICATION_ID   	
                        LEFT JOIN
                    CUSTOMER_ORDER_FROM  tb_17
                        ON tb_11.CUSTOMER_ORDER_FROM_ID  = tb_17.CUSTOMER_ORDER_FROM_ID
                        LEFT JOIN
                    PRODUCT_MAIN tb_18
                        ON tb_13.PRODUCT_MAIN_ID = tb_18.PRODUCT_MAIN_ID
                        LEFT JOIN
                    PRODUCT_CATEGORY tb_19
                        ON tb_18.PRODUCT_CATEGORY_ID = tb_19.PRODUCT_CATEGORY_ID
                        INNER JOIN 
                    UNIT_OF_MEASUREMENT tb_20
                        ON tb_1.USAGE_UNIT_ID = tb_20.UNIT_OF_MEASUREMENT_ID
                        LEFT JOIN
                    MATERIAL_BOM tb_21
                        ON tb_1.MATERIAL_ID = tb_21.MATERIAL_ID
                        LEFT JOIN
                    BOM tb_22
                        ON tb_21.BOM_ID = tb_22.BOM_ID
                WHERE 
                        tb_1.MATERIAL_INTERNAL_CODE LIKE '%dataItem.MATERIAL_INTERNAL_CODE%'
                    AND tb_1.MATERIAL_INTERNAL_FULL_NAME LIKE '%dataItem.MATERIAL_INTERNAL_FULL_NAME%'

                    AND tb_1.MATERIAL_EXTERNAL_CODE LIKE '%dataItem.MATERIAL_EXTERNAL_CODE%'
                    AND tb_1.MATERIAL_EXTERNAL_FULL_NAME LIKE '%dataItem.MATERIAL_EXTERNAL_FULL_NAME%'
                    AND tb_1.MATERIAL_EXTERNAL_SHORT_NAME LIKE '%dataItem.MATERIAL_EXTERNAL_SHORT_NAME%'

                    AND tb_1.ITEM_CODE_FOR_SUPPORT_MES LIKE '%dataItem.ITEM_CODE_FOR_SUPPORT_MES%'

                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                    dataItem.sqlWhere `;

    sql = sql.replace("dataItem.sqlWhere", sqlWhere);

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN",
      dataItem["PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PURPOSE_ID",
      dataItem["MATERIAL_PURPOSE_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_ID",
      dataItem["MATERIAL_TYPE_ID"]
    );
    sql = sql.replace("dataItem.VENDOR_ID", dataItem["VENDOR_ID"]);
    sql = sql.replace("dataItem.MAKER_ID", dataItem["MAKER_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);

    sql = sql.replace("dataItem.WORK_ORDER_ID", dataItem["WORK_ORDER_ID"]);
    sql = sql.replace("dataItem.PART_NO_ID", dataItem["PART_NO_ID"]);
    sql = sql.replace(
      "dataItem.SPECIFICATION_ID",
      dataItem["SPECIFICATION_ID"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ID",
      dataItem["CUSTOMER_ORDER_FROM_ID"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
    );
    sql = sql.replace("dataItem.WIDTH", dataItem["WIDTH"]);
    sql = sql.replace("dataItem.HEIGHT", dataItem["HEIGHT"]);
    sql = sql.replace("dataItem.DEPTH", dataItem["DEPTH"]);
    sql = sql.replace("dataItem.USAGE_UNIT_ID", dataItem["USAGE_UNIT_ID"]);

    sql = sql.replace(
      "dataItem.ITEM_CODE_FOR_SUPPORT_MES",
      dataItem["ITEM_CODE_FOR_SUPPORT_MES"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_CODE",
      dataItem["MATERIAL_INTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_FULL_NAME",
      dataItem["MATERIAL_INTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_SHORT_NAME",
      dataItem["MATERIAL_INTERNAL_SHORT_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_CODE",
      dataItem["MATERIAL_EXTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["MATERIAL_EXTERNAL_SHORT_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sql = sql.replace("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);

    if (dataItem.hasOwnProperty("BOM_ID")) {
      sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    }

    sqlList.push(sql);

    sql = `
    SELECT 
    tb_1.MATERIAL_ID
  , tb_1.WIDTH
  , tb_1.HEIGHT
  , tb_1.DEPTH
  , tb_1.MATERIAL_PROPERTY_COLOR_ID
  , tb_7.MATERIAL_PROPERTY_COLOR_NAME
  , tb_1.MATERIAL_PROPERTY_SHAPE_ID
  , tb_8.MATERIAL_PROPERTY_SHAPE_NAME
  , tb_1.MATERIAL_PROPERTY_MADE_BY_ID
  , tb_9.MATERIAL_PROPERTY_MADE_BY_NAME
  , tb_1.USAGE_UNIT_ID
  , tb_20.SYMBOL AS USAGE_UNIT_SYMBOL
  , tb_1.IMAGE_PATH
  , tb_1.MATERIAL_INTERNAL_CODE
  , tb_1.MATERIAL_INTERNAL_FULL_NAME
  , tb_1.MATERIAL_INTERNAL_SHORT_NAME
  , tb_1.MATERIAL_EXTERNAL_CODE
  , tb_1.MATERIAL_EXTERNAL_FULL_NAME
  , tb_1.MATERIAL_EXTERNAL_SHORT_NAME
  , tb_1.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME
  , tb_1.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME
  , tb_1.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME
  , tb_1.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME
  , tb_1.IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE
  , tb_1.ITEM_CODE_FOR_SUPPORT_MES
  , tb_1.MATERIAL_CATEGORY_ID
  , tb_2.MATERIAL_CATEGORY_NAME
  , tb_2.MATERIAL_CATEGORY_ALPHABET
  , tb_1.MATERIAL_PURPOSE_ID 
  , tb_3.MATERIAL_PURPOSE_NAME 
  , tb_1.MATERIAL_TYPE_ID 
  , tb_4.MATERIAL_TYPE_NAME  
  , tb_1.VENDOR_ID  
  , tb_5.VENDOR_ALPHABET
  , tb_1.MAKER_ID  
  , tb_6.MAKER_NAME
  , tb_11.MATERIAL_PRODUCT_DETAIL_ID
  , tb_18.PRODUCT_CATEGORY_ID
  , tb_19.PRODUCT_CATEGORY_NAME                       
  , tb_13.PRODUCT_MAIN_ID
  , tb_18.PRODUCT_MAIN_NAME
  , tb_18.PRODUCT_MAIN_ALPHABET
  , tb_12.PRODUCT_SUB_ID 
  , tb_13.PRODUCT_SUB_NAME 
  , tb_11.PRODUCT_TYPE_ID
  , tb_12.PRODUCT_TYPE_NAME                      
  , tb_11.WORK_ORDER_ID
  , tb_14.WORK_ORDER_CODE 
  , tb_11.PART_NO_ID
  , tb_15.PART_NO_CODE 
  , tb_11.SPECIFICATION_ID
  , tb_16.SPECIFICATION_CODE  
  , tb_11.CUSTOMER_ORDER_FROM_ID
  , tb_17.CUSTOMER_ORDER_FROM_ALPHABET 
  , tb_21.BOM_ID
  , tb_22.BOM_CODE
  , tb_1.UPDATE_BY
  , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
  , tb_1.INUSE

  dataItem.sqlSelect

FROM 
  MATERIAL tb_1
      INNER JOIN 
  MATERIAL_CATEGORY tb_2
      ON tb_1.MATERIAL_CATEGORY_ID = tb_2.MATERIAL_CATEGORY_ID
      INNER JOIN 
  MATERIAL_PURPOSE tb_3
      ON tb_1.MATERIAL_PURPOSE_ID  = tb_3.MATERIAL_PURPOSE_ID
      INNER JOIN 
  MATERIAL_TYPE tb_4
      ON tb_1.MATERIAL_TYPE_ID  = tb_4.MATERIAL_TYPE_ID 
      INNER JOIN 
  VENDOR tb_5
      ON tb_1.VENDOR_ID  = tb_5.VENDOR_ID
      INNER JOIN 
  MAKER tb_6
      ON tb_1.MAKER_ID  = tb_6.MAKER_ID
      LEFT JOIN 
  MATERIAL_PROPERTY_COLOR tb_7
      ON tb_1.MATERIAL_PROPERTY_COLOR_ID  = tb_7.MATERIAL_PROPERTY_COLOR_ID  
      LEFT JOIN 
  MATERIAL_PROPERTY_SHAPE tb_8
      ON tb_1.MATERIAL_PROPERTY_SHAPE_ID  = tb_8.MATERIAL_PROPERTY_SHAPE_ID  
      LEFT JOIN 
  MATERIAL_PROPERTY_MADE_BY tb_9
      ON tb_1.MATERIAL_PROPERTY_MADE_BY_ID  = tb_9.MATERIAL_PROPERTY_MADE_BY_ID
      LEFT JOIN 
  MATERIAL_PRODUCT_DETAIL tb_11
      ON tb_1.MATERIAL_ID = tb_11.MATERIAL_ID
      LEFT JOIN
  PRODUCT_TYPE tb_12
      ON tb_11.PRODUCT_TYPE_ID = tb_12.PRODUCT_TYPE_ID
      LEFT JOIN
     PRODUCT_SUB tb_13
         ON tb_12.PRODUCT_SUB_ID = tb_13.PRODUCT_SUB_ID
         LEFT JOIN
     WORK_ORDER tb_14
         ON tb_11.WORK_ORDER_ID  = tb_14.WORK_ORDER_ID 
         LEFT JOIN
     PART_NO  tb_15
         ON tb_11.PART_NO_ID  = tb_15.PART_NO_ID  
      LEFT JOIN
     SPECIFICATION tb_16
         ON tb_11.SPECIFICATION_ID  = tb_16.SPECIFICATION_ID   	
      LEFT JOIN
     CUSTOMER_ORDER_FROM  tb_17
         ON tb_11.CUSTOMER_ORDER_FROM_ID  = tb_17.CUSTOMER_ORDER_FROM_ID
      LEFT JOIN
  PRODUCT_MAIN tb_18
      ON tb_13.PRODUCT_MAIN_ID = tb_18.PRODUCT_MAIN_ID
      LEFT JOIN
  PRODUCT_CATEGORY tb_19
      ON tb_18.PRODUCT_CATEGORY_ID = tb_19.PRODUCT_CATEGORY_ID
      INNER JOIN 
  UNIT_OF_MEASUREMENT tb_20
      ON tb_1.USAGE_UNIT_ID = tb_20.UNIT_OF_MEASUREMENT_ID
      LEFT JOIN
  MATERIAL_BOM tb_21
      ON tb_1.MATERIAL_ID = tb_21.MATERIAL_ID
      LEFT JOIN
  BOM tb_22
      ON tb_21.BOM_ID = tb_22.BOM_ID
WHERE 
      tb_1.MATERIAL_INTERNAL_CODE LIKE '%dataItem.MATERIAL_INTERNAL_CODE%'
  AND tb_1.MATERIAL_INTERNAL_FULL_NAME LIKE '%dataItem.MATERIAL_INTERNAL_FULL_NAME%'

  AND tb_1.MATERIAL_EXTERNAL_CODE LIKE '%dataItem.MATERIAL_EXTERNAL_CODE%'
  AND tb_1.MATERIAL_EXTERNAL_FULL_NAME LIKE '%dataItem.MATERIAL_EXTERNAL_FULL_NAME%'
  AND tb_1.MATERIAL_EXTERNAL_SHORT_NAME LIKE '%dataItem.MATERIAL_EXTERNAL_SHORT_NAME%'

  AND tb_1.ITEM_CODE_FOR_SUPPORT_MES LIKE '%dataItem.ITEM_CODE_FOR_SUPPORT_MES%'

  AND tb_1.INUSE LIKE '%dataItem.INUSE%'

  dataItem.sqlWhere

ORDER BY 
  dataItem.Order
LIMIT 
    dataItem.Start 
  , dataItem.Limit
            `;

    sql = sql.replace("dataItem.sqlWhere", sqlWhere);
    sql = sql.replace("dataItem.sqlSelect", sqlSelect);

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN",
      dataItem["PRODUCT_MAIN_ID_FOR_MATERIAL_PRODUCT_MAIN"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PURPOSE_ID",
      dataItem["MATERIAL_PURPOSE_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_ID",
      dataItem["MATERIAL_TYPE_ID"]
    );
    sql = sql.replace("dataItem.VENDOR_ID", dataItem["VENDOR_ID"]);
    sql = sql.replace("dataItem.MAKER_ID", dataItem["MAKER_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);

    sql = sql.replace("dataItem.WORK_ORDER_ID", dataItem["WORK_ORDER_ID"]);
    sql = sql.replace("dataItem.PART_NO_ID", dataItem["PART_NO_ID"]);
    sql = sql.replace(
      "dataItem.SPECIFICATION_ID",
      dataItem["SPECIFICATION_ID"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ID",
      dataItem["CUSTOMER_ORDER_FROM_ID"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
    );
    sql = sql.replace("dataItem.WIDTH", dataItem["WIDTH"]);
    sql = sql.replace("dataItem.HEIGHT", dataItem["HEIGHT"]);
    sql = sql.replace("dataItem.DEPTH", dataItem["DEPTH"]);

    sql = sql.replace("dataItem.USAGE_UNIT_ID", dataItem["USAGE_UNIT_ID"]);

    sql = sql.replace(
      "dataItem.ITEM_CODE_FOR_SUPPORT_MES",
      dataItem["ITEM_CODE_FOR_SUPPORT_MES"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_CODE",
      dataItem["MATERIAL_INTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_FULL_NAME",
      dataItem["MATERIAL_INTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_SHORT_NAME",
      dataItem["MATERIAL_INTERNAL_SHORT_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_CODE",
      dataItem["MATERIAL_EXTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["MATERIAL_EXTERNAL_SHORT_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sql = sql.replace("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);

    if (dataItem.hasOwnProperty("BOM_ID")) {
      sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    }
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createMaterial = async (dataItem) => {
    let sql = `  
    INSERT INTO MATERIAL
    (
              MATERIAL_ID
            , MATERIAL_CATEGORY_ID
            , MATERIAL_PURPOSE_ID
            , MATERIAL_TYPE_ID
            , VENDOR_ID
            , MAKER_ID
            , WIDTH
            , HEIGHT
            , DEPTH
            , MATERIAL_PROPERTY_COLOR_ID
            , MATERIAL_PROPERTY_SHAPE_ID
            , MATERIAL_PROPERTY_MADE_BY_ID
            , USAGE_UNIT_ID
            , IMAGE_PATH
            , MATERIAL_INTERNAL_CODE
            , MATERIAL_INTERNAL_FULL_NAME
            , MATERIAL_INTERNAL_SHORT_NAME
            , MATERIAL_EXTERNAL_CODE
            , MATERIAL_EXTERNAL_FULL_NAME
            , MATERIAL_EXTERNAL_SHORT_NAME
            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME
            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME
            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME
            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME
            , IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE
            , ITEM_CODE_FOR_SUPPORT_MES
            , CREATE_BY
            , UPDATE_DATE
            , UPDATE_BY
    )
    VALUES
    (
               @materialId
            , 'dataItem.MATERIAL_CATEGORY_ID'   
            , 'dataItem.MATERIAL_PURPOSE_ID'
            , 'dataItem.MATERIAL_TYPE_ID'
            , 'dataItem.VENDOR_ID'
            , 'dataItem.MAKER_ID'
            , dataItem.WIDTH
            , dataItem.HEIGHT
            , dataItem.DEPTH
            , dataItem.MATERIAL_PROPERTY_COLOR_ID
            , dataItem.MATERIAL_PROPERTY_SHAPE_ID
            , dataItem.MATERIAL_PROPERTY_MADE_BY_ID
            , 'dataItem.USAGE_UNIT_ID'
            , dataItem.IMAGE_PATH
            , 'dataItem.MATERIAL_INTERNAL_CODE'
            , 'dataItem.MATERIAL_INTERNAL_FULL_NAME'
            , dataItem.MATERIAL_INTERNAL_SHORT_NAME
            , 'dataItem.MATERIAL_EXTERNAL_CODE'
            , 'dataItem.MATERIAL_EXTERNAL_FULL_NAME'
            , 'dataItem.MATERIAL_EXTERNAL_SHORT_NAME'
            , 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME'
            , 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME'
            , 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME'
            , 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME'
            , 'dataItem.IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE'
            , 'dataItem.ITEM_CODE_FOR_SUPPORT_MES'
            , 'dataItem.CREATE_BY'
            ,  CURRENT_TIMESTAMP()
            , 'dataItem.CREATE_BY'
    )
                   
                              `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PURPOSE_ID",
      dataItem["MATERIAL_PURPOSE_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_ID",
      dataItem["MATERIAL_TYPE_ID"]
    );
    sql = sql.replace("dataItem.VENDOR_ID", dataItem["VENDOR_ID"]);
    sql = sql.replace("dataItem.MAKER_ID", dataItem["MAKER_ID"]);

    sql = sql.replace(
      "dataItem.WIDTH",
      dataItem["WIDTH"] != "" ? dataItem["WIDTH"] : "NULL"
    );
    sql = sql.replace(
      "dataItem.HEIGHT",
      dataItem["HEIGHT"] != "" ? dataItem["HEIGHT"] : "NULL"
    );
    sql = sql.replace(
      "dataItem.DEPTH",
      dataItem["DEPTH"] != "" ? dataItem["DEPTH"] : "NULL"
    );

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_COLOR_ID"]
        : "NULL"
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
        : "NULL"
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
        : "NULL"
    );

    sql = sql.replace("dataItem.USAGE_UNIT_ID", dataItem["USAGE_UNIT_ID"]);

    sql = sql.replace(
      "dataItem.IMAGE_PATH",
      "'" + dataItem["IMAGE_PATH"] + "'" != "" ? dataItem["IMAGE_PATH"] : "NULL"
    );

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_CODE",
      dataItem["MATERIAL_INTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_FULL_NAME",
      dataItem["MATERIAL_INTERNAL_FULL_NAME"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_SHORT_NAME",
      "'" + dataItem["MATERIAL_INTERNAL_SHORT_NAME"] + "'" != ""
        ? dataItem["MATERIAL_INTERNAL_SHORT_NAME"]
        : "NULL"
    );

    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_CODE",
      dataItem["MATERIAL_EXTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["MATERIAL_EXTERNAL_SHORT_NAME"]
    );

    sql = sql.replace(
      "dataItem.ITEM_CODE_FOR_SUPPORT_MES",
      dataItem["ITEM_CODE_FOR_SUPPORT_MES"]
    );

    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE",
      dataItem["IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateMaterial = async (dataItem) => {
    let sql = `    UPDATE 
                            MATERIAL 
                        SET
                            WIDTH = dataItem.WIDTH
                            , HEIGHT = dataItem.HEIGHT
                            , DEPTH = dataItem.DEPTH
                            , MATERIAL_PROPERTY_COLOR_ID = dataItem.MATERIAL_PROPERTY_COLOR_ID
                            , MATERIAL_PROPERTY_SHAPE_ID = dataItem.MATERIAL_PROPERTY_SHAPE_ID
                            , MATERIAL_PROPERTY_MADE_BY_ID = dataItem.MATERIAL_PROPERTY_MADE_BY_ID
                            , USAGE_UNIT_ID = 'dataItem.USAGE_UNIT_ID'
                            , MATERIAL_INTERNAL_FULL_NAME = 'dataItem.MATERIAL_INTERNAL_FULL_NAME'
                            , MATERIAL_INTERNAL_SHORT_NAME = dataItem.MATERIAL_INTERNAL_SHORT_NAME
                            , MATERIAL_EXTERNAL_CODE = 'dataItem.MATERIAL_EXTERNAL_CODE'
                            , MATERIAL_EXTERNAL_FULL_NAME = 'dataItem.MATERIAL_EXTERNAL_FULL_NAME'
                            , MATERIAL_EXTERNAL_SHORT_NAME = 'dataItem.MATERIAL_EXTERNAL_SHORT_NAME'

                            , IMAGE_PATH = dataItem.IMAGE_PATH

                            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME'
                            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME'
                            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME'
                            , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME'
                            , IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE = 'dataItem.IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE'

                            , ITEM_CODE_FOR_SUPPORT_MES = 'dataItem.ITEM_CODE_FOR_SUPPORT_MES'

                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            MATERIAL_ID = 'dataItem.MATERIAL_ID'
                      `;

    sql = sql.replace("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);

    sql = sql.replace(
      "dataItem.WIDTH",
      dataItem["WIDTH"] != "" ? dataItem["WIDTH"] : "NULL"
    );
    sql = sql.replace(
      "dataItem.HEIGHT",
      dataItem["HEIGHT"] != "" ? dataItem["HEIGHT"] : "NULL"
    );
    sql = sql.replace(
      "dataItem.DEPTH",
      dataItem["DEPTH"] != "" ? dataItem["DEPTH"] : "NULL"
    );

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_COLOR_ID"]
        : "NULL"
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
        : "NULL"
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
        : "NULL"
    );

    sql = sql.replace("dataItem.USAGE_UNIT_ID", dataItem["USAGE_UNIT_ID"]);

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_FULL_NAME",
      dataItem["MATERIAL_INTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_SHORT_NAME",
      "'" + dataItem["MATERIAL_INTERNAL_SHORT_NAME"] + "'" != ""
        ? dataItem["MATERIAL_INTERNAL_SHORT_NAME"]
        : "NULL"
    );
    sql = sql.replace(
      "dataItem.IMAGE_PATH",
      "'" + dataItem["IMAGE_PATH"] + "'" != "" ? dataItem["IMAGE_PATH"] : "NULL"
    );

    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_CODE",
      dataItem["MATERIAL_EXTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["MATERIAL_EXTERNAL_SHORT_NAME"]
    );

    sql = sql.replace(
      "dataItem.ITEM_CODE_FOR_SUPPORT_MES",
      dataItem["ITEM_CODE_FOR_SUPPORT_MES"]
    );

    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE",
      dataItem["IS_SAME_ITEM_INTERNAL_CODE_FOR_ITEM_EXTERNAL_CODE"]
    );

    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteMaterial = async (dataItem) => {
    let sql = `    UPDATE
                            MATERIAL
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            MATERIAL_ID = 'dataItem.MATERIAL_ID'
                      `;

    sql = sql.replace("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static InsertByProcedure = async () => {
    let sql = `CALL generate_jcode(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) `;
    return sql;
  };

  static CreateMaterialId = async (dataItem) => {
    let sql = ` SET @materialId=(SELECT DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')); `;
    return sql;
  };

  static UpdateIncludeMaterialInternalCode = async (dataItem) => {
    let sql = `     UPDATE 
    MATERIAL 
SET
      WIDTH = dataItem.WIDTH
    , HEIGHT = dataItem.HEIGHT
    , DEPTH = dataItem.DEPTH
    , MATERIAL_PROPERTY_COLOR_ID = dataItem.MATERIAL_PROPERTY_COLOR_ID
    , MATERIAL_PROPERTY_SHAPE_ID = dataItem.MATERIAL_PROPERTY_SHAPE_ID
    , MATERIAL_PROPERTY_MADE_BY_ID = dataItem.MATERIAL_PROPERTY_MADE_BY_ID
    , USAGE_UNIT_ID = 'dataItem.USAGE_UNIT_ID'

    , MATERIAL_INTERNAL_CODE = 'dataItem.MATERIAL_INTERNAL_CODE'
    , MATERIAL_INTERNAL_FULL_NAME = 'dataItem.MATERIAL_INTERNAL_FULL_NAME'
    , MATERIAL_INTERNAL_SHORT_NAME = dataItem.MATERIAL_INTERNAL_SHORT_NAME
    , MATERIAL_EXTERNAL_CODE = 'dataItem.MATERIAL_EXTERNAL_CODE'
    , MATERIAL_EXTERNAL_FULL_NAME = 'dataItem.MATERIAL_EXTERNAL_FULL_NAME'
    , MATERIAL_EXTERNAL_SHORT_NAME = 'dataItem.MATERIAL_EXTERNAL_SHORT_NAME'

    , IMAGE_PATH = dataItem.IMAGE_PATH

    , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME'
    , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME'
    , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME'
    , IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME = 'dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME'

    , ITEM_CODE_FOR_SUPPORT_MES = 'dataItem.ITEM_CODE_FOR_SUPPORT_MES'

    , INUSE = 'dataItem.INUSE'
    , UPDATE_BY = 'dataItem.UPDATE_BY'
    , UPDATE_DATE = CURRENT_TIMESTAMP()
        WHERE 
    MATERIAL_ID = 'dataItem.MATERIAL_ID'
                      `;

    sql = sql.replace(
      "dataItem.WIDTH",
      dataItem["WIDTH"] != "" ? dataItem["WIDTH"] : "NULL"
    );
    sql = sql.replace(
      "dataItem.HEIGHT",
      dataItem["HEIGHT"] != "" ? dataItem["HEIGHT"] : "NULL"
    );
    sql = sql.replace(
      "dataItem.DEPTH",
      dataItem["DEPTH"] != "" ? dataItem["DEPTH"] : "NULL"
    );

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_COLOR_ID"]
        : "NULL"
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
        : "NULL"
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"] != ""
        ? dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
        : "NULL"
    );

    sql = sql.replace("dataItem.USAGE_UNIT_ID", dataItem["USAGE_UNIT_ID"]);

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_CODE",
      dataItem["MATERIAL_INTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_FULL_NAME",
      dataItem["MATERIAL_INTERNAL_FULL_NAME"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_SHORT_NAME",
      "'" + dataItem["MATERIAL_INTERNAL_SHORT_NAME"] + "'" != ""
        ? dataItem["MATERIAL_INTERNAL_SHORT_NAME"]
        : "NULL"
    );

    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_CODE",
      dataItem["MATERIAL_EXTERNAL_CODE"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["MATERIAL_EXTERNAL_SHORT_NAME"]
    );

    sql = sql.replace(
      "dataItem.IMAGE_PATH",
      "'" + dataItem["IMAGE_PATH"] + "'" != "" ? dataItem["IMAGE_PATH"] : "NULL"
    );

    sql = sql.replace(
      "dataItem.ITEM_CODE_FOR_SUPPORT_MES",
      dataItem["ITEM_CODE_FOR_SUPPORT_MES"]
    );

    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_EXTERNAL_SHORT_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_FULL_NAME"]
    );
    sql = sql.replace(
      "dataItem.IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME",
      dataItem["IS_SAME_MATERIAL_TYPE_NAME_FOR_MATERIAL_INTERNAL_SHORT_NAME"]
    );

    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMaterialName = async (dataItem) => {
    let sql = `         SELECT
                                MATERIAL_ID
                            , MATERIAL_INTERNAL_CODE 
                            FROM
                            MATERIAL                    
                            WHERE 
                                MATERIAL_INTERNAL_CODE LIKE '%dataItem.MATERIAL_INTERNAL_CODE%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            MATERIAL_INTERNAL_CODE
                            LIMIT 
                            50
                                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_INTERNAL_CODE",
      dataItem["MATERIAL_INTERNAL_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };

  static GetCountByMaterialCategoryId = async (dataItem) => {
    let sql = `          SELECT 
                                COUNT(1) COUNT
                            FROM 
                                MATERIAL 
                            WHERE 
                                MATERIAL_CATEGORY_ID = 'dataItem.MATERIAL_CATEGORY_ID'
                                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    return sql;
  };

  static GetCountByMaterialPurposeId = async (dataItem) => {
    let sql = `         SELECT 
                            COUNT(1) COUNT
                        FROM 
                            MATERIAL 
                        WHERE 
                            MATERIAL_PURPOSE_ID = 'dataItem.MATERIAL_PURPOSE_ID'
                                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_PURPOSE_ID",
      dataItem["MATERIAL_PURPOSE_ID"]
    );
    return sql;
  };

  static GetCountByMaterialTypeId = async (dataItem) => {
    let sql = `         SELECT 
                            COUNT(1) COUNT
                        FROM 
                            MATERIAL 
                        WHERE 
                            MATERIAL_TYPE_ID = 'dataItem.MATERIAL_TYPE_ID'
                                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_ID",
      dataItem["MATERIAL_TYPE_ID"]
    );
    return sql;
  };

  static GetCountByVendorId = async (dataItem) => {
    let sql = `        SELECT 
                            COUNT(1) COUNT
                        FROM 
                            MATERIAL 
                        WHERE 
                            VENDOR_ID = 'dataItem.VENDOR_ID'
                                                `;

    sql = sql.replace("dataItem.VENDOR_ID", dataItem["VENDOR_ID"]);
    return sql;
  };

  static GetCountByMakerId = async (dataItem) => {
    let sql = `        SELECT 
                                COUNT(1) COUNT
                            FROM 
                                MATERIAL 
                            WHERE 
                                MAKER_ID = 'dataItem.MAKER_ID'
                                                `;

    sql = sql.replace("dataItem.MAKER_ID", dataItem["MAKER_ID"]);

    return sql;
  };

  static GetImageByItemCodeForSupportMesAndOldSystem = async (dataItem) => {
    let sql = `       SELECT 
                            IMAGE_PATH
                        FROM 
                            MATERIAL 
                        WHERE 
                            ITEM_CODE_FOR_SUPPORT_MES = 'dataItem.ITEM_CODE_FOR_SUPPORT_MES'
                                                `;

    sql = sql.replace(
      "dataItem.ITEM_CODE_FOR_SUPPORT_MES",
      dataItem["ITEM_CODE_FOR_SUPPORT_MES"]
    );
    return sql;
  };
}

module.exports = MaterialSQL;

// ** SQLFactory

// *** Declare Function SQL

class MaterialProductDetailSQL {
  // *** Function Get
  static getMaterialProductDetail = async (dataItem) => {
    let sql = `       SELECT
                            MATERIAL_ID
                            , PRODUCT_TYPE_ID
                            , WORK_ORDER_ID
                            , PART_NO_ID
                            , SPECIFICATION_ID
                            , CUSTOMER_ORDER_FROM_ID
                            , INUSE
                            FROM 
                            MATERIAL_PRODUCT_DETAIL                    
                            WHERE 
                            MATERIAL_PRODUCT_DETAIL_ID = 'dataItem.MATERIAL_PRODUCT_DETAIL_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRODUCT_DETAIL_ID",
      dataItem["MATERIAL_PRODUCT_DETAIL_ID"]
    );

    return sql;
  };

  // *** Function Insert
  static createMaterialProductDetail = async (dataItem) => {
    let sql = `  
                    INSERT INTO MATERIAL_PRODUCT_DETAIL
                    (
                        MATERIAL_PRODUCT_DETAIL_ID
                        , MATERIAL_ID
                        , PRODUCT_TYPE_ID
                        , WORK_ORDER_ID
                        , PART_NO_ID
                        , SPECIFICATION_ID
                        , CUSTOMER_ORDER_FROM_ID
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )                   
                    VALUES
                    (
                        DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                        ,  @materialId
                        , 'dataItem.PRODUCT_TYPE_ID'
                        , dataItem.WORK_ORDER_ID
                        , dataItem.PART_NO_ID
                        , dataItem.SPECIFICATION_ID
                        , 'dataItem.CUSTOMER_ORDER_FROM_ID'                                              
                        , 'dataItem.CREATE_BY'
                        , CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )      ;
                                      
                                `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_ID",
      dataItem["WORK_ORDER_ID"] != ""
        ? "'" + dataItem["WORK_ORDER_ID"] + "'"
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.PART_NO_ID",
      dataItem["PART_NO_ID"] != "" ? "'" + dataItem["PART_NO_ID"] + "'" : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.SPECIFICATION_ID",
      dataItem["SPECIFICATION_ID"] != ""
        ? "'" + dataItem["SPECIFICATION_ID"] + "'"
        : "NULL"
    );

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_ORDER_FROM_ID",
      dataItem["CUSTOMER_ORDER_FROM_ID"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateMaterialProductDetail = async (dataItem) => {
    let sql = `     UPDATE
                            MATERIAL_PRODUCT_DETAIL
                        SET
                            PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'
                        , WORK_ORDER_ID = dataItem.WORK_ORDER_ID
                        , PART_NO_ID = dataItem.PART_NO_ID
                        , SPECIFICATION_ID = dataItem.SPECIFICATION_ID
                        , CUSTOMER_ORDER_FROM_ID = 'dataItem.CUSTOMER_ORDER_FROM_ID'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                        MATERIAL_PRODUCT_DETAIL_ID = 'dataItem.MATERIAL_PRODUCT_DETAIL_ID' ;
                                                `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_ID",
      dataItem["WORK_ORDER_ID"] != ""
        ? "'" + dataItem["WORK_ORDER_ID"] + "'"
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.PART_NO_ID",
      dataItem["PART_NO_ID"] != "" ? "'" + dataItem["PART_NO_ID"] + "'" : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.SPECIFICATION_ID",
      dataItem["SPECIFICATION_ID"] != ""
        ? "'" + dataItem["SPECIFICATION_ID"] + "'"
        : "NULL"
    );

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_ORDER_FROM_ID",
      dataItem["CUSTOMER_ORDER_FROM_ID"]
    );

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRODUCT_DETAIL_ID",
      dataItem["MATERIAL_PRODUCT_DETAIL_ID"]
    );
    return sql;
  };

  // *** Function Delete
  static deleteMaterialProductDetail = async (dataItem) => {
    let sql = `    "
                    UPDATE 
                        MATERIAL_PRODUCT_DETAIL
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MATERIAL_PRODUCT_DETAIL_ID = 'dataItem.MATERIAL_PRODUCT_DETAIL_ID' ;
                        `;

    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRODUCT_DETAIL_ID",
      dataItem["MATERIAL_PRODUCT_DETAIL_ID"]
    );

    return sql;
  };

  static GetByLikeBomFlowProcessMaterialUsageName = async (dataItem) => {
    let sql = `            SELECT
                                        MATERIAL_PRODUCT_DETAIL_ID
                                    , MATERIAL_PRODUCT_DETAIL_NAME 
                                    FROM
                                    MATERIAL_PRODUCT_DETAIL                    
                                    WHERE 
                                    MATERIAL_PRODUCT_DETAIL_NAME LIKE '%dataItem.MATERIAL_PRODUCT_DETAIL_NAME%'
                                    ORDER BY 
                                    MATERIAL_PRODUCT_DETAIL_NAME ASC
                                    LIMIT 
                                    50 ;
                                                  `;

    sql = sql.replace(
      "dataItem.MATERIAL_PRODUCT_DETAIL_NAME",
      dataItem["MATERIAL_PRODUCT_DETAIL_NAME"]
    );
    return sql;
  };

  static GetByFlowId = async (dataItem) => {
    let sql = `        SELECT
                                    tb_1.MATERIAL_PRODUCT_DETAIL_ID
                                , tb_1.PROCESS_ID
                                , tb_2.PROCESS_NAME
                                , tb_1.NO
                                FROM
                                MATERIAL_PRODUCT_DETAIL tb_1
                                    INNER JOIN
                                PROCESS tb_2
                                    ON tb_1.PROCESS_ID = tb_2.PROCESS_ID
                                WHERE 
                                    tb_1.FLOW_ID = 'dataItem.FLOW_ID'
                                AND tb_1.INUSE = 1
                                ORDER BY
                                tb_1.NO ;
                                                  `;

    sql = sql.replaceAll("dataItem.FLOW_ID", dataItem["FLOW_ID"]);

    return sql;
  };

  static DeleteByBomId = async (dataItem) => {
    let sql = `            UPDATE
                                    MATERIAL_PRODUCT_DETAIL 
                                SET
                                    INUSE = '0'
                                , UPDATE_BY = 'dataItem.UPDATE_BY'
                                , UPDATE_DATE = CURRENT_TIMESTAMP()
                                WHERE 
                                        BOM_ID = 'dataItem.BOM_ID'
                                    AND INUSE = '1' ;
                                                  `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    return sql;
  };

  static InsertByExistBomId = async (dataItem) => {
    let sql = `           INSERT INTO MATERIAL_PRODUCT_DETAIL
                            (
                                MATERIAL_PRODUCT_DETAIL_ID
                                , BOM_ID
                                , NO
                                , FLOW_PROCESS_ID
                                , MATERIAL_ID
                                , USAGE_QUANTITY
                                , USAGE_UNIT_ID
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )                   
                            VALUES
                            (                   
                                    DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                                , 'dataItem.BOM_ID'
                                , 'dataItem.NO'
                                , 'dataItem.FLOW_PROCESS_ID'                         
                                , 'dataItem.MATERIAL_ID'                         
                                , 'dataItem.USAGE_QUANTITY'                         
                                , 'dataItem.USAGE_UNIT_ID'                         
                                , 'dataItem.UPDATE_BY'
                                , CURRENT_TIMESTAMP()
                                , 'dataItem.UPDATE_BY'
                            ) ;
                                                  `;

    sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replaceAll("dataItem.NO", dataItem["NO"]);
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_ID",
      dataItem["FLOW_PROCESS_ID"]
    );
    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replaceAll("dataItem.USAGE_QUANTITY", dataItem["USAGE_QUANTITY"]);
    sql = sql.replaceAll("dataItem.USAGE_UNIT_ID", dataItem["USAGE_UNIT_ID"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };
}

module.exports = MaterialProductDetailSQL;

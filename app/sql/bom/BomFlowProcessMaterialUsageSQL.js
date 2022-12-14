// ** SQLFactory

// *** Declare Function SQL

class BomFlowProcessMaterialUsageSQL {
  // *** Function Get
  static getBomFlowProcessMaterialUsage = async (dataItem) => {
    let sql = `      SELECT
                                BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                            , BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME
                            , BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE
                            , INUSE
                            FROM 
                            BOM_FLOW_PROCESS_MATERIAL_USAGE                    
                            WHERE 
                            BOM_FLOW_PROCESS_MATERIAL_USAGE_ID = 'dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID'
                    `;

    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchBomFlowProcessMaterialUsage = async (dataItem) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM
                        BOM_FLOW_PROCESS_MATERIAL_USAGE
                    WHERE 
                        BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME LIKE '%dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME%'
                    AND BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE LIKE '%dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE%'
                    AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME"]
    );
    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                , BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE
                , BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
                FROM 
                BOM_FLOW_PROCESS_MATERIAL_USAGE
                WHERE 
                    BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME LIKE '%dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME%'
                AND BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE LIKE '%dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME"]
    );
    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createBomFlowProcessMaterialUsage = async (dataItem) => {
    let sql = `  
                        INSERT INTO BOM_FLOW_PROCESS_MATERIAL_USAGE
                        (
                            BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                            , BOM_ID
                            , FLOW_PROCESS_ID
                            , NO
                            , MATERIAL_ID
                            , USAGE_QUANTITY
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )                   
                        VALUES
                        (
                            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                            ,  @bomId
                            , 'dataItem.FLOW_PROCESS_ID'
                            , 'dataItem.NO'
                            , 'dataItem.MATERIAL_ID'
                            , 'dataItem.USAGE_QUANTITY'                                            
                            , 'dataItem.CREATE_BY'
                            , CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )
                   
                              `;

    sql = sql.replace("dataItem.FLOW_PROCESS_ID", dataItem["FLOW_PROCESS_ID"]);
    sql = sql.replace("dataItem.NO", dataItem["NO"]);
    sql = sql.replace("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replace("dataItem.USAGE_QUANTITY", dataItem["USAGE_QUANTITY"]);

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateBomFlowProcessMaterialUsage = async (dataItem) => {
    let sql = `     UPDATE
                            BOM_FLOW_PROCESS_MATERIAL_USAGE
                        SET
                            BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME = 'dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                        BOM_FLOW_PROCESS_MATERIAL_USAGE_ID = 'dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID'
                      `;

    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_ID"]
    );
    return sql;
  };

  // *** Function Delete
  static deleteBomFlowProcessMaterialUsage = async (dataItem) => {
    let sql = `    UPDATE 
                        BOM_FLOW_PROCESS_MATERIAL_USAGE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        BOM_FLOW_PROCESS_MATERIAL_USAGE_ID = 'dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID'
                      `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_ID"]
    );
    return sql;
  };

  static GetByLikeBomFlowProcessMaterialUsageName = async (dataItem) => {
    let sql = `           SELECT
                                    BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                                , BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME 
                                FROM
                                BOM_FLOW_PROCESS_MATERIAL_USAGE                    
                                WHERE 
                                BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME LIKE '%dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME%'
                                ORDER BY 
                                BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME ASC
                                LIMIT 
                                50
                                                `;

    sql = sql.replace(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_NAME"]
    );
    return sql;
  };

  static GetByFlowId = async (dataItem) => {
    let sql = `          SELECT
                        tb_1.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                    , tb_1.PROCESS_ID
                    , tb_2.PROCESS_NAME
                    , tb_1.NO
                    FROM
                    BOM_FLOW_PROCESS_MATERIAL_USAGE tb_1
                        INNER JOIN
                    PROCESS tb_2
                        ON tb_1.PROCESS_ID = tb_2.PROCESS_ID
                    WHERE 
                        tb_1.FLOW_ID = 'dataItem.FLOW_ID'
                    AND tb_1.INUSE = 1
                    ORDER BY
                    tb_1.NO
                                                `;

    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);
    return sql;
  };

  static DeleteByBomId = async (dataItem) => {
    let sql = `           UPDATE
                                BOM_FLOW_PROCESS_MATERIAL_USAGE 
                            SET
                                INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                            WHERE 
                                    BOM_ID = 'dataItem.BOM_ID'
                                AND INUSE = '1'
                                                `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    return sql;
  };

  static InsertByExistBomId = async (dataItem) => {
    let sql = `           INSERT INTO BOM_FLOW_PROCESS_MATERIAL_USAGE
                            (
                                BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                                , BOM_ID
                                , NO
                                , FLOW_PROCESS_ID
                                , MATERIAL_ID
                                , USAGE_QUANTITY
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
                                , 'dataItem.UPDATE_BY'
                                , CURRENT_TIMESTAMP()
                                , 'dataItem.UPDATE_BY'
                            )
                                                `;

    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replace("dataItem.NO", dataItem["NO"]);
    sql = sql.replace("dataItem.FLOW_PROCESS_ID", dataItem["FLOW_PROCESS_ID"]);
    sql = sql.replace("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replace("dataItem.USAGE_QUANTITY", dataItem["USAGE_QUANTITY"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  static GetByBomIdAndFlowProcessIdAndLikeInuse = async (dataItem) => {
    let sql = `            SELECT
                    tb_1.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                , tb_1.NO
                , tb_2.MATERIAL_INTERNAL_CODE
                , tb_2.MATERIAL_INTERNAL_FULL_NAME
                , tb_2.IMAGE_PATH 
                , tb_1.USAGE_QUANTITY 
                , tb_3.UNIT_OF_MEASUREMENT_NAME 
                , tb_3.SYMBOL
                , tb_4.MATERIAL_CATEGORY_NAME
                , tb_5.MATERIAL_TYPE_NAME
                FROM
                BOM_FLOW_PROCESS_MATERIAL_USAGE tb_1
                    INNER JOIN
                MATERIAL tb_2
                    ON tb_1.MATERIAL_ID = tb_2.MATERIAL_ID
                        INNER JOIN 
                UNIT_OF_MEASUREMENT tb_3
                    ON tb_2.USAGE_UNIT_ID  = tb_3.UNIT_OF_MEASUREMENT_ID
                    INNER JOIN 
                MATERIAL_CATEGORY tb_4
                    ON tb_2.MATERIAL_CATEGORY_ID = tb_4.MATERIAL_CATEGORY_ID
                    INNER JOIN 
                MATERIAL_TYPE tb_5
                    ON tb_2.MATERIAL_TYPE_ID = tb_5.MATERIAL_TYPE_ID
                WHERE                        
                    tb_1.BOM_ID ='dataItem.BOM_ID'
                AND tb_1.FLOW_PROCESS_ID  = 'dataItem.FLOW_PROCESS_ID'
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                ORDER BY
                tb_1.NO
                                                `;

    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replace("dataItem.FLOW_PROCESS_ID", dataItem["FLOW_PROCESS_ID"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };
}

module.exports = BomFlowProcessMaterialUsageSQL;

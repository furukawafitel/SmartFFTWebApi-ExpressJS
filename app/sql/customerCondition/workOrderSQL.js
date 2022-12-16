// ** SQLFactory

// *** Declare Function SQL

class WorkOrderSQL {
  // *** Function Get
  static getWorkOrder = async (dataItem) => {
    let sql = `      SELECT
                            WORK_ORDER_ID
                        , WORK_ORDER_CODE
                        , INUSE
                        FROM 
                        WORK_ORDER                    
                        WHERE 
                        WORK_ORDER_ID = 'dataItem.WORK_ORDER_ID'
                    `;

    sql = sql.replaceAll("dataItem.WORK_ORDER_ID", dataItem["WORK_ORDER_ID"]);

    return sql;
  };

  // *** Function Search
  static searchWorkOrder = async (dataItem, sqlWhere) => {
    let sqlList = [];

    let sql = `      SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        WORK_ORDER tb_1
                    WHERE 
                            tb_1.WORK_ORDER_CODE LIKE '%dataItem.WORK_ORDER_CODE%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                        dataItem.sqlWhere `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_CODE",
      dataItem["WORK_ORDER_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = ` SELECT 
                    tb_1.WORK_ORDER_ID
                , tb_1.WORK_ORDER_CODE
                , tb_1.PRODUCT_MAIN_ID 
                , tb_2.PRODUCT_MAIN_NAME  
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                WORK_ORDER tb_1
                    INNER JOIN
                PRODUCT_MAIN tb_2
                    ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                WHERE 
                    tb_1.WORK_ORDER_CODE LIKE '%dataItem.WORK_ORDER_CODE%'
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                dataItem.sqlWhere

                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_CODE",
      dataItem["WORK_ORDER_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.Order", dataItem["Order"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createWorkOrder = async (dataItem) => {
    let sql = `  
    INSERT INTO WORK_ORDER
    (
          WORK_ORDER_ID
        , WORK_ORDER_CODE
        , PRODUCT_MAIN_ID
        , CREATE_BY
        , UPDATE_DATE
        , UPDATE_BY
    )
    VALUES
    (
            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
         , 'dataItem.WORK_ORDER_CODE'
         , 'dataItem.PRODUCT_MAIN_ID'
         , 'dataItem.CREATE_BY'
         ,  CURRENT_TIMESTAMP()
         , 'dataItem.CREATE_BY'
    )                
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_CODE",
      dataItem["WORK_ORDER_CODE"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateWorkOrder = async (dataItem) => {
    let sql = `    UPDATE 
                        WORK_ORDER 
                    SET
                        WORK_ORDER_CODE = 'dataItem.WORK_ORDER_CODE'
                        , PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        WORK_ORDER_ID = 'dataItem.WORK_ORDER_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.WORK_ORDER_ID", dataItem["WORK_ORDER_ID"]);
    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_CODE",
      dataItem["WORK_ORDER_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteWorkOrder = async (dataItem) => {
    let sql = `    UPDATE
                            WORK_ORDER
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            WORK_ORDER_ID = 'dataItem.WORK_ORDER_ID'
                      `;

    sql = sql.replaceAll("dataItem.WORK_ORDER_ID", dataItem["WORK_ORDER_ID"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeWorkOrderCodeAndInuse = async (dataItem) => {
    let sql = `       SELECT
                                WORK_ORDER_ID
                            , WORK_ORDER_CODE 
                            FROM
                            WORK_ORDER                    
                            WHERE 
                                WORK_ORDER_CODE LIKE '%dataItem.WORK_ORDER_CODE%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            WORK_ORDER_CODE ASC
                            LIMIT 
                            50
                                                `;

    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_CODE",
      dataItem["WORK_ORDER_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeWorkOrderCodeAndProductMainIdAndInuse = async (dataItem) => {
    let sql = `       SELECT
                            WORK_ORDER_ID
                        , WORK_ORDER_CODE 
                        FROM
                        WORK_ORDER                    
                        WHERE 
                            WORK_ORDER_CODE LIKE '%dataItem.WORK_ORDER_CODE%'
                        AND PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        WORK_ORDER_CODE ASC
                        LIMIT 
                        50
                             `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.WORK_ORDER_CODE",
      dataItem["WORK_ORDER_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = WorkOrderSQL;

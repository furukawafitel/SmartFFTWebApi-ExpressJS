// ** SQLFactory

// *** Declare Function SQL

class ProcessSQL {
  // *** Function Get
  static getProcess = async (dataItem) => {
    let sql = `     SELECT
                        PROCESS_ID,
                    , PROCESS_NAME
                    , PROCESS_CODE
                    , INUSE
                    FROM 
                    PROCESS                    
                    WHERE 
                    PROCESS_ID = 'dataItem.PROCESS_ID'
                    `;

    sql = sql.replaceAll("dataItem.PROCESS_ID", dataItem["PROCESS_ID"]);

    return sql;
  };

  // *** Function Search
  static searchProcess = async (dataItem, sqlWhere) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        PROCESS tb_1
                    WHERE 
                        tb_1.PROCESS_NAME LIKE '%dataItem.PROCESS_NAME%'
                    AND tb_1.PROCESS_CODE LIKE '%dataItem.PROCESS_CODE%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                    dataItem.sqlWhere `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.PROCESS_NAME", dataItem["PROCESS_NAME"]);
    sql = sql.replaceAll("dataItem.PROCESS_CODE", dataItem["PROCESS_CODE"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                        SELECT 
                        tb_1.PROCESS_ID
                    , tb_1.PROCESS_CODE
                    , tb_1.PROCESS_NAME
                    , tb_1.PRODUCT_MAIN_ID 
                    , tb_2.PRODUCT_MAIN_NAME  
                    , tb_1.UPDATE_BY
                    , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , tb_1.INUSE
                    FROM 
                    PROCESS tb_1
                        INNER JOIN
                    PRODUCT_MAIN tb_2
                        ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                    WHERE 
                        tb_1.PROCESS_NAME LIKE '%dataItem.PROCESS_NAME%'
                    AND tb_1.PROCESS_CODE LIKE '%dataItem.PROCESS_CODE%'
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

    sql = sql.replaceAll("dataItem.PROCESS_NAME", dataItem["PROCESS_NAME"]);
    sql = sql.replaceAll("dataItem.PROCESS_CODE", dataItem["PROCESS_CODE"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sql = sql.replaceAll("dataItem.Order", dataItem["Order"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createProcess = async (dataItem) => {
    let sql = `  
                    INSERT INTO PROCESS
                    (                  
                        PROCESS_ID
                        , PROCESS_NAME
                        , PRODUCT_MAIN_ID
                        , PROCESS_CODE
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )                   
                        SELECT
                                DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                            , 'dataItem.PROCESS_NAME'
                            , 'dataItem.PRODUCT_MAIN_ID'
                            ,  CONCAT('PCS-dataItem.PRODUCT_MAIN_ALPHABET-', LPAD((COUNT(*) + 1), 4, 0))
                            , 'dataItem.CREATE_BY'
                            , CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        FROM 
                            PROCESS
                        WHERE
                            PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                                
                              `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.PROCESS_NAME", dataItem["PROCESS_NAME"]);
    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateProcess = async (dataItem) => {
    let sql = `    UPDATE 
                        PROCESS 
                    SET
                        PROCESS_NAME = 'dataItem.PROCESS_NAME'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        PROCESS_ID = 'dataItem.PROCESS_ID'
                      `;

    sql = sql.replaceAll("dataItem.PROCESS_NAME", dataItem["PROCESS_NAME"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll("dataItem.PROCESS_ID", dataItem["PROCESS_ID"]);
    return sql;
  };

  // *** Function Delete
  static deleteProcess = async (dataItem) => {
    let sql = `      UPDATE 
                            PROCESS 
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            PROCESS_ID = 'dataItem.PROCESS_ID'
                      `;

    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll("dataItem.PROCESS_ID", dataItem["PROCESS_ID"]);

    return sql;
  };

  static GetByLikeProcessName = async (dataItem) => {
    let sql = `           SELECT
                                PROCESS_ID
                            , PROCESS_NAME 
                            FROM
                            PROCESS                    
                            WHERE 
                                PROCESS_NAME LIKE '%dataItem.PROCESS_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            PROCESS_NAME ASC
                            LIMIT 
                                dataItem.Start
                            , dataItem.Limit
                                                `;

    sql = sql.replaceAll("dataItem.PROCESS_NAME", dataItem["PROCESS_NAME"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);

    return sql;
  };

  static GetByLikeProcessNameAndProductMainIdAndInuse = async (dataItem) => {
    let sql = `           SELECT
                                PROCESS_ID
                            , PROCESS_NAME 
                            FROM
                            PROCESS                    
                            WHERE 
                                PROCESS_NAME LIKE '%dataItem.PROCESS_NAME%'
                            AND PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            PROCESS_NAME ASC
                            LIMIT 
                                dataItem.Start
                            , dataItem.Limit
                                                `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.PROCESS_NAME", dataItem["PROCESS_NAME"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);

    return sql;
  };
}

module.exports = ProcessSQL;

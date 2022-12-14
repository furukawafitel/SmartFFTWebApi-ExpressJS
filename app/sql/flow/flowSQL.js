// ** SQLFactory

// *** Declare Function SQL

class FlowSQL {
  // *** Function Get
  static getFlow = async (dataItem) => {
    let sql = `      SELECT
                          FLOW_ID
                        , FLOW_NAME
                        , FLOW_CODE
                        , INUSE
                      FROM 
                        FLOW                    
                      WHERE 
                        FLOW_ID = 'dataItem.FLOW_ID'
                  `;

    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);

    return sql;
  };

  // *** Function Search
  static searchFlow = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM
                        FLOW tb_1
                    WHERE 
                        tb_1.FLOW_NAME LIKE '%dataItem.FLOW_NAME%'
                    AND tb_1.FLOW_CODE LIKE '%dataItem.FLOW_CODE%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace("dataItem.FLOW_NAME", dataItem["FLOW_NAME"]);
    sql = sql.replace("dataItem.FLOW_CODE", dataItem["FLOW_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                SELECT 
                tb_1.FLOW_ID
              , tb_1.FLOW_CODE
              , tb_1.FLOW_NAME
              , tb_1.TOTAL_COUNT_PROCESS
              , tb_1.UPDATE_BY
              , tb_1.PRODUCT_MAIN_ID 
              , tb_2.PRODUCT_MAIN_NAME
              , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
              , tb_1.INUSE
            FROM
              FLOW tb_1
                  INNER JOIN
              PRODUCT_MAIN tb_2
                  ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
            WHERE 
                  tb_1.FLOW_NAME LIKE '%dataItem.FLOW_NAME%'
              AND tb_1.FLOW_CODE LIKE '%dataItem.FLOW_CODE%'
              AND tb_1.INUSE LIKE '%dataItem.INUSE%'
            ORDER BY 
              dataItem.Order
            LIMIT 
              dataItem.Start, dataItem.Limit
          `;

    sql = sql.replace("dataItem.FLOW_NAME", dataItem["FLOW_NAME"]);
    sql = sql.replace("dataItem.FLOW_CODE", dataItem["FLOW_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createFlow = async (dataItem) => {
    let sql = `  
    INSERT INTO FLOW
    (
          FLOW_ID
        , FLOW_NAME
        , FLOW_CODE
        , FLOW_TYPE_ID
        , PRODUCT_MAIN_ID
        , TOTAL_COUNT_PROCESS
        , CREATE_BY
        , UPDATE_DATE
        , UPDATE_BY
    )                   
            SELECT
                    @flowId
                 , 'dataItem.FLOW_NAME'
                 , CONCAT('F','dataItem.FLOW_ALPHABET','-','dataItem.PRODUCT_MAIN_ALPHABET','-', LPAD((COUNT(*) + 1), 4, 0))
                 , 'dataItem.FLOW_TYPE_ID'
                 , 'dataItem.PRODUCT_MAIN_ID'
                 , 'dataItem.TOTAL_COUNT_PROCESS'
                 , 'dataItem.CREATE_BY'
                 , CURRENT_TIMESTAMP()
                 , 'dataItem.CREATE_BY'
            FROM 
                FLOW
            WHERE
                PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID' ;
                 
                            `;

    sql = sql.replace("dataItem.FLOW_NAME", dataItem["FLOW_NAME"]);

    sql = sql.replace("dataItem.FLOW_ALPHABET", dataItem["FLOW_ALPHABET"]);
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replace("dataItem.FLOW_TYPE_ID", dataItem["FLOW_TYPE_ID"]);
    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );
    sql = sql.replace(
      "dataItem.TOTAL_COUNT_PROCESS",
      dataItem["TOTAL_COUNT_PROCESS"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateFlow = async (dataItem) => {
    let sql = `    UPDATE
                        FLOW
                    SET
                          FLOW_NAME = 'dataItem.FLOW_NAME'
                        , TOTAL_COUNT_PROCESS = 'dataItem.TOTAL_COUNT_PROCESS'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        FLOW_ID = 'dataItem.FLOW_ID' ;
                    `;

    sql = sql.replace("dataItem.FLOW_NAME", dataItem["FLOW_NAME"]);
    sql = sql.replace(
      "dataItem.TOTAL_COUNT_PROCESS",
      dataItem["TOTAL_COUNT_PROCESS"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);
    return sql;
  };

  // *** Function Delete
  static deleteFlow = async (dataItem) => {
    let sql = `     UPDATE 
                          FLOW 
                      SET
                            INUSE = '0'
                          , UPDATE_BY = 'dataItem.UPDATE_BY'
                          , UPDATE_DATE = CURRENT_TIMESTAMP()
                      WHERE 
                          FLOW_ID = 'dataItem.FLOW_ID'
                    `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);

    return sql;
  };

  static GetByLikeFlowName = async (dataItem) => {
    let sql = `            SELECT
                                    FLOW_ID
                                  , FLOW_NAME 
                                FROM
                                  FLOW                    
                                WHERE 
                                  FLOW_NAME LIKE '%dataItem.FLOW_NAME%'
                                ORDER BY 
                                  FLOW_NAME ASC
                                LIMIT 
                                  50
                                              `;

    sql = sql.replace("dataItem.FLOW_NAME", dataItem["FLOW_NAME"]);

    return sql;
  };

  static CreateFlowId = async (dataItem) => {
    let sql = ` SET @flowId=(SELECT DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')); `;

    return sql;
  };

  static SearchByProductMainId = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                      COUNT(*) AS TOTAL_COUNT
                  FROM
                      FLOW tb_1
                  WHERE 
                      tb_1.FLOW_NAME LIKE '%dataItem.FLOW_NAME%'
                  AND tb_1.FLOW_CODE LIKE '%dataItem.FLOW_CODE%'
                  AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                  AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID' `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.FLOW_NAME", dataItem["FLOW_NAME"]);
    sql = sql.replace("dataItem.FLOW_CODE", dataItem["FLOW_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                      SELECT 
                      tb_1.FLOW_ID
                    , tb_1.FLOW_CODE
                    , tb_1.FLOW_NAME
                    , tb_1.TOTAL_COUNT_PROCESS
                    , tb_1.UPDATE_BY
                    , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , tb_1.INUSE
                  FROM
                    FLOW tb_1
                  WHERE 
                        tb_1.FLOW_NAME LIKE '%dataItem.FLOW_NAME%'
                    AND tb_1.FLOW_CODE LIKE '%dataItem.FLOW_CODE%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                    AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                  ORDER BY
                    dataItem.Order
                  LIMIT
                      dataItem.Start
                    , dataItem.Limit
          `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.FLOW_NAME", dataItem["FLOW_NAME"]);
    sql = sql.replace("dataItem.FLOW_CODE", dataItem["FLOW_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };
}

module.exports = FlowSQL;

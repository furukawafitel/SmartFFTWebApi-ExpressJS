// ** SQLFactory

// *** Declare Function SQL

class FlowProcessSQL {
  // *** Function Get
  static getFlowProcess = async (dataItem) => {
    let sql = `      SELECT
                            FLOW_PROCESS_ID
                        , FLOW_PROCESS_NAME
                        , FLOW_PROCESS_CODE
                        , INUSE
                        FROM 
                        FLOW_PROCESS                    
                        WHERE 
                        FLOW_PROCESS_ID = 'dataItem.FLOW_PROCESS_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_ID",
      dataItem["FLOW_PROCESS_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchFlowProcess = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM
                        FLOW_PROCESS
                    WHERE 
                        FLOW_PROCESS_NAME LIKE '%dataItem.FLOW_PROCESS_NAME%'
                    AND FLOW_PROCESS_CODE LIKE '%dataItem.FLOW_PROCESS_CODE%'
                    AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_NAME",
      dataItem["FLOW_PROCESS_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_CODE",
      dataItem["FLOW_PROCESS_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                        SELECT 
                        FLOW_PROCESS_ID
                    , FLOW_PROCESS_CODE
                    , FLOW_PROCESS_NAME
                    , UPDATE_BY
                    , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , INUSE
                    FROM 
                    FLOW_PROCESS
                    WHERE 
                        FLOW_PROCESS_NAME LIKE '%dataItem.FLOW_PROCESS_NAME%'
                    AND FLOW_PROCESS_CODE LIKE '%dataItem.FLOW_PROCESS_CODE%'
                    AND INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    dataItem.Order
                    LIMIT 
                        dataItem.Start 
                    , dataItem.Limit
            `;

    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_NAME",
      dataItem["FLOW_PROCESS_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_CODE",
      dataItem["FLOW_PROCESS_CODE"]
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
  static createFlowProcess = async (dataItem) => {
    let sql = `  
                            INSERT INTO FLOW_PROCESS
                            (
                                FLOW_PROCESS_ID
                                , FLOW_ID
                                , NO
                                , PROCESS_ID
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )                   
                            VALUES
                            (
                                    DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                                ,  @flowId                             
                                , 'dataItem.NO'
                                , 'dataItem.PROCESS_ID'                         
                                , 'dataItem.CREATE_BY'
                                , CURRENT_TIMESTAMP()
                                , 'dataItem.CREATE_BY'
                            ) ;
                   
                              `;

    sql = sql.replaceAll("dataItem.NO", dataItem["NO"]);
    sql = sql.replaceAll("dataItem.PROCESS_ID", dataItem["PROCESS_ID"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateFlowProcess = async (dataItem) => {
    let sql = `      UPDATE
                                FLOW_PROCESS
                            SET
                                FLOW_PROCESS_NAME = 'dataItem.FLOW_PROCESS_NAME'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                            WHERE 
                            FLOW_PROCESS_ID = 'dataItem.FLOW_PROCESS_ID' ;
                      `;

    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_NAME",
      dataItem["FLOW_PROCESS_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_ID",
      dataItem["FLOW_PROCESS_ID"]
    );
    return sql;
  };

  // *** Function Delete
  static deleteFlowProcess = async (dataItem) => {
    let sql = `   UPDATE 
                        FLOW_PROCESS
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        FLOW_PROCESS_ID = 'dataItem.FLOW_PROCESS_ID'
                      `;

    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_ID",
      dataItem["FLOW_PROCESS_ID"]
    );
    return sql;
  };

  static GetByLikeFlowProcessName = async (dataItem) => {
    let sql = `          SELECT
                                FLOW_PROCESS_ID
                            , FLOW_PROCESS_NAME 
                            FROM
                            FLOW_PROCESS                    
                            WHERE 
                            FLOW_PROCESS_NAME LIKE '%dataItem.FLOW_PROCESS_NAME%'
                            ORDER BY 
                            FLOW_PROCESS_NAME ASC
                            LIMIT 
                            50
                                                `;

    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_NAME",
      dataItem["FLOW_PROCESS_NAME"]
    );
    return sql;
  };

  static GetByFlowId = async (dataItem) => {
    let sql = `          SELECT
                                tb_1.FLOW_PROCESS_ID
                            , tb_1.PROCESS_ID
                            , tb_2.PROCESS_NAME
                            , tb_1.NO
                            FROM
                            FLOW_PROCESS tb_1
                                INNER JOIN
                            PROCESS tb_2
                                ON tb_1.PROCESS_ID = tb_2.PROCESS_ID
                            WHERE 
                                tb_1.FLOW_ID = 'dataItem.FLOW_ID'
                            AND tb_1.INUSE = 1
                            ORDER BY
                            tb_1.NO
                                                `;

    sql = sql.replaceAll("dataItem.FLOW_ID", dataItem["FLOW_ID"]);
    return sql;
  };

  static DeleteByFlowId = async (dataItem) => {
    let sql = `           UPDATE
                                FLOW_PROCESS 
                            SET
                                INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                            WHERE 
                                FLOW_ID = 'dataItem.FLOW_ID'
                                AND INUSE = '1' ;
                                                `;

    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll("dataItem.FLOW_ID", dataItem["FLOW_ID"]);
    return sql;
  };

  static InsertByExistFlowId = async (dataItem) => {
    let sql = `           INSERT INTO FLOW_PROCESS
                                                (
                                                    FLOW_PROCESS_ID
                                                    , FLOW_ID
                                                    , NO
                                                    , PROCESS_ID
                                                    , CREATE_BY
                                                    , UPDATE_DATE
                                                    , UPDATE_BY
                                                )                   
                                                VALUES
                                                (                   
                                                    DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                                                    , 'dataItem.FLOW_ID'
                                                    , 'dataItem.NO'
                                                    , 'dataItem.PROCESS_ID'                         
                                                    , 'dataItem.CREATE_BY'
                                                    , CURRENT_TIMESTAMP()
                                                    , 'dataItem.CREATE_BY'
                                                ) ;
                                                `;

    sql = sql.replaceAll("dataItem.FLOW_ID", dataItem["FLOW_ID"]);
    sql = sql.replaceAll("dataItem.NO", dataItem["NO"]);
    sql = sql.replaceAll("dataItem.PROCESS_ID", dataItem["PROCESS_ID"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };
}

module.exports = FlowProcessSQL;

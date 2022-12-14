// ** SQLFactory

// *** Declare Function SQL

class FlowTypeSQL {
  // *** Function Get
  static getFlowType = async (dataItem) => {
    let sql = `     SELECT
                        FLOW_TYPE_ID
                    , FLOW_TYPE_NAME
                    , FLOW_TYPE_ALPHABET
                    , INUSE
                    FROM 
                    FLOW_TYPE                    
                    WHERE 
                    FLOW_TYPE_ID = 'dataItem.FLOW_TYPE_ID'
                    `;

    sql = sql.replace("dataItem.FLOW_TYPE_ID", dataItem["FLOW_TYPE_ID"]);

    return sql;
  };

  // *** Function Search
  static searchFlowType = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        FLOW_TYPE
                    WHERE 
                            FLOW_TYPE_NAME LIKE '%dataItem.FLOW_TYPE_NAME%'
                        AND FLOW_TYPE_ALPHABET LIKE '%dataItem.FLOW_TYPE_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace("dataItem.FLOW_TYPE_NAME", dataItem["FLOW_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.FLOW_TYPE_ALPHABET",
      dataItem["FLOW_TYPE_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    FLOW_TYPE_ID
                , FLOW_TYPE_NAME
                , FLOW_TYPE_ALPHABET
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
                FROM 
                FLOW_TYPE
                WHERE 
                    FLOW_TYPE_NAME LIKE '%dataItem.FLOW_TYPE_NAME%'
                AND FLOW_TYPE_ALPHABET LIKE '%dataItem.FLOW_TYPE_ALPHABET%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replace("dataItem.FLOW_TYPE_NAME", dataItem["FLOW_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.FLOW_TYPE_ALPHABET",
      dataItem["FLOW_TYPE_ALPHABET"]
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
  static createFlowType = async (dataItem) => {
    let sql = `  
                    INSERT INTO FLOW_TYPE
                    (
                        FLOW_TYPE_NAME
                        , FLOW_TYPE_ALPHABET
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        'dataItem.FLOW_TYPE_NAME'
                        , 'dataItem.FLOW_TYPE_ALPHABET'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                  
                   
                              `;

    sql = sql.replace("dataItem.FLOW_TYPE_NAME", dataItem["FLOW_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.FLOW_TYPE_ALPHABET",
      dataItem["FLOW_TYPE_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateFlowType = async (dataItem) => {
    let sql = `    UPDATE 
                        FLOW_TYPE 
                    SET
                        FLOW_TYPE_NAME = 'dataItem.FLOW_TYPE_NAME'
                        , FLOW_TYPE_ALPHABET = 'dataItem.FLOW_TYPE_ALPHABET'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        FLOW_TYPE_ID = 'dataItem.FLOW_TYPE_ID'
                      `;

    sql = sql.replace("dataItem.FLOW_TYPE_ID", dataItem["FLOW_TYPE_ID"]);
    sql = sql.replace("dataItem.FLOW_TYPE_NAME", dataItem["FLOW_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.FLOW_TYPE_ALPHABET",
      dataItem["FLOW_TYPE_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteFlowType = async (dataItem) => {
    let sql = `    UPDATE
                        FLOW_TYPE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        FLOW_TYPE_ID = 'dataItem.FLOW_TYPE_ID'
                      `;

    sql = sql.replace("dataItem.FLOW_TYPE_ID", dataItem["FLOW_TYPE_ID"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeFlowTypeName = async (dataItem) => {
    let sql = `          SELECT
                            FLOW_TYPE_ID
                        , FLOW_TYPE_NAME 
                        FROM
                        FLOW_TYPE                    
                        WHERE 
                            FLOW_TYPE_NAME LIKE '%dataItem.FLOW_TYPE_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        FLOW_TYPE_NAME
                        LIMIT 
                        50
                                                `;

    sql = sql.replace("dataItem.FLOW_TYPE_NAME", dataItem["FLOW_TYPE_NAME"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = FlowTypeSQL;

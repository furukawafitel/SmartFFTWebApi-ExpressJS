// ** SQLFactory

// *** Declare Function SQL

class MakerSQL {
  // *** Function Get
  static getMaker = async (dataItem) => {
    let sql = `       SELECT
                            MAKER_ID
                        , MAKER_NAME
                        , INUSE
                        FROM 
                        MAKER                    
                        WHERE 
                        MAKER_ID = 'dataItem.MAKER_ID'
                    `;

    sql = sql.replace("dataItem.MAKER_ID", dataItem["MAKER_ID"]);

    return sql;
  };

  // *** Function Search
  static searchMaker = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        MAKER
                    WHERE 
                            MAKER_NAME LIKE '%dataItem.MAKER_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace("dataItem.MAKER_NAME", dataItem["MAKER_NAME"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    MAKER_ID
                , MAKER_NAME
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
                FROM 
                MAKER
                WHERE 
                    MAKER_NAME LIKE '%dataItem.MAKER_NAME%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replace("dataItem.MAKER_NAME", dataItem["MAKER_NAME"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createMaker = async (dataItem) => {
    let sql = `  
                    INSERT INTO MAKER
                    (
                        MAKER_NAME
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        'dataItem.MAKER_NAME'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                      
                   
                              `;

    sql = sql.replace("dataItem.MAKER_NAME", dataItem["MAKER_NAME"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateMaker = async (dataItem) => {
    let sql = `    UPDATE 
                        MAKER 
                    SET
                        MAKER_NAME = 'dataItem.MAKER_NAME'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MAKER_ID = 'dataItem.MAKER_ID'
                      `;

    sql = sql.replace("dataItem.MAKER_ID", dataItem["MAKER_ID"]);
    sql = sql.replace("dataItem.MAKER_NAME", dataItem["MAKER_NAME"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteMaker = async (dataItem) => {
    let sql = `    UPDATE
                        MAKER
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        MAKER_ID = 'dataItem.MAKER_ID'
                      `;

    sql = sql.replace("dataItem.MAKER_ID", dataItem["MAKER_ID"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMakerNameAndInuse = async (dataItem) => {
    let sql = `            SELECT
                                MAKER_ID
                            , MAKER_NAME 
                            FROM
                            MAKER                    
                            WHERE 
                                MAKER_NAME LIKE '%dataItem.MAKER_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            MAKER_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replace("dataItem.MAKER_NAME", dataItem["MAKER_NAME"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = MakerSQL;

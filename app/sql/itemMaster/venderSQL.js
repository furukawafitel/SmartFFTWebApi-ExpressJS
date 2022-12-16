// ** SQLFactory

// *** Declare Function SQL

class VenderSQL {
  // *** Function Get
  static getVender = async (dataItem) => {
    let sql = `     SELECT
                            VENDOR_ID
                        , VENDOR_NAME
                        , VENDOR_ALPHABET
                        , INUSE
                        FROM 
                        VENDOR                    
                        WHERE 
                        VENDOR_ID = 'dataItem.VENDOR_ID'
                    `;

    sql = sql.replaceAll("dataItem.VENDOR_ID", dataItem["VENDOR_ID"]);

    return sql;
  };

  // *** Function Search
  static searchVender = async (dataItem) => {
    let sqlList = [];

    let sql = `   SELECT 
                    COUNT(*) AS TOTAL_COUNT
                FROM 
                    VENDOR
                WHERE 
                        VENDOR_NAME LIKE '%dataItem.VENDOR_NAME%'
                    AND VENDOR_ALPHABET LIKE '%dataItem.VENDOR_ALPHABET%'
                    AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replaceAll("dataItem.VENDOR_NAME", dataItem["VENDOR_NAME"]);
    sql = sql.replaceAll(
      "dataItem.VENDOR_ALPHABET",
      dataItem["VENDOR_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                SELECT 
                VENDOR_ID
            , VENDOR_NAME
            , VENDOR_ALPHABET
            , UPDATE_BY
            , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
            , INUSE
            FROM 
            VENDOR
            WHERE 
                VENDOR_NAME LIKE '%dataItem.VENDOR_NAME%'
            AND VENDOR_ALPHABET LIKE '%dataItem.VENDOR_ALPHABET%'
            AND INUSE LIKE '%dataItem.INUSE%'
            ORDER BY 
            dataItem.Order
            LIMIT 
                dataItem.Start 
            , dataItem.Limit
            `;

    sql = sql.replaceAll("dataItem.VENDOR_NAME", dataItem["VENDOR_NAME"]);
    sql = sql.replaceAll(
      "dataItem.VENDOR_ALPHABET",
      dataItem["VENDOR_ALPHABET"]
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
  static createVender = async (dataItem) => {
    let sql = `  
                    INSERT INTO VENDOR
                    (
                        VENDOR_NAME
                        , VENDOR_ALPHABET
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        'dataItem.VENDOR_NAME'
                        , 'dataItem.VENDOR_ALPHABET'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )              
                   
                              `;

    sql = sql.replaceAll("dataItem.VENDOR_NAME", dataItem["VENDOR_NAME"]);
    sql = sql.replaceAll(
      "dataItem.VENDOR_ALPHABET",
      dataItem["VENDOR_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateVender = async (dataItem) => {
    let sql = `    UPDATE 
                        VENDOR 
                    SET
                        VENDOR_NAME = 'dataItem.VENDOR_NAME'
                        , VENDOR_ALPHABET = 'dataItem.VENDOR_ALPHABET'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        VENDOR_ID = 'dataItem.VENDOR_ID'
                      `;

    sql = sql.replaceAll("dataItem.VENDOR_ID", dataItem["VENDOR_ID"]);
    sql = sql.replaceAll("dataItem.VENDOR_NAME", dataItem["VENDOR_NAME"]);
    sql = sql.replaceAll(
      "dataItem.VENDOR_ALPHABET",
      dataItem["VENDOR_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteVender = async (dataItem) => {
    let sql = `     UPDATE
                        VENDOR
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        VENDOR_ID = 'dataItem.VENDOR_ID'
                      `;

    sql = sql.replaceAll("dataItem.VENDOR_ID", dataItem["VENDOR_ID"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeVendorName = async (dataItem) => {
    let sql = `            SELECT
                                VENDOR_ID
                            , VENDOR_NAME 
                            FROM
                            VENDOR                    
                            WHERE 
                                VENDOR_NAME LIKE '%dataItem.VENDOR_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            VENDOR_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replaceAll("dataItem.VENDOR_NAME", dataItem["VENDOR_NAME"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };

  static GetByLikeVendorAlphabetAndInuse = async (dataItem) => {
    let sql = `             SELECT
                                    VENDOR_ID
                                , VENDOR_ALPHABET 
                                FROM
                                VENDOR                    
                                WHERE 
                                    VENDOR_ALPHABET LIKE '%dataItem.VENDOR_ALPHABET%'
                                AND INUSE LIKE '%dataItem.INUSE%'
                                ORDER BY 
                                VENDOR_ALPHABET
                                LIMIT 
                                50          `;

    sql = sql.replaceAll(
      "dataItem.VENDOR_ALPHABET",
      dataItem["VENDOR_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };
}

module.exports = VenderSQL;

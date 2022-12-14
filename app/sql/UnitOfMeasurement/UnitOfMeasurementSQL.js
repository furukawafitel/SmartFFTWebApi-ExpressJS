// ** SQLFactory

// *** Declare Function SQL

class UnitOfMeasurementSQL {
  // *** Function Get
  static getUnit = async (dataItem) => {
    let sql = `      SELECT  PRODUCT_SUB_ID,
                          , PRODUCT_CATEGORY_ID
                          , PRODUCT_SUB_NAME
                          , PRODUCT_SUB_CODE
                          , PRODUCT_SUB_ALPHABET
                          , INUSE
                          FROM 
                          PRODUCT_SUB                    
                          WHERE 
                          PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
                `;

    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_ID",
      dataItem["UNIT_OF_MEASUREMENT_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchUnit = async (dataItem) => {
    let sqlList = [];

    let sql = `  SELECT COUNT(*) AS TOTAL_COUNT
                    FROM 
                        UNIT_OF_MEASUREMENT
                    WHERE 
                        UNIT_OF_MEASUREMENT_NAME LIKE '%dataItem.UNIT_OF_MEASUREMENT_NAME%'
                        AND SYMBOL LIKE '%dataItem.SYMBOL%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_NAME",
      dataItem["UNIT_OF_MEASUREMENT_NAME"]
    );
    sql = sql.replace("dataItem.SYMBOL", dataItem["SYMBOL"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
            SELECT 
            UNIT_OF_MEASUREMENT_ID
            , UNIT_OF_MEASUREMENT_NAME
            , SYMBOL
            , UPDATE_BY
            , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
            , INUSE
            FROM 
            UNIT_OF_MEASUREMENT
            WHERE 
                UNIT_OF_MEASUREMENT_NAME LIKE '%dataItem.UNIT_OF_MEASUREMENT_NAME%'
            AND SYMBOL LIKE '%dataItem.SYMBOL%'
            AND INUSE LIKE '%dataItem.INUSE%'
            ORDER BY 
            dataItem.Order
            LIMIT 
                dataItem.Start 
            , dataItem.Limit
        `;

    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_NAME",
      dataItem["UNIT_OF_MEASUREMENT_NAME"]
    );
    sql = sql.replace("dataItem.SYMBOL", dataItem["SYMBOL"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createUnit = async (dataItem) => {
    let sql = `  
                        INSERT INTO UNIT_OF_MEASUREMENT
                        (
                            UNIT_OF_MEASUREMENT_NAME
                            , SYMBOL
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            'dataItem.UNIT_OF_MEASUREMENT_NAME'
                            , 'dataItem.SYMBOL'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )                
               
                          `;

    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_NAME",
      dataItem["UNIT_OF_MEASUREMENT_NAME"]
    );
    sql = sql.replace("dataItem.SYMBOL", dataItem["SYMBOL"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateUnit = async (dataItem) => {
    let sql = `    UPDATE 
                        UNIT_OF_MEASUREMENT 
                    SET
                        UNIT_OF_MEASUREMENT_NAME = 'dataItem.UNIT_OF_MEASUREMENT_NAME'
                        , SYMBOL = 'dataItem.SYMBOL'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        UNIT_OF_MEASUREMENT_ID = 'dataItem.UNIT_OF_MEASUREMENT_ID'
                  `;

    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_ID",
      dataItem["UNIT_OF_MEASUREMENT_ID"]
    );
    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_NAME",
      dataItem["UNIT_OF_MEASUREMENT_NAME"]
    );
    sql = sql.replace("dataItem.SYMBOL", dataItem["SYMBOL"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteUnit = async (dataItem) => {
    let sql = `   UPDATE
                        UNIT_OF_MEASUREMENT
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        UNIT_OF_MEASUREMENT_ID = 'dataItem.UNIT_OF_MEASUREMENT_ID'
                  `;

    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_ID",
      dataItem["UNIT_OF_MEASUREMENT_ID"]
    );
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeUnitOfMeasurementName = async (dataItem) => {
    let sql = `          SELECT
                                UNIT_OF_MEASUREMENT_ID
                            , UNIT_OF_MEASUREMENT_NAME 
                            FROM
                            UNIT_OF_MEASUREMENT                    
                            WHERE 
                                UNIT_OF_MEASUREMENT_NAME LIKE '%dataItem.UNIT_OF_MEASUREMENT_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            UNIT_OF_MEASUREMENT_NAME
                            LIMIT 
                            50
                                            `;
    sql = sql.replace(
      "dataItem.UNIT_OF_MEASUREMENT_NAME",
      dataItem["UNIT_OF_MEASUREMENT_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeSymbol = async (dataItem) => {
    let sql = `     SELECT
                        UNIT_OF_MEASUREMENT_ID
                    , SYMBOL 
                    FROM
                    UNIT_OF_MEASUREMENT                    
                    WHERE 
                        SYMBOL LIKE '%dataItem.SYMBOL%'
                    AND INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    SYMBOL
                    LIMIT 
                    50
                `;

    sql = sql.replace("dataItem.SYMBOL", dataItem["SYMBOL"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };
}

module.exports = UnitOfMeasurementSQL;

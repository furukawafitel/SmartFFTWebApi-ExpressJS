// ** SQLFactory

// *** Declare Function SQL

class ProductionPurposeSQL {
  // *** Function Get
  static getProductionPurpose = async (dataItem) => {
    let sql = `      SELECT
                          PRODUCTION_PURPOSE_ID
                        , PRODUCTION_PURPOSE_NAME
                        , PRODUCTION_PURPOSE_ALPHABET
                        , INUSE
                      FROM 
                        PRODUCTION_PURPOSE                    
                      WHERE 
                        PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'
                  `;

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchProductionPurpose = async (dataItem) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        PRODUCTION_PURPOSE
                    WHERE 
                            PRODUCTION_PURPOSE_NAME LIKE '%dataItem.PRODUCTION_PURPOSE_NAME%'
                        AND PRODUCTION_PURPOSE_ALPHABET LIKE '%dataItem.PRODUCTION_PURPOSE_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                  SELECT 
                  PRODUCTION_PURPOSE_ID
                , PRODUCTION_PURPOSE_NAME
                , PRODUCTION_PURPOSE_ALPHABET
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
              FROM 
                PRODUCTION_PURPOSE
              WHERE 
                    PRODUCTION_PURPOSE_NAME LIKE '%dataItem.PRODUCTION_PURPOSE_NAME%'
                AND PRODUCTION_PURPOSE_ALPHABET LIKE '%dataItem.PRODUCTION_PURPOSE_ALPHABET%'
                AND INUSE LIKE '%dataItem.INUSE%'
              ORDER BY 
                dataItem.Order
              LIMIT 
                  dataItem.Start 
                , dataItem.Limit
          `;

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
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
  static createProductionPurpose = async (dataItem) => {
    let sql = `  
                INSERT INTO PRODUCTION_PURPOSE
                (
                      PRODUCTION_PURPOSE_NAME
                    , PRODUCTION_PURPOSE_ALPHABET
                    , CREATE_BY
                    , UPDATE_DATE
                    , UPDATE_BY
                )
                VALUES
                (
                      'dataItem.PRODUCTION_PURPOSE_NAME'
                    , 'dataItem.PRODUCTION_PURPOSE_ALPHABET'
                    , 'dataItem.CREATE_BY'
                    ,  CURRENT_TIMESTAMP()
                    , 'dataItem.CREATE_BY'
                )                
                 
                            `;

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateProductionPurpose = async (dataItem) => {
    let sql = `    UPDATE 
                          PRODUCTION_PURPOSE 
                      SET
                            PRODUCTION_PURPOSE_NAME = 'dataItem.PRODUCTION_PURPOSE_NAME'
                          , PRODUCTION_PURPOSE_ALPHABET = 'dataItem.PRODUCTION_PURPOSE_ALPHABET'
                          , INUSE = 'dataItem.INUSE'
                          , UPDATE_BY = 'dataItem.UPDATE_BY'
                          , UPDATE_DATE = CURRENT_TIMESTAMP()
                      WHERE 
                          PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'
                    `;

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );
    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteProductionPurpose = async (dataItem) => {
    let sql = `    UPDATE
                          PRODUCTION_PURPOSE
                      SET
                            INUSE = '0'
                          , UPDATE_BY = 'dataItem.UPDATE_BY'
                          , UPDATE_DATE = CURRENT_TIMESTAMP()
                      WHERE
                          PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'
                    `;

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeProductionPurposeNameAndInuse = async (dataItem) => {
    let sql = `           SELECT
                                  PRODUCTION_PURPOSE_ID
                                , PRODUCTION_PURPOSE_NAME 
                                , PRODUCTION_PURPOSE_ALPHABET
                              FROM
                                PRODUCTION_PURPOSE                    
                              WHERE 
                                    PRODUCTION_PURPOSE_NAME LIKE '%dataItem.PRODUCTION_PURPOSE_NAME%'
                                AND INUSE LIKE '%dataItem.INUSE%'
                              ORDER BY 
                                PRODUCTION_PURPOSE_NAME
                              LIMIT 
                                50
                                              `;

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = ProductionPurposeSQL;

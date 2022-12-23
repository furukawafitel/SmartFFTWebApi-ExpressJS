// ** SQLFactory

// *** Declare Function SQL

class PurchaseModuleSQL {
  // *** Function Get
  static getPurchaseModule = async (dataItem) => {
    let sql = `         SELECT
                            PURCHASE_MODULE_ID
                        , PURCHASE_MODULE_NAME
                        , INUSE
                        FROM 
                        PURCHASE_MODULE                    
                        WHERE 
                        PURCHASE_MODULE_ID = 'dataItem.PURCHASE_MODULE_ID' ;
                    `;

    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_ID",
      dataItem["PURCHASE_MODULE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchPurchaseModule = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        PURCHASE_MODULE
                    WHERE 
                            PURCHASE_MODULE_NAME LIKE '%dataItem.PURCHASE_MODULE_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_NAME",
      dataItem["PURCHASE_MODULE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                        SELECT 
                        PURCHASE_MODULE_ID
                    , PURCHASE_MODULE_NAME
                    , UPDATE_BY
                    , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , INUSE
                    FROM 
                    PURCHASE_MODULE
                    WHERE 
                        PURCHASE_MODULE_NAME LIKE '%dataItem.PURCHASE_MODULE_NAME%'
                    AND INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    dataItem.Order
                    LIMIT 
                        dataItem.Start 
                    , dataItem.Limit
            `;

    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
    );
    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_NAME",
      dataItem["PURCHASE_MODULE_NAME"]
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
  static createPurchaseModule = async (dataItem) => {
    let sql = `  
                        INSERT INTO PURCHASE_MODULE
                        (
                            PURCHASE_MODULE_NAME
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            'dataItem.PURCHASE_MODULE_NAME'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )                 ;
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_NAME",
      dataItem["PURCHASE_MODULE_NAME"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updatePurchaseModule = async (dataItem) => {
    let sql = `   UPDATE 
    PURCHASE_MODULE 
SET
      PURCHASE_MODULE_NAME = 'dataItem.PURCHASE_MODULE_NAME'
    , INUSE = 'dataItem.INUSE'
    , UPDATE_BY = 'dataItem.UPDATE_BY'
    , UPDATE_DATE = CURRENT_TIMESTAMP()
WHERE 
    PURCHASE_MODULE_ID = 'dataItem.PURCHASE_MODULE_ID' ;
                      `;

    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_ID",
      dataItem["PURCHASE_MODULE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_NAME",
      dataItem["PURCHASE_MODULE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deletePurchaseModule = async (dataItem) => {
    let sql = `     UPDATE
                        PURCHASE_MODULE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        PURCHASE_MODULE_ID = 'dataItem.PURCHASE_MODULE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_ID",
      dataItem["PURCHASE_MODULE_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikePurchaseModuleNameAndInuse = async (dataItem) => {
    let sql = `           
                        SELECT
                            PURCHASE_MODULE_ID
                            , PURCHASE_MODULE_NAME 
                        FROM
                            PURCHASE_MODULE                    
                        WHERE 
                                PURCHASE_MODULE_NAME LIKE '%dataItem.PURCHASE_MODULE_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                            PURCHASE_MODULE_NAME
                        LIMIT 
                            50 ;
                                                `;

    sql = sql.replaceAll(
      "dataItem.PURCHASE_MODULE_NAME",
      dataItem["PURCHASE_MODULE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = PurchaseModuleSQL;

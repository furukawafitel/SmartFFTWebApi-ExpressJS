// ** SQLFactory

// *** Declare Function SQL

class CustomerShipToSQL {
  // *** Function Get
  static getCustomerShipTo = async (dataItem) => {
    let sql = `       SELECT
                            CUSTOMER_SHIP_TO_ID
                        , CUSTOMER_SHIP_TO_NAME
                        , CUSTOMER_SHIP_TO_ALPHABET
                        , INUSE
                        FROM 
                        CUSTOMER_SHIP_TO                    
                        WHERE 
                        CUSTOMER_SHIP_TO_ID = 'dataItem.CUSTOMER_SHIP_TO_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ID",
      dataItem["CUSTOMER_SHIP_TO_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchCustomerShipTo = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        CUSTOMER_SHIP_TO
                    WHERE 
                            CUSTOMER_SHIP_TO_NAME LIKE '%dataItem.CUSTOMER_SHIP_TO_NAME%'
                        AND CUSTOMER_SHIP_TO_ALPHABET LIKE '%dataItem.CUSTOMER_SHIP_TO_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%'   `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_NAME",
      dataItem["CUSTOMER_SHIP_TO_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ALPHABET",
      dataItem["CUSTOMER_SHIP_TO_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    CUSTOMER_SHIP_TO_ID
                , CUSTOMER_SHIP_TO_NAME
                , CUSTOMER_SHIP_TO_ALPHABET
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
                FROM 
                CUSTOMER_SHIP_TO
                WHERE 
                    CUSTOMER_SHIP_TO_NAME LIKE '%dataItem.CUSTOMER_SHIP_TO_NAME%'
                AND CUSTOMER_SHIP_TO_ALPHABET LIKE '%dataItem.CUSTOMER_SHIP_TO_ALPHABET%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_NAME",
      dataItem["CUSTOMER_SHIP_TO_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ALPHABET",
      dataItem["CUSTOMER_SHIP_TO_ALPHABET"]
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
  static createCustomerShipTo = async (dataItem) => {
    let sql = `  
                            INSERT INTO CUSTOMER_SHIP_TO
                            (
                                CUSTOMER_SHIP_TO_NAME
                                , CUSTOMER_SHIP_TO_ALPHABET
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )
                            VALUES
                            (
                                'dataItem.CUSTOMER_SHIP_TO_NAME'
                                , 'dataItem.CUSTOMER_SHIP_TO_ALPHABET'
                                , 'dataItem.CREATE_BY'
                                ,  CURRENT_TIMESTAMP()
                                , 'dataItem.CREATE_BY'
                            )                
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_NAME",
      dataItem["CUSTOMER_SHIP_TO_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ALPHABET",
      dataItem["CUSTOMER_SHIP_TO_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateCustomerShipTo = async (dataItem) => {
    let sql = `    UPDATE 
                        CUSTOMER_SHIP_TO 
                    SET
                        CUSTOMER_SHIP_TO_NAME = 'dataItem.CUSTOMER_SHIP_TO_NAME'
                        , CUSTOMER_SHIP_TO_ALPHABET = 'dataItem.CUSTOMER_SHIP_TO_ALPHABET'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        CUSTOMER_SHIP_TO_ID = 'dataItem.CUSTOMER_SHIP_TO_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ID",
      dataItem["CUSTOMER_SHIP_TO_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_NAME",
      dataItem["CUSTOMER_SHIP_TO_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ALPHABET",
      dataItem["CUSTOMER_SHIP_TO_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteCustomerShipTo = async (dataItem) => {
    let sql = `      UPDATE
                            CUSTOMER_SHIP_TO
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            CUSTOMER_SHIP_TO_ID = 'dataItem.CUSTOMER_SHIP_TO_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ID",
      dataItem["CUSTOMER_SHIP_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeCustomerShipToName = async (dataItem) => {
    let sql = `          SELECT
                                CUSTOMER_SHIP_TO_ID
                            , CUSTOMER_SHIP_TO_NAME 
                            FROM
                            CUSTOMER_SHIP_TO                    
                            WHERE 
                                CUSTOMER_SHIP_TO_NAME LIKE '%dataItem.CUSTOMER_SHIP_TO_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            CUSTOMER_SHIP_TO_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_NAME",
      dataItem["CUSTOMER_SHIP_TO_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeCustomerShipToAlphabetAndInuse = async (dataItem) => {
    let sql = `          SELECT
                            CUSTOMER_SHIP_TO_ID
                        , CUSTOMER_SHIP_TO_ALPHABET 
                        FROM
                        CUSTOMER_SHIP_TO                    
                        WHERE 
                            CUSTOMER_SHIP_TO_ALPHABET LIKE '%dataItem.CUSTOMER_SHIP_TO_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        CUSTOMER_SHIP_TO_ALPHABET
                        LIMIT 
                        50
                                                `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_SHIP_TO_ALPHABET",
      dataItem["CUSTOMER_SHIP_TO_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = CustomerShipToSQL;

// ** SQLFactory

// *** Declare Function SQL

class CustomerOrderFromSQL {
  // *** Function Get
  static getCustomerOrderFrom = async (dataItem) => {
    let sql = `     SELECT
                            CUSTOMER_ORDER_FROM_ID
                        , CUSTOMER_ORDER_FROM_NAME
                        , CUSTOMER_ORDER_FROM_ALPHABET
                        , INUSE
                        FROM 
                        CUSTOMER_ORDER_FROM                    
                        WHERE 
                        CUSTOMER_ORDER_FROM_ID = 'dataItem.CUSTOMER_ORDER_FROM_ID'
                    `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ID",
      dataItem["CUSTOMER_ORDER_FROM_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchCustomerOrderFrom = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        CUSTOMER_ORDER_FROM
                    WHERE 
                            CUSTOMER_ORDER_FROM_NAME LIKE '%dataItem.CUSTOMER_ORDER_FROM_NAME%'
                        AND CUSTOMER_ORDER_FROM_ALPHABET LIKE '%dataItem.CUSTOMER_ORDER_FROM_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_NAME",
      dataItem["CUSTOMER_ORDER_FROM_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ALPHABET",
      dataItem["CUSTOMER_ORDER_FROM_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `SELECT 
                    CUSTOMER_ORDER_FROM_ID
                , CUSTOMER_ORDER_FROM_NAME
                , CUSTOMER_ORDER_FROM_ALPHABET
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
                FROM 
                CUSTOMER_ORDER_FROM
                WHERE 
                    CUSTOMER_ORDER_FROM_NAME LIKE '%dataItem.CUSTOMER_ORDER_FROM_NAME%'
                AND CUSTOMER_ORDER_FROM_ALPHABET LIKE '%dataItem.CUSTOMER_ORDER_FROM_ALPHABET%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_NAME",
      dataItem["CUSTOMER_ORDER_FROM_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ALPHABET",
      dataItem["CUSTOMER_ORDER_FROM_ALPHABET"]
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
  static createCustomerOrderFrom = async (dataItem) => {
    let sql = `  
                    INSERT INTO CUSTOMER_ORDER_FROM
                    (
                        CUSTOMER_ORDER_FROM_NAME
                        , CUSTOMER_ORDER_FROM_ALPHABET
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        'dataItem.CUSTOMER_ORDER_FROM_NAME'
                        , 'dataItem.CUSTOMER_ORDER_FROM_ALPHABET'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                   
                   
                              `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_NAME",
      dataItem["CUSTOMER_ORDER_FROM_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ALPHABET",
      dataItem["CUSTOMER_ORDER_FROM_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateCustomerOrderFrom = async (dataItem) => {
    let sql = `    UPDATE 
                            CUSTOMER_ORDER_FROM 
                        SET
                            CUSTOMER_ORDER_FROM_NAME = 'dataItem.CUSTOMER_ORDER_FROM_NAME'
                            , CUSTOMER_ORDER_FROM_ALPHABET = 'dataItem.CUSTOMER_ORDER_FROM_ALPHABET'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            CUSTOMER_ORDER_FROM_ID = 'dataItem.CUSTOMER_ORDER_FROM_ID'
                      `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ID",
      dataItem["CUSTOMER_ORDER_FROM_ID"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_NAME",
      dataItem["CUSTOMER_ORDER_FROM_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ALPHABET",
      dataItem["CUSTOMER_ORDER_FROM_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteCustomerOrderFrom = async (dataItem) => {
    let sql = `    UPDATE
                        CUSTOMER_ORDER_FROM
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        CUSTOMER_ORDER_FROM_ID = 'dataItem.CUSTOMER_ORDER_FROM_ID'
                      `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ID",
      dataItem["CUSTOMER_ORDER_FROM_ID"]
    );
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeCustomerOrderFromName = async (dataItem) => {
    let sql = `         SELECT
                                CUSTOMER_ORDER_FROM_ID
                            , CUSTOMER_ORDER_FROM_NAME 
                            FROM
                            CUSTOMER_ORDER_FROM                    
                            WHERE 
                                CUSTOMER_ORDER_FROM_NAME LIKE '%dataItem.CUSTOMER_ORDER_FROM_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            CUSTOMER_ORDER_FROM_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_NAME",
      dataItem["CUSTOMER_ORDER_FROM_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };

  static GetByLikeCustomerOrderFromAlphabetAndInuse = async (dataItem) => {
    let sql = `         SELECT
                            CUSTOMER_ORDER_FROM_ID
                        , CUSTOMER_ORDER_FROM_ALPHABET 
                        FROM
                        CUSTOMER_ORDER_FROM                    
                        WHERE 
                            CUSTOMER_ORDER_FROM_ALPHABET LIKE '%dataItem.CUSTOMER_ORDER_FROM_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        CUSTOMER_ORDER_FROM_ALPHABET
                        LIMIT 
                        50
                                                `;

    sql = sql.replace(
      "dataItem.CUSTOMER_ORDER_FROM_ALPHABET",
      dataItem["CUSTOMER_ORDER_FROM_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };
}

module.exports = CustomerOrderFromSQL;

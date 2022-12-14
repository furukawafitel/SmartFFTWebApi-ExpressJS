// ** SQLFactory

// *** Declare Function SQL

class CustomerInvoiceSQL {
  // *** Function Get
  static getCustomerInvoice = async (dataItem) => {
    let sql = `       SELECT
                            CUSTOMER_INVOICE_TO_ID
                        , CUSTOMER_INVOICE_TO_NAME
                        , CUSTOMER_INVOICE_TO_ALPHABET
                        , INUSE
                        FROM 
                        CUSTOMER_INVOICE_TO                    
                        WHERE 
                        CUSTOMER_INVOICE_TO_ID = 'dataItem.CUSTOMER_INVOICE_TO_ID'
                    `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchCustomerInvoice = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                            COUNT(*) AS TOTAL_COUNT
                        FROM 
                            CUSTOMER_INVOICE_TO
                        WHERE 
                                CUSTOMER_INVOICE_TO_NAME LIKE '%dataItem.CUSTOMER_INVOICE_TO_NAME%'
                            AND CUSTOMER_INVOICE_TO_ALPHABET LIKE '%dataItem.CUSTOMER_INVOICE_TO_ALPHABET%'
                            AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_NAME",
      dataItem["CUSTOMER_INVOICE_TO_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ALPHABET",
      dataItem["CUSTOMER_INVOICE_TO_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                            SELECT 
                            CUSTOMER_INVOICE_TO_ID
                        , CUSTOMER_INVOICE_TO_NAME
                        , CUSTOMER_INVOICE_TO_ALPHABET
                        , UPDATE_BY
                        , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                        , INUSE
                        FROM 
                        CUSTOMER_INVOICE_TO
                        WHERE 
                            CUSTOMER_INVOICE_TO_NAME LIKE '%dataItem.CUSTOMER_INVOICE_TO_NAME%'
                        AND CUSTOMER_INVOICE_TO_ALPHABET LIKE '%dataItem.CUSTOMER_INVOICE_TO_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        dataItem.Order
                        LIMIT 
                            dataItem.Start 
                        , dataItem.Limit
            `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_NAME",
      dataItem["CUSTOMER_INVOICE_TO_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ALPHABET",
      dataItem["CUSTOMER_INVOICE_TO_ALPHABET"]
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
  static createCustomerInvoice = async (dataItem) => {
    let sql = `  
                    INSERT INTO CUSTOMER_INVOICE_TO
                    (
                        CUSTOMER_INVOICE_TO_NAME
                        , CUSTOMER_INVOICE_TO_ALPHABET
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        'dataItem.CUSTOMER_INVOICE_TO_NAME'
                        , 'dataItem.CUSTOMER_INVOICE_TO_ALPHABET'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                
                   
                              `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_NAME",
      dataItem["CUSTOMER_INVOICE_TO_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ALPHABET",
      dataItem["CUSTOMER_INVOICE_TO_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateCustomerInvoice = async (dataItem) => {
    let sql = `     UPDATE 
                            CUSTOMER_INVOICE_TO 
                        SET
                            CUSTOMER_INVOICE_TO_NAME = 'dataItem.CUSTOMER_INVOICE_TO_NAME'
                            , CUSTOMER_INVOICE_TO_ALPHABET = 'dataItem.CUSTOMER_INVOICE_TO_ALPHABET'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            CUSTOMER_INVOICE_TO_ID = 'dataItem.CUSTOMER_INVOICE_TO_ID'
                      `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_NAME",
      dataItem["CUSTOMER_INVOICE_TO_NAME"]
    );
    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ALPHABET",
      dataItem["CUSTOMER_INVOICE_TO_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteCustomerInvoice = async (dataItem) => {
    let sql = `    UPDATE
                        CUSTOMER_INVOICE_TO
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        CUSTOMER_INVOICE_TO_ID = 'dataItem.CUSTOMER_INVOICE_TO_ID'
                      `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  static GetByLikeCustomerInvoiceToName = async (dataItem) => {
    let sql = `           SELECT
                                CUSTOMER_INVOICE_TO_ID
                            , CUSTOMER_INVOICE_TO_NAME 
                            FROM
                            CUSTOMER_INVOICE_TO                    
                            WHERE 
                                CUSTOMER_INVOICE_TO_NAME LIKE '%dataItem.CUSTOMER_INVOICE_TO_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            CUSTOMER_INVOICE_TO_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_NAME",
      dataItem["CUSTOMER_INVOICE_TO_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeCustomerInvoiceToAlphabetAndInuse = async (dataItem) => {
    let sql = `          SELECT
                                CUSTOMER_INVOICE_TO_ID
                            , CUSTOMER_INVOICE_TO_ALPHABET 
                            FROM
                            CUSTOMER_INVOICE_TO                    
                            WHERE 
                                CUSTOMER_INVOICE_TO_ALPHABET LIKE '%dataItem.CUSTOMER_INVOICE_TO_ALPHABET%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            CUSTOMER_INVOICE_TO_ALPHABET
                            LIMIT 
                            50
                                                `;

    sql = sql.replace(
      "dataItem.CUSTOMER_INVOICE_TO_ALPHABET",
      dataItem["CUSTOMER_INVOICE_TO_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };

  static GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse =
    async (dataItem) => {
      let sql = `           SELECT
                                    tb_1.CUSTOMER_INVOICE_TO_ID
                                    , tb_1.CUSTOMER_INVOICE_TO_ALPHABET 
                                    , tb_2.P2_NEED
                                FROM
                                    CUSTOMER_INVOICE_TO tb_1
                                        INNER JOIN 
                                    FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO tb_2
                                        ON tb_1.CUSTOMER_INVOICE_TO_ID = tb_2.CUSTOMER_INVOICE_TO_ID
                                WHERE 
                                        tb_1.CUSTOMER_INVOICE_TO_ALPHABET LIKE '%dataItem.CUSTOMER_INVOICE_TO_ALPHABET%'
                                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                                    AND tb_2.INUSE = '1'
                                ORDER BY 
                                    tb_1.CUSTOMER_INVOICE_TO_ALPHABET
                                LIMIT 
                                    50
                                                                                `;

      sql = sql.replace(
        "dataItem.CUSTOMER_INVOICE_TO_ALPHABET",
        dataItem["CUSTOMER_INVOICE_TO_ALPHABET"]
      );
      sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

      return sql;
    };
}

module.exports = CustomerInvoiceSQL;

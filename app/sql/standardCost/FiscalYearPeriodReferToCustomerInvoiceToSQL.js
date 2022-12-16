// ** SQLFactory

// *** Declare Function SQL

class FiscalYearPeriodReferToCustomerInvoiceToSQL {
  // *** Function Get
  static getFiscalYearPeriodReferToCustomerInvoiceTo = async (dataItem) => {
    let sql = `      SELECT
                        FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID
                    , CUSTOMER_INVOICE_TO_ID
                    , P2_NEED
                    , P2_START_MONTH_OF_FISCAL_YEAR_ID
                    , P3_START_MONTH_OF_FISCAL_YEAR_ID
                    , INUSE
                    FROM 
                    FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO                    
                    WHERE 
                    FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID = 'dataItem.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID",
      dataItem["FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchFiscalYearPeriodReferToCustomerInvoiceTo = async (
    dataItem,
    sqlWhere
  ) => {
    let sqlList = [];

    let sql = `     SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO tb_1
                    WHERE 
                            tb_1.P2_NEED LIKE '%dataItem.P2_NEED%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                                                                        
                   dataItem.sqlWhere `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.P2_NEED", dataItem["P2_NEED"]);
    sql = sql.replaceAll(
      "dataItem.P2_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P2_START_MONTH_OF_FISCAL_YEAR_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.P3_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P3_START_MONTH_OF_FISCAL_YEAR_ID"]
    );

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                        SELECT 
                        tb_1.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID
                    , tb_1.CUSTOMER_INVOICE_TO_ID
                    , tb_2.CUSTOMER_INVOICE_TO_ALPHABET
                    , tb_1.P2_NEED
                    , tb_1.P2_START_MONTH_OF_FISCAL_YEAR_ID
                    , tb_4.MONTH_SHORT_NAME_ENGLISH AS P2_START_MONTH_OF_FISCAL_YEAR_NAME
                    , tb_1.P3_START_MONTH_OF_FISCAL_YEAR_ID
                    , tb_3.MONTH_SHORT_NAME_ENGLISH AS P3_START_MONTH_OF_FISCAL_YEAR_NAME
                    , tb_1.UPDATE_BY
                    , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , tb_1.INUSE
                    FROM 
                    FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO tb_1
                        INNER JOIN 
                    CUSTOMER_INVOICE_TO tb_2
                        ON tb_1.CUSTOMER_INVOICE_TO_ID = tb_2.CUSTOMER_INVOICE_TO_ID
                        INNER JOIN 
                    MONTH tb_3
                        ON tb_1.P3_START_MONTH_OF_FISCAL_YEAR_ID  = tb_3.MONTH_ID 
                        LEFT JOIN  
                    MONTH tb_4
                        ON tb_1.P2_START_MONTH_OF_FISCAL_YEAR_ID = tb_4.MONTH_ID 
                    WHERE 
                        tb_1.P2_NEED LIKE '%dataItem.P2_NEED%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                                                                    
                    dataItem.sqlWhere

                    ORDER BY 
                    dataItem.Order 
                    LIMIT 
                        dataItem.Start 
                    , dataItem.Limit
            `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.P2_NEED", dataItem["P2_NEED"]);
    sql = sql.replaceAll(
      "dataItem.P2_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P2_START_MONTH_OF_FISCAL_YEAR_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.P3_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P3_START_MONTH_OF_FISCAL_YEAR_ID"]
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
  static createFiscalYearPeriodReferToCustomerInvoiceTo = async (dataItem) => {
    let sql = `  
                    INSERT INTO FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO
                    (
                        CUSTOMER_INVOICE_TO_ID
                        , P2_NEED
                        , P2_START_MONTH_OF_FISCAL_YEAR_ID
                        , P3_START_MONTH_OF_FISCAL_YEAR_ID
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        'dataItem.CUSTOMER_INVOICE_TO_ID'
                        , 'dataItem.P2_NEED'
                        , dataItem.P2_START_MONTH_OF_FISCAL_YEAR_ID
                        , 'dataItem.P3_START_MONTH_OF_FISCAL_YEAR_ID'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.P2_NEED", dataItem["P2_NEED"]);
    sql = sql.replaceAll(
      "dataItem.P2_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P2_START_MONTH_OF_FISCAL_YEAR_ID"] !== ""
        ? dataItem["P2_START_MONTH_OF_FISCAL_YEAR_ID"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.P3_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P3_START_MONTH_OF_FISCAL_YEAR_ID"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateFiscalYearPeriodReferToCustomerInvoiceTo = async (dataItem) => {
    let sql = `     UPDATE 
                        FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO 
                    SET
                        P2_NEED = 'dataItem.P2_NEED'
                        , P2_START_MONTH_OF_FISCAL_YEAR_ID = dataItem.P2_START_MONTH_OF_FISCAL_YEAR_ID
                        , P3_START_MONTH_OF_FISCAL_YEAR_ID = 'dataItem.P3_START_MONTH_OF_FISCAL_YEAR_ID'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID = 'dataItem.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID",
      dataItem["FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.P2_NEED", dataItem["P2_NEED"]);
    sql = sql.replaceAll(
      "dataItem.P2_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P2_START_MONTH_OF_FISCAL_YEAR_ID"] !== ""
        ? dataItem["P2_START_MONTH_OF_FISCAL_YEAR_ID"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.P3_START_MONTH_OF_FISCAL_YEAR_ID",
      dataItem["P3_START_MONTH_OF_FISCAL_YEAR_ID"]
    );

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteFiscalYearPeriodReferToCustomerInvoiceTo = async (dataItem) => {
    let sql = `      UPDATE
                            FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID = 'dataItem.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID",
      dataItem["FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static DeleteByCustomerInvoiceToId = async (dataItem) => {
    let sql = `            UPDATE
                                FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO
                            SET
                                INUSE = '0'
                                , UPDATE_BY = 'dataItem.UPDATE_BY'
                                , UPDATE_DATE = CURRENT_TIMESTAMP()
                            WHERE
                                    INUSE = '1'
                                AND CUSTOMER_INVOICE_TO_ID = 'dataItem.CUSTOMER_INVOICE_TO_ID' ;
                                                `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  static GetByCustomerInvoiceToIdAndInuse = async (dataItem) => {
    let sql = `           SELECT
                                tb_1.FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO_ID
                            , tb_1.CUSTOMER_INVOICE_TO_ID
                            , tb_2.CUSTOMER_INVOICE_TO_ALPHABET
                            , tb_1.P2_NEED
                            , tb_1.P2_START_MONTH_OF_FISCAL_YEAR_ID
                            , tb_2.MONTH_FULL_NAME_ENGLISH AS P2_START_MONTH_OF_FISCAL_YEAR_NAME
                            , tb_1.P3_START_MONTH_OF_FISCAL_YEAR_ID
                            , tb_2.MONTH_FULL_NAME_ENGLISH AS P3_START_MONTH_OF_FISCAL_YEAR_NAME
                            , tb_1.UPDATE_BY
                            , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                            , tb_1.INUSE
                            FROM
                            FISCAL_YEAR_PERIOD_REFER_TO_CUSTOMER_INVOICE_TO tb_1
                                INNER JOIN 
                            CUSTOMER_INVOICE_TO tb_2
                                ON tb_1.CUSTOMER_INVOICE_TO_ID = tb_2.CUSTOMER_INVOICE_TO_ID                 
                            WHERE 
                                CUSTOMER_INVOICE_TO_ID = 'dataItem.CUSTOMER_INVOICE_TO_ID'
                            AND INUSE = 'dataItem.INUSE'                
                                                `;

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = FiscalYearPeriodReferToCustomerInvoiceToSQL;

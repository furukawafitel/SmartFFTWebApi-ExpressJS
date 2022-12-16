// ** SQLFactory

// *** Declare Function SQL

class CostConditionForFiscalYearReferToProductMainSQL {
  // *** Function Get
  static getCostConditionForFiscalYearReferToProductMain = async (dataItem) => {
    let sql = `      SELECT
                        COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID
                    , INUSE
                    FROM 
                    COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN                    
                    WHERE 
                    COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID = 'dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID",
      dataItem["COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchCostConditionForFiscalYearReferToProductMain = async (
    dataItem,
    sqlWhere
  ) => {
    let sqlList = [];

    let sql = `    SELECT 
                COUNT(*) AS TOTAL_COUNT
            FROM 
                COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN tb_1
            WHERE 
                    tb_1.FISCAL_YEAR LIKE '%dataItem.FISCAL_YEAR%'
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'

    dataItem.sqlWhere `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    tb_1.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID
                , tb_1.FISCAL_YEAR
                , tb_1.DIRECT_UNIT_PROCESS_COST
                , tb_1.INDIRECT_RATE_OF_DIRECT_PROCESS_COST
                , tb_1.INDIRECT_COST_SALE_AVE
                , tb_1.IMPORT_FEE
                , tb_1.SELLING_EXPENSE
                , tb_1.GA
                , tb_1.MARGIN
                , tb_1.PRODUCT_MAIN_ID
                , tb_2.PRODUCT_MAIN_NAME
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN tb_1
                    INNER JOIN 
                PRODUCT_MAIN tb_2
                    ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID
                WHERE 
                    tb_1.FISCAL_YEAR LIKE '%dataItem.FISCAL_YEAR%'
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
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.Order", dataItem["Order"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createCostConditionForFiscalYearReferToProductMain = async (
    dataItem
  ) => {
    let sql = `  
                            INSERT INTO COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN
                            (
                                COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID
                                , PRODUCT_MAIN_ID
                                , FISCAL_YEAR
                                , DIRECT_UNIT_PROCESS_COST
                                , INDIRECT_RATE_OF_DIRECT_PROCESS_COST
                                , INDIRECT_COST_SALE_AVE
                                , IMPORT_FEE
                                , SELLING_EXPENSE
                                , GA
                                , MARGIN
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )
                            VALUES
                            (
                                    DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                                , 'dataItem.PRODUCT_MAIN_ID'
                                , 'dataItem.FISCAL_YEAR'
                                , 'dataItem.DIRECT_UNIT_PROCESS_COST'
                                , 'dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST'
                                , 'dataItem.INDIRECT_COST_SALE_AVE'
                                , 'dataItem.IMPORT_FEE'
                                , 'dataItem.SELLING_EXPENSE'
                                , 'dataItem.GA'
                                , 'dataItem.MARGIN'
                                , 'dataItem.CREATE_BY'
                                ,  CURRENT_TIMESTAMP()
                                , 'dataItem.CREATE_BY'
                            )                
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll(
      "dataItem.DIRECT_UNIT_PROCESS_COST",
      dataItem["DIRECT_UNIT_PROCESS_COST"]
    );
    sql = sql.replaceAll(
      "dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST",
      dataItem["INDIRECT_RATE_OF_DIRECT_PROCESS_COST"]
    );
    sql = sql.replaceAll(
      "dataItem.INDIRECT_COST_SALE_AVE",
      dataItem["INDIRECT_COST_SALE_AVE"]
    );
    sql = sql.replaceAll("dataItem.IMPORT_FEE", dataItem["IMPORT_FEE"]);
    sql = sql.replaceAll(
      "dataItem.SELLING_EXPENSE",
      dataItem["SELLING_EXPENSE"]
    );
    sql = sql.replaceAll("dataItem.GA", dataItem["GA"]);
    sql = sql.replaceAll("dataItem.MARGIN", dataItem["MARGIN"]);

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateCostConditionForFiscalYearReferToProductMain = async (
    dataItem
  ) => {
    let sql = `     UPDATE 
                        COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN 
                    SET
                        PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        , FISCAL_YEAR = 'dataItem.FISCAL_YEAR'
                        , DIRECT_UNIT_PROCESS_COST = 'dataItem.DIRECT_UNIT_PROCESS_COST'
                        , INDIRECT_RATE_OF_DIRECT_PROCESS_COST = 'dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST'
                        , INDIRECT_COST_SALE_AVE = 'dataItem.INDIRECT_COST_SALE_AVE'
                        , IMPORT_FEE = 'dataItem.IMPORT_FEE'
                        , SELLING_EXPENSE = 'dataItem.SELLING_EXPENSE'
                        , GA = 'dataItem.GA'
                        , MARGIN = 'dataItem.MARGIN'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID = 'dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID",
      dataItem["COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll(
      "dataItem.DIRECT_UNIT_PROCESS_COST",
      dataItem["DIRECT_UNIT_PROCESS_COST"]
    );
    sql = sql.replaceAll(
      "dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST",
      dataItem["INDIRECT_RATE_OF_DIRECT_PROCESS_COST"]
    );
    sql = sql.replaceAll(
      "dataItem.INDIRECT_COST_SALE_AVE",
      dataItem["INDIRECT_COST_SALE_AVE"]
    );
    sql = sql.replaceAll("dataItem.IMPORT_FEE", dataItem["IMPORT_FEE"]);
    sql = sql.replaceAll(
      "dataItem.SELLING_EXPENSE",
      dataItem["SELLING_EXPENSE"]
    );
    sql = sql.replaceAll("dataItem.GA", dataItem["GA"]);
    sql = sql.replaceAll("dataItem.MARGIN", dataItem["MARGIN"]);

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteCostConditionForFiscalYearReferToProductMain = async (
    dataItem
  ) => {
    let sql = `     UPDATE
                            COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID = 'dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID",
      dataItem["COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };
}

module.exports = CostConditionForFiscalYearReferToProductMainSQL;

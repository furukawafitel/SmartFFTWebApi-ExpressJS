// ** SQLFactory

// *** Declare Function SQL

class SctCostConditionForFiscalYearResultSQL {
  // *** Function Get
  static getSctCostConditionForFiscalYearResult = async (dataItem) => {
    let sql = `      SELECT
                            SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID
                        , SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE
                        , INUSE
                        FROM 
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT                    
                        WHERE 
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID = 'dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID",
      dataItem["SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchSctCostConditionForFiscalYearResult = async (
    dataItem,
    sqlWhere
  ) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT tb_1
                    WHERE 
                            tb_1.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE LIKE '%dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                        dataItem.sqlWhere `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE",
      dataItem["SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    tb_1.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID
                , tb_1.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE
                , tb_1.PRODUCT_MAIN_ID 
                , tb_2.PRODUCT_MAIN_NAME  
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT tb_1
                    INNER JOIN
                PRODUCT_MAIN tb_2
                    ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                WHERE 
                    tb_1.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE LIKE '%dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE%'
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

    sql = sql.replaceAll(
      "dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE",
      dataItem["SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE"]
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
  static createSctCostConditionForFiscalYearResult = async (dataItem) => {
    let sql = `  
                        INSERT INTO SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT
                        (
                            SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID
                            , SCT_ID
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
                            ,  @sctId
                            , dataItem.DIRECT_UNIT_PROCESS_COST
                            , dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST
                            , dataItem.INDIRECT_COST_SALE_AVE
                            , dataItem.IMPORT_FEE
                            , dataItem.SELLING_EXPENSE
                            , dataItem.GA
                            , dataItem.MARGIN
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        ) ;             
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.DIRECT_UNIT_PROCESS_COST",
      dataItem["RESULT_DIRECT_UNIT_PROCESS_COST"] != ""
        ? dataItem["RESULT_DIRECT_UNIT_PROCESS_COST"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST",
      dataItem["RESULT_INDIRECT_RATE_OF_DIRECT_PROCESS_COST"] != ""
        ? dataItem["RESULT_INDIRECT_RATE_OF_DIRECT_PROCESS_COST"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.INDIRECT_COST_SALE_AVE",
      dataItem["RESULT_INDIRECT_COST_SALE_AVE"] != ""
        ? dataItem["RESULT_INDIRECT_COST_SALE_AVE"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.IMPORT_FEE",
      dataItem["RESULT_IMPORT_FEE"] != ""
        ? dataItem["RESULT_IMPORT_FEE"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.SELLING_EXPENSE",
      dataItem["RESULT_SELLING_EXPENSE"] != ""
        ? dataItem["RESULT_SELLING_EXPENSE"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.GA",
      dataItem["RESULT_GA"] != "" ? dataItem["RESULT_GA"] : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.MARGIN",
      dataItem["RESULT_MARGIN"] != "" ? dataItem["RESULT_MARGIN"] : "NULL"
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateSctCostConditionForFiscalYearResult = async (dataItem) => {
    let sql = `    UPDATE 
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT 
                    SET
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE = 'dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE'
                        , PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID = 'dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID",
      dataItem["SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE",
      dataItem["SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteSctCostConditionForFiscalYearResult = async (dataItem) => {
    let sql = `     UPDATE
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID = 'dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID",
      dataItem["SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static DeleteBySctId = async (dataItem) => {
    let sql = `            DELETE FROM
                            SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT
                        WHERE
                                SCT_ID = 'dataItem.SCT_ID'
                            AND INUSE = 1
                                                `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    return sql;
  };

  static GetBySctIdAndInuse = async (dataItem) => {
    let sql = `            SELECT
                            DIRECT_UNIT_PROCESS_COST
                        , INDIRECT_RATE_OF_DIRECT_PROCESS_COST
                        , INDIRECT_COST_SALE_AVE
                        , IMPORT_FEE
                        , SELLING_EXPENSE
                        , GA
                        , MARGIN
                        FROM
                        SCT_COST_CONDITION_FOR_FISCAL_YEAR_RESULT                    
                        WHERE 
                            SCT_ID = 'dataItem.SCT_ID'     
                        AND INUSE LIKE '%dataItem.INUSE%'
                                                `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = SctCostConditionForFiscalYearResultSQL;

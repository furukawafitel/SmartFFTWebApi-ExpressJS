// ** SQLFactory

// *** Declare Function SQL

class CostConditionForFiscalYearReferToProductTypeSQL {
  // *** Function Get
  static getCostConditionForFiscalYearReferToProductType = async (dataItem) => {
    let sql = `       SELECT
                                COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID
                            , INUSE
                            FROM 
                            COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE                    
                            WHERE 
                            COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID = 'dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID",
      dataItem["COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchCostConditionForFiscalYearReferToProductType = async (
    dataItem,
    sqlWhere
  ) => {
    let sqlList = [];

    let sql = `    SELECT 
                    COUNT(*) AS TOTAL_COUNT
                FROM 
                    COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE tb_1
                WHERE 
                        tb_1.FISCAL_YEAR LIKE '%dataItem.FISCAL_YEAR%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                    dataItem.sqlWhere `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    tb_1.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID
                , tb_1.FISCAL_YEAR
                , tb_1.INDIRECT_COST_SALE_AVE
                , tb_1.PRODUCT_TYPE_ID
                , tb_2.PRODUCT_TYPE_NAME
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE tb_1
                    INNER JOIN 
                PRODUCT_TYPE tb_2
                    ON tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
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
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
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
  static createCostConditionForFiscalYearReferToProductType = async (
    dataItem
  ) => {
    let sql = `  
                        INSERT INTO COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE
                        (
                            COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID
                            , PRODUCT_TYPE_ID
                            , FISCAL_YEAR
                            , INDIRECT_COST_SALE_AVE
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                                DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                            , 'dataItem.PRODUCT_TYPE_ID'
                            , 'dataItem.FISCAL_YEAR'
                            , 'dataItem.INDIRECT_COST_SALE_AVE'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )                
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);

    sql = sql.replaceAll(
      "dataItem.INDIRECT_COST_SALE_AVE",
      dataItem["INDIRECT_COST_SALE_AVE"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateCostConditionForFiscalYearReferToProductType = async (
    dataItem
  ) => {
    let sql = `    UPDATE 
                        COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE 
                    SET
                        PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'
                        , FISCAL_YEAR = 'dataItem.FISCAL_YEAR'
                        , INDIRECT_COST_SALE_AVE = 'dataItem.INDIRECT_COST_SALE_AVE'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID = 'dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID",
      dataItem["COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);

    sql = sql.replaceAll(
      "dataItem.INDIRECT_COST_SALE_AVE",
      dataItem["INDIRECT_COST_SALE_AVE"]
    );

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteCostConditionForFiscalYearReferToProductType = async (
    dataItem
  ) => {
    let sql = `    UPDATE
                        COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID = 'dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID",
      dataItem["COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };
}

module.exports = CostConditionForFiscalYearReferToProductTypeSQL;

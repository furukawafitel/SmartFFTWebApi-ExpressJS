// ** SQLFactory

// *** Declare Function SQL

class CostConditionForFiscalYearReferToProductMain_ProductTypeSQL {
  // *** Function Insert
  static GetByProductMainIdAndProductTypeIdAndFiscalYear = async (dataItem) => {
    let sql = `  
                        SELECT
                        IF( tb_1.IS_NEED_DIRECT_UNIT_PROCESS_COST , tb_2.DIRECT_UNIT_PROCESS_COST , NULL )                        AS DIRECT_UNIT_PROCESS_COST
                    , IF( tb_1.IS_NEED_INDIRECT_RATE_OF_DIRECT_PROCESS_COST , tb_2.INDIRECT_RATE_OF_DIRECT_PROCESS_COST,NULL)   AS INDIRECT_RATE_OF_DIRECT_PROCESS_COST  
                    , IF( tb_1.IS_NEED_INDIRECT_COST_SALE_AVE , tb_2.INDIRECT_COST_SALE_AVE,NULL)                               AS INDIRECT_COST_SALE_AVE  
                    , IF( tb_1.IS_NEED_IMPORT_FEE , tb_2.IMPORT_FEE,NULL)                                                       AS IMPORT_FEE  
                    , IF( tb_1.IS_NEED_SELLING_EXPENSE , tb_2.SELLING_EXPENSE,NULL)                                             AS SELLING_EXPENSE
                    , IF( tb_1.IS_NEED_GA , tb_2.GA,NULL)                                                                       AS GA
                    , IF( tb_1.IS_NEED_MARGIN , tb_2.MARGIN , NULL)                                                             AS MARGIN
                    FROM         
                    COST_CONDITION_FOR_FISCAL_YEAR_ITEM_CATEGORY tb_1 
                        JOIN 
                    (               
                        SELECT 
                                    tb_1.DIRECT_UNIT_PROCESS_COST 
                                , tb_1.INDIRECT_RATE_OF_DIRECT_PROCESS_COST 
                                , IF( tb_2.INDIRECT_COST_SALE_AVE_PRODUCT_TYPE IS NULL , tb_1.INDIRECT_COST_SALE_AVE , tb_2.INDIRECT_COST_SALE_AVE_PRODUCT_TYPE ) AS INDIRECT_COST_SALE_AVE 
                                , tb_1.IMPORT_FEE 
                                , tb_1.SELLING_EXPENSE
                                , tb_1.GA
                                , tb_1.MARGIN  
                        FROM 
                                COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_MAIN tb_1 
                                    LEFT JOIN 
                                (
                                    SELECT
                                            tb_4.PRODUCT_MAIN_ID  
                                        , tb_1.INDIRECT_COST_SALE_AVE AS INDIRECT_COST_SALE_AVE_PRODUCT_TYPE
                                    FROM 
                                            COST_CONDITION_FOR_FISCAL_YEAR_REFER_TO_PRODUCT_TYPE tb_1  
                                                LEFT JOIN 
                                            PRODUCT_TYPE tb_2 
                                                ON  tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
                                                LEFT JOIN 
                                            PRODUCT_SUB tb_3 
                                                ON tb_2.PRODUCT_SUB_ID = tb_3.PRODUCT_SUB_ID 
                                                LEFT JOIN 
                                            PRODUCT_MAIN tb_4 
                                                ON tb_3.PRODUCT_MAIN_ID = tb_4.PRODUCT_MAIN_ID  
                                    WHERE 
                                                tb_1.PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'  
                                            AND tb_1.INUSE = 1  
                                            AND tb_1.FISCAL_YEAR ='dataItem.FISCAL_YEAR'
                                ) tb_2 
                                    ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                        WHERE 
                                    tb_1.PRODUCT_MAIN_ID  = 'dataItem.PRODUCT_MAIN_ID' 
                                AND tb_1.INUSE = 1  
                                AND tb_1.FISCAL_YEAR ='dataItem.FISCAL_YEAR'
                    ) tb_2
                    WHERE 
                        tb_1.INUSE = 1 
                    AND tb_1.MATERIAL_CATEGORY_ID ='dataItem.MATERIAL_CATEGORY_ID'     
                                                
                                            `;

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );

    return sql;
  };
}

module.exports = CostConditionForFiscalYearReferToProductMain_ProductTypeSQL;

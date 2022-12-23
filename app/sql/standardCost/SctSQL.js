// ** SQLFactory

// *** Declare Function SQL

class SctSQL {
  // *** Function Get
  static getSct = async (dataItem) => {
    let sql = `       SELECT
                            SCT_ID
                        , PRODUCT_TYPE_ID
                        , CUSTOMER_INVOICE_TO_ID
                        , SCT_PATTERN_ID
                        , MATERIAL_CATEGORY_ID
                        , PRODUCTION_PURPOSE_ID
                        , ORDER_TYPE_ID
                        , SCT_SUB_CODE_ID
                        , SCT_CODE
                        , FISCAL_YEAR
                        , REVISION
                        , DATE_FORMAT(EFFECTIVE_DATE, '%d-%b-%Y') AS EFFECTIVE_DATE
                        , DATE_FORMAT(EXPIRATION_DATE, '%d-%b-%Y') AS EXPIRATION_DATE
                        , DESCRIPTION
                        , CREATE_BY
                        , CREATE_DATE
                        , UPDATE_BY
                        , UPDATE_DATE
                        , INUSE
                        FROM 
                        SCT                    
                        WHERE 
                        SCT_ID = 'dataItem.SCT_ID'
                    `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };

  // *** Function Search
  static searchSct = async (dataItem, sqlWhere) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        SCT  tb_1
                            INNER JOIN
                        SCT_WORKING_PROGRESS  tb_2
                            ON  tb_1.SCT_ID =  tb_2.SCT_ID
                            INNER JOIN
                        CUSTOMER_INVOICE_TO  tb_3
                            ON  tb_1.CUSTOMER_INVOICE_TO_ID  =  tb_3.CUSTOMER_INVOICE_TO_ID
                            INNER JOIN
                        SCT_PATTERN  tb_4
                            ON  tb_1.SCT_PATTERN_ID =  tb_4.SCT_PATTERN_ID 
                            INNER JOIN
                        MATERIAL_CATEGORY  tb_5
                            ON  tb_1.MATERIAL_CATEGORY_ID = tb_5.MATERIAL_CATEGORY_ID 
                            INNER JOIN
                        PRODUCTION_PURPOSE  tb_6
                            ON  tb_1.PRODUCTION_PURPOSE_ID =  tb_6.PRODUCTION_PURPOSE_ID 
                            INNER JOIN
                        ORDER_TYPE  tb_7
                            ON  tb_1.ORDER_TYPE_ID =  tb_7.ORDER_TYPE_ID 
                            INNER JOIN
                        SCT_SUB_CODE  tb_8
                            ON  tb_1.SCT_SUB_CODE_ID =  tb_8.SCT_SUB_CODE_ID 
                            INNER JOIN
                        PRODUCT_TYPE  tb_9
                            ON  tb_1.PRODUCT_TYPE_ID =  tb_9.PRODUCT_TYPE_ID
                            INNER JOIN
                        PRODUCT_SUB  tb_10
                            ON  tb_9.PRODUCT_SUB_ID =  tb_10.PRODUCT_SUB_ID
                            INNER JOIN
                        PRODUCT_MAIN tb_11
                            ON  tb_10.PRODUCT_MAIN_ID =  tb_11.PRODUCT_MAIN_ID
                            INNER JOIN
                        PRODUCT_CATEGORY tb_12
                            ON  tb_11.PRODUCT_CATEGORY_ID =  tb_12.PRODUCT_CATEGORY_ID
                            LEFT JOIN
                        SCT_BOM tb_13
                            ON  (tb_1.SCT_ID =  tb_13.SCT_ID)                                  
                            LEFT join
                        BOM tb_14
                            on tb_13.BOM_ID = tb_14.BOM_ID 
                            LEFT join
                        FLOW tb_15
                            ON  tb_14.FLOW_ID = tb_15.FLOW_ID
                            LEFT join
                        SCT_COMPARE_PREVIOUS_CURRENT_YEAR tb_16
                            ON  tb_1.SCT_ID = tb_16.SCT_CURRENT_YEAR_ID
                            LEFT join
                        SCT_COMPARE_LAST_YEAR tb_17
                            ON  tb_1.SCT_ID = tb_17.SCT_CURRENT_YEAR_ID
                            LEFT join
                        SCT_TOTAL_COST tb_18
                            ON  tb_1.SCT_ID = tb_18.SCT_ID
                    WHERE 
                            tb_1.SCT_CODE LIKE '%dataItem.SCT_CODE%'
                        AND tb_1.FISCAL_YEAR LIKE '%dataItem.FISCAL_YEAR%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                        sqlWhere `;

    sql = sql.replaceAll("sqlWhere", sqlWhere);

    sql = sql.replaceAll("dataItem.SCT_CODE", dataItem["SCT_CODE"]);
    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.SCT_PATTERN_ID", dataItem["SCT_PATTERN_ID"]);
    sql = sql.replaceAll(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );
    sql = sql.replaceAll("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ID",
      dataItem["SCT_SUB_CODE_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );
    sql = sql.replaceAll("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.TOTAL_WORKING_PROGRESS_PERCENT",
      dataItem["TOTAL_WORKING_PROGRESS_PERCENT"]
    );
    sql = sql.replaceAll(
      "dataItem.EFFECTIVE_DATE_FOR_SEARCH_COMPARE_PREVIOUS_CURRENT_YEAR",
      dataItem["EFFECTIVE_DATE_FOR_SEARCH_COMPARE_PREVIOUS_CURRENT_YEAR"]
    );

    if (dataItem.hasOwnProperty("BOM_ID")) {
      sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);
    }

    sqlList.push(sql);

    sql = `
                            SELECT 
                            tb_1.SCT_ID
                        ,  tb_1.PRODUCT_TYPE_ID
                        ,  tb_1.CUSTOMER_INVOICE_TO_ID
                        ,  tb_1.SCT_PATTERN_ID
                        ,  tb_1.MATERIAL_CATEGORY_ID
                        ,  tb_1.PRODUCTION_PURPOSE_ID
                        ,  tb_1.ORDER_TYPE_ID
                        ,  tb_1.SCT_SUB_CODE_ID
                        ,  tb_1.SCT_CODE
                        ,  tb_1.FISCAL_YEAR
                        ,  tb_1.REVISION
                        ,  DATE_FORMAT( tb_1.EFFECTIVE_DATE, '%d-%b-%Y') AS EFFECTIVE_DATE
                        ,  DATE_FORMAT( tb_1.EXPIRATION_DATE, '%d-%b-%Y') AS EXPIRATION_DATE
                        ,  tb_1.EFFECTIVE_DATE AS EFFECTIVE_DATE_WITHOUT_FORMAT
                        ,  tb_1.EXPIRATION_DATE AS EXPIRATION_DATE_WITHOUT_FORMAT
                        ,  DATE_FORMAT( tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                        ,  tb_1.SCT_CODE_FOR_SUPPORT_MES
                        ,  tb_1.INUSE
                        ,  tb_2.TOTAL_WORKING_PROGRESS_PERCENT 
                            ,  tb_2.CURRENT_ASSIGN_STEP_NO
                        ,  tb_2.STEP_1_IS_COMPLETE_BY_PC
                        ,  tb_2.STEP_1_WORKING_PROGRESS_PERCENT_BY_PC
                        ,  tb_2.STEP_1_CREATE_BY
                        ,  tb_2.STEP_1_UPDATE_BY
                        ,  tb_2.STEP_2_IS_COMPLETE_BY_ENG
                        ,  tb_2.STEP_2_WORKING_PROGRESS_PERCENT_BY_ENG
                        ,  tb_2.STEP_2_CREATE_BY
                        ,  tb_2.STEP_2_UPDATE_BY
                        ,  tb_2.STEP_3_IS_COMPLETE_BY_MFG
                        ,  tb_2.STEP_3_WORKING_PROGRESS_PERCENT_BY_MFG
                        ,  tb_2.STEP_3_CREATE_BY
                        ,  tb_2.STEP_3_UPDATE_BY
                        ,  tb_2.STEP_4_IS_COMPLETE_BY_PC
                        ,  tb_2.STEP_4_WORKING_PROGRESS_PERCENT_BY_PC
                        ,  tb_2.STEP_4_CREATE_BY
                        ,  tb_2.STEP_4_UPDATE_BY
                        ,  tb_2.UPDATE_BY
                        ,  DATE_FORMAT( tb_2.UPDATE_DATE, '%d-%b-%Y %H:%i:%s' ) AS MODIFIED_DATE
                        ,  tb_3.CUSTOMER_INVOICE_TO_ALPHABET  
                        ,  tb_4.SCT_PATTERN_NAME 
                        ,  tb_5.MATERIAL_CATEGORY_NAME
                        ,  tb_5.MATERIAL_CATEGORY_ALPHABET
                        ,  tb_6.PRODUCTION_PURPOSE_NAME 
                        ,  tb_6.PRODUCTION_PURPOSE_ALPHABET 
                        ,  tb_7.ORDER_TYPE_NAME 
                        ,  tb_7.ORDER_TYPE_ALPHABET 
                        ,  tb_8.SCT_SUB_CODE_NAME 	
                        ,  tb_8.SCT_SUB_CODE_ALPHABET 	
                        ,  tb_9.PRODUCT_TYPE_NAME
                        ,  tb_10.PRODUCT_SUB_ID 
                        ,  tb_10.PRODUCT_SUB_NAME 
                        ,  tb_10.PRODUCT_SUB_ALPHABET 
                        ,  tb_11.PRODUCT_MAIN_ID 
                        ,  tb_11.PRODUCT_MAIN_NAME 
                        ,  tb_12.PRODUCT_CATEGORY_NAME 
                        ,  tb_14.BOM_ID
                        ,  tb_14.BOM_CODE
                        ,  tb_15.FLOW_ID
                        ,  tb_15.FLOW_CODE
                        ,  tb_15.TOTAL_COUNT_PROCESS
                        ,  tb_16.SCT_PREVIOUS_CURRENT_YEAR_ID
                        ,  tb_17.SCT_LAST_YEAR_ID
                        ,  tb_18.SELLING_PRICE
                        FROM 
                        SCT  tb_1
                            INNER JOIN
                        SCT_WORKING_PROGRESS  tb_2
                            ON  tb_1.SCT_ID =  tb_2.SCT_ID
                            INNER JOIN
                        CUSTOMER_INVOICE_TO  tb_3
                            ON  tb_1.CUSTOMER_INVOICE_TO_ID  =  tb_3.CUSTOMER_INVOICE_TO_ID
                            INNER JOIN
                        SCT_PATTERN  tb_4
                            ON  tb_1.SCT_PATTERN_ID =  tb_4.SCT_PATTERN_ID 
                            INNER JOIN
                        MATERIAL_CATEGORY  tb_5
                            ON  tb_1.MATERIAL_CATEGORY_ID = tb_5.MATERIAL_CATEGORY_ID 
                            INNER JOIN
                        PRODUCTION_PURPOSE  tb_6
                            ON  tb_1.PRODUCTION_PURPOSE_ID =  tb_6.PRODUCTION_PURPOSE_ID 
                            INNER JOIN
                        ORDER_TYPE  tb_7
                            ON  tb_1.ORDER_TYPE_ID =  tb_7.ORDER_TYPE_ID 
                            INNER JOIN
                        SCT_SUB_CODE  tb_8
                            ON  tb_1.SCT_SUB_CODE_ID =  tb_8.SCT_SUB_CODE_ID 
                            INNER JOIN
                        PRODUCT_TYPE  tb_9
                            ON  tb_1.PRODUCT_TYPE_ID =  tb_9.PRODUCT_TYPE_ID
                            INNER JOIN
                        PRODUCT_SUB  tb_10
                            ON  tb_9.PRODUCT_SUB_ID =  tb_10.PRODUCT_SUB_ID
                            INNER JOIN
                        PRODUCT_MAIN tb_11
                            ON  tb_10.PRODUCT_MAIN_ID =  tb_11.PRODUCT_MAIN_ID
                            INNER JOIN
                        PRODUCT_CATEGORY tb_12
                            ON  tb_11.PRODUCT_CATEGORY_ID =  tb_12.PRODUCT_CATEGORY_ID
                            LEFT JOIN
                        SCT_BOM tb_13
                            ON  (tb_1.SCT_ID =  tb_13.SCT_ID)                                  
                            LEFT join
                        BOM tb_14
                            on tb_13.BOM_ID = tb_14.BOM_ID 
                            LEFT join
                        FLOW tb_15
                            ON  tb_14.FLOW_ID = tb_15.FLOW_ID
                            LEFT join
                        SCT_COMPARE_PREVIOUS_CURRENT_YEAR tb_16
                            ON  tb_1.SCT_ID = tb_16.SCT_CURRENT_YEAR_ID
                            LEFT join
                        SCT_COMPARE_LAST_YEAR tb_17
                            ON  tb_1.SCT_ID = tb_17.SCT_CURRENT_YEAR_ID
                            LEFT join
                        SCT_TOTAL_COST tb_18
                            ON  tb_1.SCT_ID = tb_18.SCT_ID
                        WHERE 
                            tb_1.SCT_CODE LIKE '%dataItem.SCT_CODE%'
                        AND tb_1.FISCAL_YEAR LIKE '%dataItem.FISCAL_YEAR%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                        sqlWhere

                        ORDER BY 
                        dataItem.Order
                        LIMIT 
                        dataItem.Start 
                        , dataItem.Limit
            `;

    sql = sql.replaceAll("sqlWhere", sqlWhere);

    sql = sql.replaceAll("dataItem.SCT_CODE", dataItem["SCT_CODE"]);
    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );
    sql = sql.replaceAll("dataItem.SCT_PATTERN_ID", dataItem["SCT_PATTERN_ID"]);
    sql = sql.replaceAll(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );
    sql = sql.replaceAll("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ID",
      dataItem["SCT_SUB_CODE_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );
    sql = sql.replaceAll("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.TOTAL_WORKING_PROGRESS_PERCENT",
      dataItem["TOTAL_WORKING_PROGRESS_PERCENT"]
    );
    sql = sql.replaceAll(
      "dataItem.EFFECTIVE_DATE_FOR_SEARCH_COMPARE_PREVIOUS_CURRENT_YEAR",
      dataItem["EFFECTIVE_DATE_FOR_SEARCH_COMPARE_PREVIOUS_CURRENT_YEAR"]
    );
    if (dataItem.hasOwnProperty("BOM_ID")) {
      sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);
    }

    sql = sql.replaceAll("dataItem.Order", dataItem["Order"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createSct = async (dataItem) => {
    let sql = `  
    INSERT INTO SCT
    (
          SCT_ID
        , SCT_CODE
        , PRODUCT_TYPE_ID
        , CUSTOMER_INVOICE_TO_ID
        , SCT_PATTERN_ID
        , MATERIAL_CATEGORY_ID
        , PRODUCTION_PURPOSE_ID
        , ORDER_TYPE_ID
        , SCT_SUB_CODE_ID                        
        , FISCAL_YEAR
        , REVISION
        , EFFECTIVE_DATE
        , EXPIRATION_DATE
        , SCT_CODE_FOR_SUPPORT_MES
        , ASSEMBLY_GROUP_FOR_SUPPORT_MES
        , CREATE_BY
        , UPDATE_DATE
        , UPDATE_BY
    )
        SELECT
              @sctId
            ,   
                       IF(COUNT(*) = 0 
                        , (                          
                            SELECT 
                                CONCAT('SCT-',tb_4.PRODUCT_MAIN_ALPHABET ,'dataItem.PRODUCT_SUB_ALPHABET' ,'-dataItem.FISCAL_YEAR','-','dataItem.SCT_PATTERN_NAME','-','dataItem.MATERIAL_CATEGORY_ALPHABET','dataItem.PRODUCTION_PURPOSE_ALPHABET' ,'dataItem.ORDER_TYPE_ALPHABET' ,'-', LPAD((COUNT(DISTINCT tb_4.PRODUCT_MAIN_ID) + 1), 4, 0),'-','dataItem.SCT_SUB_CODE_ALPHABET','01')
                            FROM
                                SCT tb_1
                                    INNER JOIN 
                                PRODUCT_TYPE tb_2
                                    ON tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
                                    INNER JOIN
                                PRODUCT_SUB tb_3
                                    ON tb_2.PRODUCT_SUB_ID = tb_3.PRODUCT_SUB_ID
                                    INNER JOIN
                                PRODUCT_MAIN tb_4
                                    ON tb_3.PRODUCT_MAIN_ID = tb_4.PRODUCT_MAIN_ID
                                WHERE
                                        tb_4.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                                    and tb_1.FISCAL_YEAR = 'dataItem.FISCAL_YEAR'
                                    and tb_1.SCT_PATTERN_ID = 'dataItem.SCT_PATTERN_ID'
                                    and tb_1.MATERIAL_CATEGORY_ID  = 'dataItem.MATERIAL_CATEGORY_ID'
                                    AND tb_1.PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'
                                    and tb_1.ORDER_TYPE_ID = 'dataItem.ORDER_TYPE_ID'
                        )
                            ,
                            CONCAT(SUBSTRING(SCT_CODE,1,26),'dataItem.SCT_SUB_CODE_ALPHABET',LPAD(COUNT(*) + 1, 2, 0)))
                , 'dataItem.PRODUCT_TYPE_ID'
                , 'dataItem.CUSTOMER_INVOICE_TO_ID'
                , 'dataItem.SCT_PATTERN_ID'
                , 'dataItem.MATERIAL_CATEGORY_ID'
                , 'dataItem.PRODUCTION_PURPOSE_ID'
                , 'dataItem.ORDER_TYPE_ID'
                , 'dataItem.SCT_SUB_CODE_ID'
                , 'dataItem.FISCAL_YEAR'
                , LPAD(COUNT(1) + 1, 2, 0) AS REVISION
                , 'dataItem.EFFECTIVE_DATE'
                , 'dataItem.EXPIRATION_DATE'
                , 'dataItem.SCT_CODE_FOR_SUPPORT_MES'
                ,  (    
                   
                        SELECT 
                                CONCAT(PRODUCT_MAIN_ALPHABET ,'dataItem.PRODUCT_SUB_ALPHABET','dataItem.MATERIAL_CATEGORY_ALPHABET','1')
                        FROM
                                PRODUCT_MAIN
                        WHERE
                                PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'

                   )
                , 'dataItem.CREATE_BY'
                ,  CURRENT_TIMESTAMP()
                , 'dataItem.CREATE_BY'
        FROM 
                SCT
        WHERE
                    PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'
                and FISCAL_YEAR = 'dataItem.FISCAL_YEAR'
                and SCT_PATTERN_ID = 'dataItem.SCT_PATTERN_ID'
                and MATERIAL_CATEGORY_ID  = 'dataItem.MATERIAL_CATEGORY_ID'
                AND PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'
                and ORDER_TYPE_ID = 'dataItem.ORDER_TYPE_ID'      ; 
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.SCT_CODE_FOR_SUPPORT_MES",
      dataItem["SCT_CODE_FOR_SUPPORT_MES"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_TYPE_ID",
      dataItem["PRODUCT_TYPE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );

    sql = sql.replaceAll(
      "dataItem.CUSTOMER_INVOICE_TO_ID",
      dataItem["CUSTOMER_INVOICE_TO_ID"]
    );

    sql = sql.replaceAll("dataItem.SCT_PATTERN_ID", dataItem["SCT_PATTERN_ID"]);
    sql = sql.replaceAll(
      "dataItem.SCT_PATTERN_NAME",
      dataItem["SCT_PATTERN_NAME"]
    );

    sql = sql.replaceAll(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_CATEGORY_ALPHABET",
      dataItem["MATERIAL_CATEGORY_ALPHABET"]
    );

    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
    );

    sql = sql.replaceAll("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);
    sql = sql.replaceAll(
      "dataItem.ORDER_TYPE_ALPHABET",
      dataItem["ORDER_TYPE_ALPHABET"]
    );

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ID",
      dataItem["SCT_SUB_CODE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ALPHABET",
      dataItem["SCT_SUB_CODE_ALPHABET"]
    );

    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll("dataItem.EFFECTIVE_DATE", dataItem["EFFECTIVE_DATE"]);
    sql = sql.replaceAll(
      "dataItem.EXPIRATION_DATE",
      dataItem["EXPIRATION_DATE"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateSctStep1 = async (dataItem) => {
    let sql = `     UPDATE 
                            SCT 
                        SET
                            EFFECTIVE_DATE = 'dataItem.EFFECTIVE_DATE'
                            , EXPIRATION_DATE = 'dataItem.EXPIRATION_DATE'
                            , SCT_CODE_FOR_SUPPORT_MES = 'dataItem.SCT_CODE_FOR_SUPPORT_MES'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            SCT_ID = 'dataItem.SCT_ID' ;
                      `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.EFFECTIVE_DATE", dataItem["EFFECTIVE_DATE"]);
    sql = sql.replaceAll(
      "dataItem.SCT_CODE_FOR_SUPPORT_MES",
      dataItem["SCT_CODE_FOR_SUPPORT_MES"]
    );
    sql = sql.replaceAll(
      "dataItem.EXPIRATION_DATE",
      dataItem["EXPIRATION_DATE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteSct = async (dataItem) => {
    let sql = `    UPDATE
                        SCT
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        SCT_ID = 'dataItem.SCT_ID'
                      `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeSctNameAndInuse = async (dataItem) => {
    let sql = `            SELECT
                                SCT_ID
                            , SCT_NAME 
                            FROM
                            SCT                    
                            WHERE 
                                SCT_NAME LIKE '%dataItem.SCT_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            SCT_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replaceAll("dataItem.SCT_NAME", dataItem["SCT_NAME"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static CreateSctId = async () => {
    let sql = `    SET @sctId=(SELECT DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f'));
                                                `;
    return sql;
  };

  static CreateExistSctId = async (dataItem) => {
    let sql = ` SET @sctId=('dataItem.SCT_ID')  ;  `;
    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    return sql;
  };

  static GetDataExcel = async (dataItem) => {
    let sqlList = [];

    // ** Material Cost
    let sql = `   SELECT
                    tb_1.SCT_CODE,
                    tb_5.MATERIAL_INTERNAL_CODE,
                    tb_9.MATERIAL_CATEGORY_NAME,
                    tb_5.MATERIAL_INTERNAL_FULL_NAME,
                    tb_5.MATERIAL_INTERNAL_SHORT_NAME,
                    tb_4.USAGE_QUANTITY,
                    tb_12.SYMBOL,
                    tb_7.PRICE AS NEW_PRICE,
                    tb_15.PRICE AS OLD_PRICE,
                    (tb_7.PRICE - tb_15.PRICE) AS DIFF_PRICE,
                    tb_8.SCT_PROCESS_SEQUENCE_CODE,
                    tb_7.YIELD_ACCUMULATION AS NEW_YIELD_ACCUMULATION,
                    tb_15.YIELD_ACCUMULATION AS OLD_YIELD_ACCUMULATION,
                    tb_7.AMOUNT AS NEW_AMOUNT,
                    tb_15.AMOUNT AS OLD_AMOUNT,
                    (tb_7.AMOUNT - tb_15.AMOUNT) AS DIFF_AMOUNT,
                    tb_13.SCT_LAST_YEAR_ID
                FROM
                    sct tb_1
                INNER JOIN sct_bom tb_2 ON tb_1.SCT_ID = tb_2.SCT_ID
                INNER JOIN bom tb_3 ON tb_2.BOM_ID = tb_3.BOM_ID
                INNER JOIN bom_flow_process_material_usage tb_4 ON tb_3.BOM_ID = tb_4.BOM_ID
                INNER JOIN material tb_5 ON tb_4.MATERIAL_ID = tb_5.MATERIAL_ID
                INNER JOIN flow_process tb_6 ON tb_4.FLOW_PROCESS_ID = tb_6.FLOW_PROCESS_ID
                INNER JOIN sct_bom_flow_process_material_usage_price tb_7 ON (
                    tb_4.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID = tb_7.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                    AND tb_1.SCT_ID = tb_7.SCT_ID
                )
                INNER JOIN sct_flow_process_sequence tb_8 ON (
                    tb_1.SCT_ID = tb_8.SCT_ID
                    AND tb_6.FLOW_PROCESS_ID = tb_8.FLOW_PROCESS_ID
                )
                INNER JOIN material_category tb_9 ON tb_5.MATERIAL_CATEGORY_ID = tb_9.MATERIAL_CATEGORY_ID
                INNER JOIN material_type tb_10 ON tb_5.MATERIAL_TYPE_ID = tb_10.MATERIAL_TYPE_ID
                
                INNER JOIN unit_of_measurement tb_12 ON tb_5.USAGE_UNIT_ID = tb_12.UNIT_OF_MEASUREMENT_ID
                LEFT JOIN sct_compare_last_year tb_13 ON tb_1.SCT_ID = tb_13.SCT_CURRENT_YEAR_ID
                LEFT JOIN sct tb_14 ON tb_13.SCT_LAST_YEAR_ID = tb_14.SCT_ID
                LEFT JOIN sct_bom_flow_process_material_usage_price tb_15 ON (
                    tb_4.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID = tb_15.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                    AND tb_14.SCT_ID = tb_15.SCT_ID
                )
                WHERE
                    tb_1.SCT_ID = 'dataItem.SCT_ID'
                AND tb_4.INUSE = '1' `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem);

    sqlList.push(sql);

    // ** Standard Cost Field Cost

    sql = `  SELECT
                        tb_1.FISCAL_YEAR,
                        tb_1.SCT_CODE,
                        tb_1.SCT_CODE_FOR_SUPPORT_MES,
	                    tb_1.ASSEMBLY_GROUP_FOR_SUPPORT_MES,
                        tb_1.REVISION,
                        tb_2.PRODUCT_TYPE_NAME AS DESCRIPTION,
                        DATE_FORMAT(
                            tb_1.EFFECTIVE_DATE,
                            '%d-%b-%y'
                        ) AS FROM_DATE,
                        DATE_FORMAT(
                            tb_1.EXPIRATION_DATE,
                            '%d-%b-%y'
                        ) AS TO_DATE,
                        '' AS NO,
                        tb_2.PRODUCT_TYPE_NAME AS MAIN_PRODUCT_CODE,
                        tb_2.PRODUCT_TYPE_NAME AS TYPE,
                        tb_3.DIRECT_UNIT_PROCESS_COST,
                        tb_3.INDIRECT_RATE_OF_DIRECT_PROCESS_COST,
                        'FFT' AS DIREC_COST_CODE,
                        tb_3.TOTAL_PROCESSING_TIME,
                        tb_3.TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE,
                        tb_3.TOTAL_DIRECT_COST,
                        tb_3.DIRECT_PROCESS_COST,
                        tb_3.TOTAL_PRICE_OF_RAW_MATERIAL,
                        tb_3.TOTAL_PRICE_OF_SUB_ASSY,
                        tb_3.TOTAL_PRICE_OF_SEMI_FINISHED_GOODS,
                        tb_3.TOTAL_PRICE_OF_CONSUMABLE,
                        tb_3.TOTAL_PRICE_OF_PACKING,
                        tb_3.TOTAL_PRICE_OF_ALL_OF_MATERIALS,
                        tb_3.IMPORTED_FEE,
                        tb_3.IMPORTED_COST,
                        tb_3.INDIRECT_COST_SALE_AVE,
                        tb_3.TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST,
                        tb_6.FISCAL_YEAR AS OLD_FISCAL_YEAR,
                        tb_6.SCT_CODE AS OLD_SCT_CODE,
                        tb_6.SCT_CODE_FOR_SUPPORT_MES AS OLD_SCT_CODE_FOR_SUPPORT_MES,
                        tb_6.REVISION AS OLD_REVISION,
                        DATE_FORMAT(
                            tb_6.EFFECTIVE_DATE,
                            '%d-%b-%y'
                        ) AS OLD_FROM_DATE,
                        DATE_FORMAT(
                            tb_6.EXPIRATION_DATE,
                            '%d-%b-%y'
                        ) AS OLD_TO_DATE,
                        tb_5.DIRECT_UNIT_PROCESS_COST AS OLD_DIRECT_UNIT_PROCESS_COST,
                        tb_5.INDIRECT_RATE_OF_DIRECT_PROCESS_COST AS OLD_INDIRECT_RATE_OF_DIRECT_PROCESS_COST,
                        'FFT' AS OLD_DIREC_COST_CODE,
                        tb_5.TOTAL_PROCESSING_TIME AS OLD_TOTAL_PROCESSING_TIME,
                        tb_5.TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE AS OLD_TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE,
                        tb_5.TOTAL_DIRECT_COST AS OLD_TOTAL_DIRECT_COST,
                        tb_5.DIRECT_PROCESS_COST AS OLD_DIRECT_PROCESS_COST,
                        tb_5.TOTAL_PRICE_OF_RAW_MATERIAL AS OLD_TOTAL_PRICE_OF_RAW_MATERIAL,
                        tb_5.TOTAL_PRICE_OF_SUB_ASSY AS OLD_TOTAL_PRICE_OF_SUB_ASSY,
                        tb_5.TOTAL_PRICE_OF_SEMI_FINISHED_GOODS AS OLD_TOTAL_PRICE_OF_SEMI_FINISHED_GOODS,
                        tb_5.TOTAL_PRICE_OF_CONSUMABLE AS OLD_TOTAL_PRICE_OF_CONSUMABLE,
                        tb_5.TOTAL_PRICE_OF_PACKING AS OLD_TOTAL_PRICE_OF_PACKING,
                        tb_5.TOTAL_PRICE_OF_ALL_OF_MATERIALS AS OLD_TOTAL_PRICE_OF_ALL_OF_MATERIALS,
                        tb_5.IMPORTED_FEE AS OLD_IMPORTED_FEE,
                        tb_5.IMPORTED_COST AS OLD_IMPORTED_COST,
                        tb_5.TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST AS OLD_TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST
                    FROM
                        sct tb_1
                    INNER JOIN product_type tb_2 ON tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
                    INNER JOIN sct_total_cost tb_3 ON tb_1.SCT_ID = tb_3.SCT_ID
                    LEFT JOIN sct_compare_last_year tb_4 ON tb_1.SCT_ID = tb_4.SCT_CURRENT_YEAR_ID
                    LEFT JOIN sct_total_cost tb_5 ON tb_4.SCT_LAST_YEAR_ID = tb_5.SCT_ID
                    LEFT JOIN SCT tb_6 ON tb_4.SCT_LAST_YEAR_ID = tb_6.SCT_ID
                    WHERE
                        tb_1.SCT_ID = 'dataItem.SCT_ID'  `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem);

    sqlList.push(sql);

    // ** Processing Cost

    sql = `   SELECT
                    tb_2.OLD_SYSTEM_PROCESS_SEQUENCE_CODE,
                    tb_5.PROCESS_NAME,
                    tb_3.YIELD_RATE,
                    tb_3.YIELD_ACCUMULATION,
                    tb_6.CLEAR_TIME,
                    tb_3.GO_STRAIGHT_RATE,
                    tb_6.ESSENTIAL_TIME,
                    tb_6.PROCESS_STANDARD_TIME,
                    tb_6.NOTE,
                    tb_2.OLD_SYSTEM_COLLECTION_POINT
                    FROM
                    sct tb_1
                    INNER JOIN sct_flow_process_sequence tb_2 ON tb_1.SCT_ID = tb_2.SCT_ID
                    INNER JOIN sct_flow_process_processing_cost_by_engineer tb_3 ON tb_1.SCT_ID = tb_3.SCT_ID
                    AND tb_2.FLOW_PROCESS_ID = tb_3.FLOW_PROCESS_ID
                    INNER JOIN flow_process tb_4 ON tb_2.FLOW_PROCESS_ID = tb_4.FLOW_PROCESS_ID
                    INNER JOIN process tb_5 ON tb_4.PROCESS_ID = tb_5.PROCESS_ID
                    INNER JOIN sct_flow_process_processing_cost_by_mfg tb_6 ON tb_1.SCT_ID = tb_6.SCT_ID
                    AND tb_2.FLOW_PROCESS_ID = tb_6.FLOW_PROCESS_ID
                    WHERE
                    tb_1.SCT_ID = 'dataItem.SCT_ID' `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem);

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };
}

module.exports = SctSQL;

// ** SQLFactory

// *** Declare Function SQL
class CommonSQL {
  // ***  Function GetAll
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

  static GetYearNow = async () => {
    let sql = ` SELECT YEAR(NOW()) as YEAR_NOW  `;
    return sql;
  };

  static GetByLikeMonthShortNameEnglish = async (dataItem) => {
    let sql = `  SELECT
                        MONTH_ID
                    , MONTH_FULL_NAME_THAI
                    , MONTH_SHORT_NAME_THAI
                    , MONTH_FULL_NAME_ENGLISH
                    , MONTH_SHORT_NAME_ENGLISH
                    FROM
                    MONTH
                    WHERE 
                    MONTH_SHORT_NAME_ENGLISH LIKE '%dataItem.MONTH_SHORT_NAME_ENGLISH%' `;

    sql = sql.replaceAll(
      "dataItem.MONTH_SHORT_NAME_ENGLISH",
      dataItem["MONTH_SHORT_NAME_ENGLISH"]
    );

    return sql;
  };
}

module.exports = CommonSQL;

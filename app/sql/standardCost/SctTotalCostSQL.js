// ** SQLFactory

// *** Declare Function SQL

class SctTotalCostSQL {
  // *** Function Insert
  static createSctTotalCost = async (dataItem) => {
    let sql = `  
                    INSERT INTO SCT_TOTAL_COST
                    (
                        SCT_TOTAL_COST_ID
                        , SCT_ID
                        , DIRECT_UNIT_PROCESS_COST
                        , INDIRECT_RATE_OF_DIRECT_PROCESS_COST
                        , TOTAL_PROCESSING_TIME
                        , TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE
                        , TOTAL_DIRECT_COST
                        , DIRECT_PROCESS_COST
                        , IMPORTED_FEE
                        , IS_EDIT_IMPORTED_COST
                        , IMPORTED_COST
                        , TOTAL
                        , TOTAL_PRICE_OF_RAW_MATERIAL
                        , TOTAL_PRICE_OF_SUB_ASSY
                        , TOTAL_PRICE_OF_SEMI_FINISHED_GOODS
                        , TOTAL_PRICE_OF_CONSUMABLE
                        , TOTAL_PRICE_OF_PACKING
                        , TOTAL_PRICE_OF_ALL_OF_MATERIALS
                        , TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST
                        , RM_INCLUDE_IMPORTED_COST
                        , CONSUMABLE_PACKING
                        , MATERIALS_COST
                        , INDIRECT_COST_SALE_AVE
                        , SELLING_EXPENSE
                        , GA
                        , MARGIN
                        , EFFECTIVE_DATE
                        , TOTAL_YIELD
                        , TOTAL_CLEAR_TIME
                        , SELLING_PRICE_BY_FORMULA
                        , ADJUST_PRICE
                        , REMARK_FOR_ADJUST_PRICE
                        , SELLING_PRICE
                        , NOTE
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                        , 'dataItem.SCT_ID'
                        ,  dataItem.DIRECT_UNIT_PROCESS_COST
                        ,  dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST
                        , 'dataItem.TOTAL_PROCESSING_TIME'
                        , 'dataItem.TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE'
                        , 'dataItem.TOTAL_DIRECT_COST'
                        , 'dataItem.DIRECT_PROCESS_COST'
                        ,  dataItem.IMPORTED_FEE
                        , 'dataItem.IS_EDIT_IMPORTED_COST'
                        , 'dataItem.IMPORTED_COST'
                        , 'dataItem.TOTAL'
                        , 'dataItem.TOTAL_PRICE_OF_RAW_MATERIAL'
                        , 'dataItem.TOTAL_PRICE_OF_SUB_ASSY'
                        , 'dataItem.TOTAL_PRICE_OF_SEMI_FINISHED_GOODS'
                        , 'dataItem.TOTAL_PRICE_OF_CONSUMABLE'
                        , 'dataItem.TOTAL_PRICE_OF_PACKING'
                        , 'dataItem.TOTAL_PRICE_OF_ALL_OF_MATERIALS'
                        , 'dataItem.TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST'
                        , 'dataItem.RM_INCLUDE_IMPORTED_COST'
                        , 'dataItem.CONSUMABLE_PACKING'
                        , 'dataItem.MATERIALS_COST'
                        ,  dataItem.INDIRECT_COST_SALE_AVE
                        ,  dataItem.SELLING_EXPENSE
                        ,  dataItem.GA
                        ,  dataItem.MARGIN
                        , 'dataItem.EFFECTIVE_DATE'
                        , 'dataItem.TOTAL_YIELD'
                        , 'dataItem.TOTAL_CLEAR_TIME'
                        , 'dataItem.SELLING_PRICE_BY_FORMULA'
                        ,  dataItem.ADJUST_PRICE
                        ,  dataItem.REMARK_FOR_ADJUST_PRICE
                        , 'dataItem.SELLING_PRICE'
                        ,  dataItem.NOTE          
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'  
                    )
                                    
                                `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE",
      dataItem["TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE"]
    );

    sql = sql.replaceAll(
      "dataItem.DIRECT_UNIT_PROCESS_COST",
      dataItem["DIRECT_UNIT_PROCESS_COST"] != ""
        ? dataItem["DIRECT_UNIT_PROCESS_COST"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.INDIRECT_RATE_OF_DIRECT_PROCESS_COST",
      dataItem["INDIRECT_RATE_OF_DIRECT_PROCESS_COST"] != ""
        ? dataItem["INDIRECT_RATE_OF_DIRECT_PROCESS_COST"]
        : "NULL"
    );

    sql = sql.replaceAll(
      "dataItem.TOTAL_DIRECT_COST",
      dataItem["TOTAL_DIRECT_COST"]
    );

    sql = sql.replaceAll(
      "dataItem.IMPORTED_FEE",
      dataItem["IMPORTED_FEE"] != "" ? dataItem["IMPORTED_FEE"] : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.IS_EDIT_IMPORTED_COST",
      dataItem["IS_EDIT_IMPORTED_COST"]
    );
    sql = sql.replaceAll("dataItem.IMPORTED_COST", dataItem["IMPORTED_COST"]);
    sql = sql.replaceAll(
      "dataItem.TOTAL_PRICE_OF_RAW_MATERIAL",
      dataItem["TOTAL_PRICE_OF_RAW_MATERIAL"]
    );
    sql = sql.replaceAll(
      "dataItem.TOTAL_PRICE_OF_SUB_ASSY",
      dataItem["TOTAL_PRICE_OF_SUB_ASSY"]
    );
    sql = sql.replaceAll(
      "dataItem.TOTAL_PRICE_OF_SEMI_FINISHED_GOODS",
      dataItem["TOTAL_PRICE_OF_SEMI_FINISHED_GOODS"]
    );
    sql = sql.replaceAll(
      "dataItem.TOTAL_PRICE_OF_CONSUMABLE",
      dataItem["TOTAL_PRICE_OF_CONSUMABLE"]
    );
    sql = sql.replaceAll(
      "dataItem.TOTAL_PRICE_OF_PACKING",
      dataItem["TOTAL_PRICE_OF_PACKING"]
    );

    sql = sql.replaceAll(
      "dataItem.TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST",
      dataItem["TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST"]
    );
    sql = sql.replaceAll(
      "dataItem.RM_INCLUDE_IMPORTED_COST",
      dataItem["RM_INCLUDE_IMPORTED_COST"]
    );
    sql = sql.replaceAll(
      "dataItem.CONSUMABLE_PACKING",
      dataItem["CONSUMABLE_PACKING"]
    );
    sql = sql.replaceAll("dataItem.MATERIALS_COST", dataItem["MATERIALS_COST"]);
    sql = sql.replaceAll(
      "dataItem.INDIRECT_COST_SALE_AVE",
      dataItem["INDIRECT_COST_SALE_AVE"] != ""
        ? dataItem["INDIRECT_COST_SALE_AVE"]
        : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.SELLING_EXPENSE",
      dataItem["SELLING_EXPENSE"] != "" ? dataItem["SELLING_EXPENSE"] : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.GA",
      dataItem["GA"] != "" ? dataItem["GA"] : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.MARGIN",
      dataItem["MARGIN"] != "" ? dataItem["MARGIN"] : "NULL"
    );
    sql = sql.replaceAll("dataItem.EFFECTIVE_DATE", dataItem["EFFECTIVE_DATE"]);
    sql = sql.replaceAll("dataItem.TOTAL_YIELD", dataItem["TOTAL_YIELD"]);
    sql = sql.replaceAll(
      "dataItem.TOTAL_CLEAR_TIME",
      dataItem["TOTAL_CLEAR_TIME"]
    );
    sql = sql.replaceAll(
      "dataItem.SELLING_PRICE_BY_FORMULA",
      dataItem["SELLING_PRICE_BY_FORMULA"]
    );
    sql = sql.replaceAll(
      "dataItem.ADJUST_PRICE",
      dataItem["ADJUST_PRICE"] != "" ? dataItem["ADJUST_PRICE"] : "NULL"
    );
    sql = sql.replaceAll(
      "dataItem.REMARK_FOR_ADJUST_PRICE",
      "'" + dataItem["REMARK_FOR_ADJUST_PRICE"] + "'" != ""
        ? dataItem["REMARK_FOR_ADJUST_PRICE"]
        : "NULL"
    );
    sql = sql.replaceAll("dataItem.SELLING_PRICE", dataItem["SELLING_PRICE"]);
    sql = sql.replaceAll(
      "dataItem.NOTE",
      "'" + dataItem["NOTE"] + "'" != "" ? dataItem["NOTE"] : "NULL"
    );

    sql = sql.replaceAll(
      "dataItem.TOTAL_PRICE_OF_ALL_OF_MATERIALS",
      dataItem["TOTAL_PRICE_OF_ALL_OF_MATERIALS"]
    );

    sql = sql.replaceAll(
      "dataItem.TOTAL_PROCESSING_TIME",
      dataItem["TOTAL_PROCESSING_TIME"]
    );
    sql = sql.replaceAll(
      "dataItem.DIRECT_PROCESS_COST",
      dataItem["DIRECT_PROCESS_COST"]
    );
    sql = sql.replaceAll("dataItem.TOTAL", dataItem["TOTAL"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  static GetBySctId = async (dataItem) => {
    let sql = `   SELECT 
                        SCT_TOTAL_COST_ID
                    , SCT_ID
                    , DIRECT_UNIT_PROCESS_COST
                    , INDIRECT_RATE_OF_DIRECT_PROCESS_COST
                    , TOTAL_PROCESSING_TIME
                    , TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE
                    , TOTAL_DIRECT_COST
                    , DIRECT_PROCESS_COST
                    , IMPORTED_FEE
                    , IS_EDIT_IMPORTED_COST
                    , IMPORTED_COST
                    , TOTAL
                    , TOTAL_PRICE_OF_RAW_MATERIAL
                    , TOTAL_PRICE_OF_SUB_ASSY
                    , TOTAL_PRICE_OF_SEMI_FINISHED_GOODS
                    , TOTAL_PRICE_OF_CONSUMABLE
                    , TOTAL_PRICE_OF_PACKING
                    , TOTAL_PRICE_OF_ALL_OF_MATERIALS
                    , TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST
                    , RM_INCLUDE_IMPORTED_COST
                    , CONSUMABLE_PACKING
                    , MATERIALS_COST
                    , INDIRECT_COST_SALE_AVE
                    , SELLING_EXPENSE
                    , GA
                    , MARGIN
                    , DATE_FORMAT( EFFECTIVE_DATE, '%d-%b-%Y') AS EFFECTIVE_DATE
                    , TOTAL_YIELD
                    , TOTAL_CLEAR_TIME
                    , SELLING_PRICE_BY_FORMULA
                    , ADJUST_PRICE
                    , REMARK_FOR_ADJUST_PRICE
                    , SELLING_PRICE
                    , NOTE
                    , CREATE_BY
                    , UPDATE_DATE
                    , UPDATE_BY
                    FROM 
                    SCT_TOTAL_COST
                    WHERE 
                    SCT_ID ='dataItem.SCT_ID'
                        `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    return sql;
  };

  // *** Function Delete
  static DeleteBySctId = async (dataItem) => {
    let sql = `    DELETE FROM
                            SCT_TOTAL_COST
                        WHERE
                                SCT_ID = 'dataItem.SCT_ID'
                            AND INUSE = 1
                        `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = SctTotalCostSQL;

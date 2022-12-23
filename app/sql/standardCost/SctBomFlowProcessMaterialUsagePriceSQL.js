// ** SQLFactory

// *** Declare Function SQL

class SctBomFlowProcessMaterialUsagePriceSQL {
  // *** Function Insert
  static createSctBomFlowProcessMaterialUsagePrice = async (dataItem) => {
    let sql = `  
                    INSERT INTO SCT_BOM_FLOW_PROCESS_MATERIAL_USAGE_PRICE
                    (
                        SCT_BOM_FLOW_PROCESS_MATERIAL_USAGE_PRICE_ID
                        , SCT_ID
                        , BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                        , PRICE
                        , YIELD_ACCUMULATION
                        , AMOUNT
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                        , 'dataItem.SCT_ID'
                        , 'dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID'
                        , 'dataItem.PRICE'
                        , 'dataItem.YIELD_ACCUMULATION'
                        , 'dataItem.AMOUNT'          
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'  
                    ) ;
                                              
                                          `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID",
      dataItem["BOM_FLOW_PROCESS_MATERIAL_USAGE_ID"]
    );
    sql = sql.replaceAll("dataItem.PRICE", dataItem["PRICE"]);
    sql = sql.replaceAll(
      "dataItem.YIELD_ACCUMULATION",
      dataItem["YIELD_ACCUMULATION"]
    );
    sql = sql.replaceAll("dataItem.AMOUNT", dataItem["AMOUNT"]);

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static GetBySctId = async (dataItem) => {
    let sql = `     
                            SELECT 
                            tb_5.FLOW_PROCESS_ID 
                        , DATE_FORMAT( tb_1.EFFECTIVE_DATE, '%d-%b-%Y') AS EFFECTIVE_DATE
                        , tb_5.NO  AS PROCESS_NO
                        , tb_6.PROCESS_ID
                        , tb_6.PROCESS_NAME 
                        , tb_9.MATERIAL_ID 
                        , tb_9.MATERIAL_CATEGORY_ID 
                        , tb_8.PRICE 
                        , tb_7.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                        , tb_7.USAGE_QUANTITY 
                        , tb_7.NO 
                        , tb_8.YIELD_ACCUMULATION 
                        , tb_8.AMOUNT  
                        FROM 
                        SCT tb_1
                            INNER JOIN 
                        SCT_BOM tb_2 
                            ON tb_1.SCT_ID = tb_2.SCT_ID 
                            INNER JOIN 
                        BOM tb_3 
                            ON tb_2.BOM_ID = tb_3.BOM_ID 
                            INNER JOIN 
                        FLOW tb_4 
                            ON tb_3.FLOW_ID = tb_4.FLOW_ID 
                            INNER JOIN 
                        FLOW_PROCESS tb_5 
                            ON tb_4.FLOW_ID = tb_5.FLOW_ID  
                            INNER JOIN 
                        PROCESS tb_6 
                            ON tb_5.PROCESS_ID = tb_6.PROCESS_ID 
                            INNER JOIN 
                        bom_flow_process_material_usage tb_7
                            ON tb_3.BOM_ID = tb_7.BOM_ID AND tb_5.FLOW_PROCESS_ID = tb_7.FLOW_PROCESS_ID 
                            INNER JOIN 		                
                        SCT_BOM_FLOW_PROCESS_MATERIAL_USAGE_PRICE tb_8
                            ON  tb_7.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID  = tb_8.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID and tb_1.SCT_ID = tb_8.SCT_ID 
                            inner join 
                        material tb_9
                            ON tb_7.MATERIAL_ID = tb_9.MATERIAL_ID 
                        WHERE 
                            tb_2.INUSE = '1' 
                        AND tb_5.INUSE = '1' 
                        AND tb_7.INUSE = '1' 
                        AND tb_8.INUSE = '1' 
                        AND tb_1.SCT_ID = 'dataItem.SCT_ID'
                        ORDER BY 
                        tb_5.NO
                        , tb_7.NO  ;
                                  `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };

  static DeleteBySctId = async (dataItem) => {
    let sql = `     
                DELETE FROM
                SCT_BOM_FLOW_PROCESS_MATERIAL_USAGE_PRICE
            WHERE
                    SCT_ID = 'dataItem.SCT_ID'
                AND INUSE = 1
                                  `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = SctBomFlowProcessMaterialUsagePriceSQL;

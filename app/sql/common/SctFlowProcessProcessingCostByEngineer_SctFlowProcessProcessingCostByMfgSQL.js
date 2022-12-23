// ** SQLFactory

// *** Declare Function SQL

class SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgSQL {
  static GetBySctId = async (dataItem) => {
    let sql = `  
                        SELECT 
                        tb_5.FLOW_PROCESS_ID 
                        , tb_5.NO 
                        , tb_6.PROCESS_ID
                        , tb_6.PROCESS_NAME 
                        , tb_8.SCT_PROCESS_SEQUENCE_CODE
                        , tb_7.YIELD_RATE  
                        , tb_7.YIELD_ACCUMULATION  
                        , tb_9.CLEAR_TIME 
                        , tb_7.GO_STRAIGHT_RATE
                        , tb_9.ESSENTIAL_TIME 
                        , tb_9.PROCESS_STANDARD_TIME 
                        , tb_7.NOTE AS ENG_NOTE
                        , tb_9.NOTE AS MFG_NOTE
                        , tb_8.OLD_SYSTEM_PROCESS_SEQUENCE_CODE
                        , tb_8.OLD_SYSTEM_COLLECTION_POINT
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
                            LEFT JOIN 
                        SCT_FLOW_PROCESS_PROCESSING_COST_BY_ENGINEER tb_7 
                            ON ( tb_1.SCT_ID = tb_7.SCT_ID AND tb_5.FLOW_PROCESS_ID = tb_7.FLOW_PROCESS_ID  AND tb_7.INUSE = '1') 
                            LEFT JOIN
                        SCT_FLOW_PROCESS_SEQUENCE tb_8
                            ON ( tb_1.SCT_ID = tb_8.SCT_ID AND tb_7.FLOW_PROCESS_ID = tb_8.FLOW_PROCESS_ID )
                            LEFT JOIN
                        SCT_FLOW_PROCESS_PROCESSING_COST_BY_MFG tb_9 
                            ON ( tb_1.SCT_ID = tb_9.SCT_ID AND tb_5.FLOW_PROCESS_ID = tb_9.FLOW_PROCESS_ID AND tb_9.INUSE = '1') 
                        WHERE 
                            tb_2.INUSE = '1' 
                        AND tb_5.INUSE = '1' 
                        AND tb_8.INUSE = '1' 
                        AND tb_1.SCT_ID ='dataItem.SCT_ID'
                        ORDER BY 
                        tb_5.NO  `;

    sql = sql.replace("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports =
  SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgSQL;

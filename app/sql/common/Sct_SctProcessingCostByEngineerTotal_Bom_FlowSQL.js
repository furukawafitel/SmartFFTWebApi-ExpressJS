// ** SQLFactory

// *** Declare Function SQL

class Sct_SctProcessingCostByEngineerTotal_Bom_FlowSQL {
  static GetBySctId = async (dataItem) => {
    let sql = `  
                    SELECT 
                    tb_1.SCT_CODE 
                , DATE_FORMAT( tb_1.EFFECTIVE_DATE, '%d-%b-%Y') AS EFFECTIVE_DATE
                , tb_2.TOTAL_YIELD
                , tb_2.TOTAL_GO_STRAIGHT_RATE
                , tb_4.BOM_CODE 
                , tb_5.FLOW_CODE
                , tb_5.TOTAL_COUNT_PROCESS
                FROM 
                    SCT tb_1 
                        INNER JOIN 
                    SCT_PROCESSING_COST_BY_ENGINEER_TOTAL tb_2
                        ON tb_1.SCT_ID = tb_2.SCT_ID 
                        INNER JOIN 
                    SCT_BOM tb_3
                        ON tb_1.SCT_ID = tb_3.SCT_ID 
                        INNER JOIN
                    BOM tb_4 
                        ON tb_3.BOM_ID = tb_4.BOM_ID 
                        INNER JOIN 
                    FLOW tb_5 
                        ON tb_4.FLOW_ID  = tb_5.FLOW_ID 
                WHERE
                    tb_1.SCT_ID = 'dataItem.SCT_ID'  `;

    sql = sql.replace("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = Sct_SctProcessingCostByEngineerTotal_Bom_FlowSQL;

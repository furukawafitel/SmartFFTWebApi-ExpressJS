// ** SQLFactory

// *** Declare Function SQL

class SctFlowProcessProcessingCostByMfgSQL {
  // *** Function Insert
  static createSctFlowProcessProcessingCostByMfg = async (dataItem) => {
    let sql = `  
                            INSERT INTO SCT_FLOW_PROCESS_PROCESSING_COST_BY_MFG
                            (
                                SCT_FLOW_PROCESS_PROCESSING_COST_BY_MFG_ID
                                , SCT_ID
                                , FLOW_PROCESS_ID
                                , CLEAR_TIME
                                , ESSENTIAL_TIME
                                , PROCESS_STANDARD_TIME
                                , NOTE
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )
                            VALUES
                            (
                                DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                                , 'dataItem.SCT_ID'
                                , 'dataItem.FLOW_PROCESS_ID'
                                , 'dataItem.CLEAR_TIME'
                                , 'dataItem.ESSENTIAL_TIME'
                                , 'dataItem.PROCESS_STANDARD_TIME'
                                , 'dataItem.NOTE'                       
                                , 'dataItem.CREATE_BY'
                                , CURRENT_TIMESTAMP()
                                , 'dataItem.CREATE_BY'  
                            ) ;
                                            
                                        `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_ID",
      dataItem["FLOW_PROCESS_ID"]
    );

    sql = sql.replaceAll("dataItem.CLEAR_TIME", dataItem["CLEAR_TIME"]);
    sql = sql.replaceAll("dataItem.ESSENTIAL_TIME", dataItem["ESSENTIAL_TIME"]);
    sql = sql.replaceAll(
      "dataItem.PROCESS_STANDARD_TIME",
      dataItem["PROCESS_STANDARD_TIME"]
    );

    sql = sql.replaceAll("dataItem.NOTE", dataItem["NOTE"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static DeleteBySctId = async (dataItem) => {
    let sql = `     
                    DELETE FROM
                    SCT_FLOW_PROCESS_PROCESSING_COST_BY_MFG
                WHERE
                        SCT_ID = 'dataItem.SCT_ID'
                    AND INUSE = 1 ;
                                `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };

  static GetBySctId = async (dataItem) => {
    let sql = `     
                                    SELECT 
                                    tb_5.FLOW_PROCESS_ID 
                                , tb_5.NO
                                , tb_6.PROCESS_ID
                                , tb_6.PROCESS_NAME 
                                , tb_8.SCT_PROCESS_SEQUENCE_CODE
                                , tb_7.CLEAR_TIME
                                , tb_7.ESSENTIAL_TIME
                                , tb_7.PROCESS_STANDARD_TIME
                                , tb_7.NOTE  
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
                                    INNER JOIN 
                                SCT_FLOW_PROCESS_PROCESSING_COST_BY_MFG tb_7 
                                    ON ( tb_1.SCT_ID = tb_7.SCT_ID AND tb_5.FLOW_PROCESS_ID = tb_7.FLOW_PROCESS_ID ) 
                                    INNER JOIN
                                SCT_FLOW_PROCESS_SEQUENCE tb_8
                                    ON ( tb_1.SCT_ID = tb_8.SCT_ID AND tb_7.FLOW_PROCESS_ID = tb_8.FLOW_PROCESS_ID )
                                WHERE 
                                    tb_2.INUSE = '1' 
                                AND tb_5.INUSE = '1' 
                                AND tb_7.INUSE = '1' 
                                AND tb_8.INUSE = '1' 
                                AND tb_1.SCT_ID ='dataItem.SCT_ID'
                                ORDER BY 
                                tb_5.NO
                                `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = SctFlowProcessProcessingCostByMfgSQL;

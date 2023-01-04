// ** SQLFactory

// *** Declare Function SQL

class Flow_FlowProcessSQL {
  // *** Function Insert
  static GetByBomId = async (dataItem) => {
    let sql = `  
                              SELECT                                              
                              tb_5.PROCESS_ID 
                            , tb_3.NO AS PROCESS_NO
                            , tb_5.PROCESS_NAME 
                            , tb_3.FLOW_PROCESS_ID 
                            , tb_4.NO
                            , tb_4.MATERIAL_ID                                                                                                                                                  
                            , tb_6.MATERIAL_INTERNAL_CODE
                            , tb_6.MATERIAL_PURPOSE_ID 
                            , tb_4.USAGE_QUANTITY 
                            , tb_7.SYMBOL AS USAGE_UNIT_SYMBOL
                          FROM
                            BOM tb_1
                              INNER JOIN 
                            FLOW tb_2 
                              ON tb_1.FLOW_ID = tb_2.FLOW_ID
                              INNER JOIN 
                            FLOW_PROCESS tb_3 
                              ON tb_2.FLOW_ID = tb_3.FLOW_ID
                              INNER JOIN 
                            PROCESS tb_5 
                              ON tb_3.PROCESS_ID = tb_5.PROCESS_ID
                              LEFT JOIN 
                            BOM_FLOW_PROCESS_MATERIAL_USAGE tb_4 
                              ON tb_1.BOM_ID = tb_4.BOM_ID
                                  AND tb_3.FLOW_PROCESS_ID = tb_4.FLOW_PROCESS_ID
                                  AND tb_4.INUSE = '1'
                              LEFT JOIN 
                            MATERIAL tb_6 
                              ON tb_4.MATERIAL_ID = tb_6.MATERIAL_ID
                              LEFT JOIN 
                            UNIT_OF_MEASUREMENT tb_7 
                              ON tb_6.USAGE_UNIT_ID = tb_7.UNIT_OF_MEASUREMENT_ID
                          WHERE
                              tb_1.BOM_ID = 'dataItem.BOM_ID'
                            AND tb_3.INUSE = 1
                          ORDER BY
                              tb_3.NO
                            , tb_4.NO  `;

    sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);

    return sql;
  };
}

module.exports = Flow_FlowProcessSQL;

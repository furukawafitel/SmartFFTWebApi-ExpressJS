// ** SQLFactory

// *** Declare Function SQL

class SctFlowProcessSequenceSQL {
  // *** Function Insert
  static createSctFlowProcessSequence = async (dataItem) => {
    let sql = `  
                    INSERT INTO SCT_FLOW_PROCESS_SEQUENCE
                    (
                        SCT_ID
                        , FLOW_PROCESS_ID
                        , SCT_PROCESS_SEQUENCE_CODE
                        , OLD_SYSTEM_PROCESS_SEQUENCE_CODE
                        , OLD_SYSTEM_COLLECTION_POINT
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        
                        'dataItem.SCT_ID'
                        , 'dataItem.FLOW_PROCESS_ID'
                        , 'dataItem.SCT_PROCESS_SEQUENCE_CODE'
                        , 'dataItem.OLD_SYSTEM_PROCESS_SEQUENCE_CODE'
                        , 'dataItem.OLD_SYSTEM_COLLECTION_POINT'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                
                                          
                                      `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_ID",
      dataItem["FLOW_PROCESS_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_PROCESS_SEQUENCE_CODE",
      dataItem["SCT_PROCESS_SEQUENCE_CODE"]
    );
    sql = sql.replaceAll(
      "dataItem.OLD_SYSTEM_PROCESS_SEQUENCE_CODE",
      dataItem["OLD_SYSTEM_PROCESS_SEQUENCE_CODE"]
    );
    sql = sql.replaceAll(
      "dataItem.OLD_SYSTEM_COLLECTION_POINT",
      dataItem["OLD_SYSTEM_COLLECTION_POINT"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static DeleteBySctId = async (dataItem) => {
    let sql = `     
                    DELETE FROM
                    SCT_FLOW_PROCESS_SEQUENCE
                WHERE
                        SCT_ID = 'dataItem.SCT_ID'
                    AND INUSE = 1
                              `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = SctFlowProcessSequenceSQL;

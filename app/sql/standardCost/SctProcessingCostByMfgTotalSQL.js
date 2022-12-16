// ** SQLFactory

// *** Declare Function SQL

class SctProcessingCostByMfgTotalSQL {
  // *** Function Insert
  static createSctProcessingCostByMfgTotal = async (dataItem) => {
    let sql = `  
                    INSERT INTO SCT_PROCESSING_COST_BY_MFG_TOTAL
                    (
                        SCT_PROCESSING_COST_BY_MFG_TOTAL_ID
                        , SCT_ID
                        , TOTAL_CLEAR_TIME
                        , TOTAL_ESSENTIAL_TIME
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                        , 'dataItem.SCT_ID'
                        , 'dataItem.TOTAL_CLEAR_TIME'                
                        , 'dataItem.TOTAL_ESSENTIAL_TIME'                
                        , 'dataItem.CREATE_BY'
                        , CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'  
                    )
                       
                                  `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.TOTAL_CLEAR_TIME",
      dataItem["TOTAL_CLEAR_TIME"]
    );
    sql = sql.replaceAll(
      "dataItem.TOTAL_ESSENTIAL_TIME",
      dataItem["TOTAL_ESSENTIAL_TIME"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateSctProcessingCostByMfgTotal = async (dataItem) => {
    let sql = `     UPDATE 
                            SCT_SUB_CODE 
                        SET
                            SCT_SUB_CODE_NAME = 'dataItem.SCT_SUB_CODE_NAME'
                            , SCT_SUB_CODE_ALPHABET = 'dataItem.SCT_SUB_CODE_ALPHABET'
                            , CAN_INPUT_TO_PRODUCTION_LINE = 'dataItem.CAN_INPUT_TO_PRODUCTION_LINE'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            SCT_SUB_CODE_ID = 'dataItem.SCT_SUB_CODE_ID'
                          `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ID",
      dataItem["SCT_SUB_CODE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_NAME",
      dataItem["SCT_SUB_CODE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ALPHABET",
      dataItem["SCT_SUB_CODE_ALPHABET"]
    );
    sql = sql.replaceAll(
      "dataItem.CAN_INPUT_TO_PRODUCTION_LINE",
      dataItem["CAN_INPUT_TO_PRODUCTION_LINE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static DeleteBySctId = async (dataItem) => {
    let sql = `     DELETE FROM
                            SCT_PROCESSING_COST_BY_MFG_TOTAL
                        WHERE
                                SCT_ID = 'dataItem.SCT_ID'
                            AND INUSE = 1
                          `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };

  static GetBySctIdAndInuse = async (dataItem) => {
    let sql = `            	SELECT 
                                SCT_PROCESSING_COST_BY_MFG_TOTAL_ID
                            , SCT_ID
                            , TOTAL_CLEAR_TIME
                            , TOTAL_ESSENTIAL_TIME
                            FROM 
                            SCT_PROCESSING_COST_BY_MFG_TOTAL
                            WHERE 
                            INUSE LIKE '%dataItem.INUSE%' 
                            AND SCT_ID ='dataItem.SCT_ID'
                                                    `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = SctProcessingCostByMfgTotalSQL;

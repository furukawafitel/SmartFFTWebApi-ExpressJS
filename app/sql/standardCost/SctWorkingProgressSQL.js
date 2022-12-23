// ** SQLFactory

// *** Declare Function SQL

class SctWorkingProgressSQL {
  // *** Function Insert
  static createStep1 = async (dataItem) => {
    let sql = `  
                        INSERT INTO SCT_WORKING_PROGRESS
                        (
                            SCT_ID
                            , TOTAL_WORKING_PROGRESS_PERCENT
                            , CURRENT_ASSIGN_STEP_NO
                            , STEP_1_IS_COMPLETE_BY_PC
                            , STEP_1_WORKING_PROGRESS_PERCENT_BY_PC
                            , STEP_1_CREATE_BY
                            , STEP_1_UPDATE_BY
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                                @sctId
                            , 'dataItem.TOTAL_WORKING_PROGRESS_PERCENT'
                            , 'dataItem.CURRENT_ASSIGN_STEP_NO'
                            , 'dataItem.STEP_1_IS_COMPLETE_BY_PC'
                            , 'dataItem.STEP_1_WORKING_PROGRESS_PERCENT_BY_PC'
                            , 'dataItem.CREATE_BY'
                            , 'dataItem.CREATE_BY'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        ) ;
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.TOTAL_WORKING_PROGRESS_PERCENT",
      dataItem["TOTAL_WORKING_PROGRESS_PERCENT"]
    );
    sql = sql.replaceAll(
      "dataItem.CURRENT_ASSIGN_STEP_NO",
      dataItem["CURRENT_ASSIGN_STEP_NO"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_1_IS_COMPLETE_BY_PC",
      dataItem["STEP_1_IS_COMPLETE_BY_PC"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_1_WORKING_PROGRESS_PERCENT_BY_PC",
      dataItem["STEP_1_WORKING_PROGRESS_PERCENT_BY_PC"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static UpdateStep2 = async (dataItem) => {
    let sql = `    UPDATE 
                        SCT_WORKING_PROGRESS
                    SET
                        TOTAL_WORKING_PROGRESS_PERCENT = (TOTAL_WORKING_PROGRESS_PERCENT + dataItem.STEP_2_WORKING_PROGRESS_PERCENT_BY_ENG)
                    , CURRENT_ASSIGN_STEP_NO = 'dataItem.CURRENT_ASSIGN_STEP_NO'
                    , STEP_2_IS_COMPLETE_BY_ENG = 'dataItem.STEP_2_IS_COMPLETE_BY_ENG'
                    , STEP_2_WORKING_PROGRESS_PERCENT_BY_ENG = 'dataItem.STEP_2_WORKING_PROGRESS_PERCENT_BY_ENG'
                    , STEP_2_CREATE_BY = 'dataItem.CREATE_BY'
                    , STEP_2_UPDATE_BY = 'dataItem.CREATE_BY'
                    , UPDATE_BY = 'dataItem.CREATE_BY'
                    , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                    SCT_ID = 'dataItem.SCT_ID' ;
                      `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.CURRENT_ASSIGN_STEP_NO",
      dataItem["CURRENT_ASSIGN_STEP_NO"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_2_IS_COMPLETE_BY_ENG",
      dataItem["STEP_2_IS_COMPLETE_BY_ENG"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_2_WORKING_PROGRESS_PERCENT_BY_ENG",
      dataItem["STEP_2_WORKING_PROGRESS_PERCENT_BY_ENG"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  static UpdateStep3 = async (dataItem) => {
    let sql = `    UPDATE 
                            SCT_WORKING_PROGRESS
                        SET
                            TOTAL_WORKING_PROGRESS_PERCENT = (TOTAL_WORKING_PROGRESS_PERCENT + dataItem.STEP_3_WORKING_PROGRESS_PERCENT_BY_MFG)
                        , CURRENT_ASSIGN_STEP_NO = 'dataItem.CURRENT_ASSIGN_STEP_NO'
                        , STEP_3_IS_COMPLETE_BY_MFG = 'dataItem.STEP_3_IS_COMPLETE_BY_MFG'
                        , STEP_3_WORKING_PROGRESS_PERCENT_BY_MFG = 'dataItem.STEP_3_WORKING_PROGRESS_PERCENT_BY_MFG'
                        , STEP_3_CREATE_BY = 'dataItem.CREATE_BY'
                        , STEP_3_UPDATE_BY = 'dataItem.CREATE_BY'
                        , UPDATE_BY = 'dataItem.CREATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                        SCT_ID = 'dataItem.SCT_ID' ;
                      `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.CURRENT_ASSIGN_STEP_NO",
      dataItem["CURRENT_ASSIGN_STEP_NO"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_3_IS_COMPLETE_BY_MFG",
      dataItem["STEP_3_IS_COMPLETE_BY_MFG"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_3_WORKING_PROGRESS_PERCENT_BY_MFG",
      dataItem["STEP_3_WORKING_PROGRESS_PERCENT_BY_MFG"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  static UpdateStep4 = async (dataItem) => {
    let sql = `     UPDATE 
                            SCT_WORKING_PROGRESS
                        SET
                            TOTAL_WORKING_PROGRESS_PERCENT = (TOTAL_WORKING_PROGRESS_PERCENT + dataItem.STEP_4_WORKING_PROGRESS_PERCENT_BY_PC)
                        , CURRENT_ASSIGN_STEP_NO = 'dataItem.CURRENT_ASSIGN_STEP_NO'
                        , STEP_4_IS_COMPLETE_BY_PC = 'dataItem.STEP_4_IS_COMPLETE_BY_PC'
                        , STEP_4_WORKING_PROGRESS_PERCENT_BY_PC = 'dataItem.STEP_4_WORKING_PROGRESS_PERCENT_BY_PC'
                        , STEP_3_CREATE_BY = 'dataItem.CREATE_BY'
                        , STEP_3_UPDATE_BY = 'dataItem.CREATE_BY'
                        , UPDATE_BY = 'dataItem.CREATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                        SCT_ID = 'dataItem.SCT_ID' ;
                      `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll(
      "dataItem.CURRENT_ASSIGN_STEP_NO",
      dataItem["CURRENT_ASSIGN_STEP_NO"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_4_IS_COMPLETE_BY_PC",
      dataItem["STEP_4_IS_COMPLETE_BY_PC"]
    );
    sql = sql.replaceAll(
      "dataItem.STEP_4_WORKING_PROGRESS_PERCENT_BY_PC",
      dataItem["STEP_4_WORKING_PROGRESS_PERCENT_BY_PC"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  static UpdateUpdateByAndUpdateDate = async (dataItem) => {
    let sql = `    UPDATE 
                            SCT_WORKING_PROGRESS
                        SET
                            UPDATE_BY = 'dataItem.CREATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                        SCT_ID = 'dataItem.SCT_ID' ;
                      `;

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };

  // *** Function Delete
  static deleteSctWorkingProgress = async (dataItem) => {
    let sql = `   UPDATE
                        SCT_WORKING_PROGRESS
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
}

module.exports = SctWorkingProgressSQL;

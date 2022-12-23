// ** SQLFactory

// *** Declare Function SQL

class SctCompareLastYearSQL {
  // *** Function Insert
  static createSctCompareLastYear = async (dataItem) => {
    let sql = `  
                        INSERT INTO SCT_COMPARE_LAST_YEAR
                        (
                            SCT_COMPARE_LAST_YEAR_ID
                            , SCT_CURRENT_YEAR_ID
                            , SCT_LAST_YEAR_ID
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                            ,  @sctId
                            , 'dataItem.SCT_LAST_YEAR_ID'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )  ;           
                                              
                                          `;

    sql = sql.replaceAll(
      "dataItem.SCT_LAST_YEAR_ID",
      dataItem["SCT_LAST_YEAR_ID"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static DeleteBySctId = async (dataItem) => {
    let sql = `     
                        DELETE FROM
                        SCT_COMPARE_LAST_YEAR
                    WHERE
                            SCT_CURRENT_YEAR_ID = 'dataItem.SCT_ID'
                        AND INUSE = 1 ;
                                  `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = SctCompareLastYearSQL;

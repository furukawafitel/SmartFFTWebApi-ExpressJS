// ** SQLFactory

// *** Declare Function SQL

class SctProcessingCostByEngTotalSQL {
  // *** Function Insert
  static createSctProcessingCostByEngTotal = async (dataItem) => {
    let sql = `  
                    INSERT INTO SCT_PROCESSING_COST_BY_ENGINEER_TOTAL
                    (
                        SCT_PROCESSING_COST_BY_ENGINEER_TOTAL_ID
                        , SCT_ID
                        , TOTAL_YIELD
                        , TOTAL_GO_STRAIGHT_RATE
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                        , 'dataItem.SCT_ID'
                        , 'dataItem.TOTAL_YIELD'
                        , 'dataItem.TOTAL_GO_STRAIGHT_RATE'                    
                        , 'dataItem.CREATE_BY'
                        , CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'  
                    )
                                        
                                    `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.TOTAL_YIELD", dataItem["TOTAL_YIELD"]);
    sql = sql.replaceAll(
      "dataItem.TOTAL_GO_STRAIGHT_RATE",
      dataItem["TOTAL_GO_STRAIGHT_RATE"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  static GetBySctIdAndInuse = async (dataItem) => {
    let sql = `      SELECT        
                        SCT_PROCESSING_COST_BY_ENGINEER_TOTAL_ID
                    , SCT_ID
                    , TOTAL_YIELD
                    , TOTAL_GO_STRAIGHT_RATE
                    FROM 
                    SCT_PROCESSING_COST_BY_ENGINEER_TOTAL
                    WHERE 
                    INUSE LIKE '%dataItem.INUSE%' 
                    AND SCT_ID ='dataItem.SCT_ID'
                            `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  // *** Function Delete
  static DeleteBySctId = async (dataItem) => {
    let sql = `     
                DELETE FROM
                    SCT_PROCESSING_COST_BY_ENGINEER_TOTAL
                WHERE
                     SCT_ID = 'dataItem.SCT_ID'
                    AND INUSE = 1
                            `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = SctProcessingCostByEngTotalSQL;

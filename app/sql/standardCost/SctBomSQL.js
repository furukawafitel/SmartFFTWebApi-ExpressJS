// ** SQLFactory

// *** Declare Function SQL

class SctBomSQL {
  // *** Function Insert
  static createSctBom = async (dataItem) => {
    let sql = `  
                        INSERT INTO SCT_BOM
                        (
                            SCT_BOM_ID
                            , SCT_ID
                            , BOM_ID
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                            , 'dataItem.SCT_ID'
                            , 'dataItem.BOM_ID'             
                            , 'dataItem.CREATE_BY'
                            , CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )  ;
                                                
                                            `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static DeleteBySctId = async (dataItem) => {
    let sql = `     
                    DELETE FROM
                    SCT_BOM
                WHERE
                        SCT_ID = 'dataItem.SCT_ID'
                    AND INUSE = 1 ;
                                    `;
    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);

    return sql;
  };
}

module.exports = SctBomSQL;

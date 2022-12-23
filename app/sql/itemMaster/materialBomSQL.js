// ** SQLFactory

// *** Declare Function SQL

class MaterialBomSQL {
  // *** Function Insert
  static createMaterialBom = async (dataItem) => {
    let sql = `  
                        INSERT INTO MATERIAL_BOM
                        (
                            MATERIAL_BOM_ID
                            , MATERIAL_ID
                            , BOM_ID
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                            , 'dataItem.MATERIAL_ID'
                            , 'dataItem.BOM_ID'             
                            , 'dataItem.CREATE_BY'
                            , CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        ) ;
                       
                                  `;

    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  static InsertByMaterialIdGenKey = async (dataItem) => {
    let sql = `      INSERT INTO MATERIAL_BOM
                        (
                            MATERIAL_BOM_ID
                            , MATERIAL_ID
                            , BOM_ID
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                            ,  @materialId
                            , 'dataItem.BOM_ID'             
                            , 'dataItem.CREATE_BY'
                            , CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )   ;
                          `;

    sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  static DeleteByMaterialId = async (dataItem) => {
    let sql = `            DELETE FROM
                                MATERIAL_BOM
                            WHERE
                                    MATERIAL_ID = 'dataItem.MATERIAL_ID'
                                AND INUSE = 1     ;  
                                                    `;

    sql = sql.replace("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    return sql;
  };
}

module.exports = MaterialBomSQL;

// ** SQLFactory

// *** Declare Function SQL

class MaterialProductMainSQL {
  // *** Function Insert
  static createMaterialProductMain = async (dataItem) => {
    let sql = `  
                            INSERT INTO MATERIAL_PRODUCT_MAIN
                            (
                                MATERIAL_ID
                                , PRODUCT_MAIN_ID
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )
                            VALUES
                            (
                                'dataItem.MATERIAL_ID'
                                , 'dataItem.PRODUCT_MAIN_ID'
                                , 'dataItem.CREATE_BY'
                                ,  CURRENT_TIMESTAMP()
                                , 'dataItem.CREATE_BY'
                            )  ;                      
                     
                                `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteMaterialProductMain = async (dataItem) => {
    let sql = `    DELETE FROM
                            MATERIAL_PRODUCT_MAIN
                        WHERE
                                PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                            AND MATERIAL_ID = 'dataItem.MATERIAL_ID'
                        `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);

    return sql;
  };

  static InsertByMaterialIdGenKey = async (dataItem) => {
    let sql = `            INSERT INTO MATERIAL_PRODUCT_MAIN
                            (
                                MATERIAL_ID
                                , PRODUCT_MAIN_ID
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )
                            VALUES
                            (
                                @materialId
                                , 'dataItem.PRODUCT_MAIN_ID'
                                , 'dataItem.CREATE_BY'
                                ,  CURRENT_TIMESTAMP()
                                , 'dataItem.CREATE_BY'
                            )                 ;
                                                  `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_MAIN_ID",
      dataItem["PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  static DeleteByOldProductMainId = async (dataItem) => {
    let sql = `            DELETE FROM
                                    MATERIAL_PRODUCT_MAIN
                                WHERE
                                        PRODUCT_MAIN_ID = 'dataItem.OLD_PRODUCT_MAIN_ID'
                                    AND MATERIAL_ID = 'dataItem.MATERIAL_ID' ;
                                                  `;

    sql = sql.replaceAll(
      "dataItem.OLD_PRODUCT_MAIN_ID",
      dataItem["OLD_PRODUCT_MAIN_ID"]
    );
    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    return sql;
  };
}

module.exports = MaterialProductMainSQL;

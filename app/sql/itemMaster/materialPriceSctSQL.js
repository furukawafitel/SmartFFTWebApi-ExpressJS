// ** SQLFactory

// *** Declare Function SQL

class MaterialPriceSctSQL {
  // *** Function Insert
  static createMaterialPriceSct = async (dataItem) => {
    let sql = `  
    INSERT INTO MATERIAL_PRICE_SCT
    (
          MATERIAL_PRICE_SCT_ID
        , MATERIAL_PRICE_ID
        , SCT_ID
        , CREATE_BY
        , UPDATE_DATE
        , UPDATE_BY
    )
    VALUES
    (
           DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
        ,  @materialPriceId
        , 'dataItem.SCT_ID'             
        , 'dataItem.CREATE_BY'
        , CURRENT_TIMESTAMP()
        , 'dataItem.CREATE_BY'
    )             
                                      
                                `;

    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateMaterialPriceSct = async (dataItem) => {
    let sql = `    UPDATE 
                        MATERIAL_PRICE_SCT 
                    SET
                        SCT_ID = 'dataItem.SCT_ID'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MATERIAL_PRICE_ID = 'dataItem.MATERIAL_PRICE_ID'
                        `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRICE_ID",
      dataItem["MATERIAL_PRICE_ID"]
    );
    sql = sql.replaceAll("dataItem.SCT_ID", dataItem["SCT_ID"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };
}

module.exports = MaterialPriceSctSQL;

// ** SQLFactory

// *** Declare Function SQL

class MaterialCategorySQL {
  // *** Function Get
  static getMaterialCategory = async (dataItem) => {
    let sql = `      SELECT
                              MATERIAL_CATEGORY_ID
                          , MATERIAL_CATEGORY_NAME
                          , MATERIAL_CATEGORY_ALPHABET
                          , PURCHASE_MODULE_ID
                          , INUSE
                          FROM 
                          MATERIAL_CATEGORY                    
                          WHERE 
                          MATERIAL_CATEGORY_ID = 'dataItem.MATERIAL_CATEGORY_ID'
                      `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    return sql;
  };

  // *** Function Search
  static searchMaterialCategory = async (dataItem) => {
    let sqlList = [];

    let sql = `   SELECT 
                          COUNT(*) AS TOTAL_COUNT
                      FROM 
                          MATERIAL_CATEGORY
                      WHERE 
                              MATERIAL_CATEGORY_NAME LIKE '%dataItem.MATERIAL_CATEGORY_NAME%'
                          AND MATERIAL_CATEGORY_ALPHABET LIKE '%dataItem.MATERIAL_CATEGORY_ALPHABET%'
                          AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_NAME",
      dataItem["MATERIAL_CATEGORY_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ALPHABET",
      dataItem["MATERIAL_CATEGORY_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = ` SELECT 
                      tb_1.MATERIAL_CATEGORY_ID
                  , tb_1.MATERIAL_CATEGORY_NAME
                  , tb_1.MATERIAL_CATEGORY_ALPHABET
                  , tb_1.PURCHASE_MODULE_ID
                  , tb_2.PURCHASE_MODULE_NAME
                  , tb_1.UPDATE_BY
                  , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                  , tb_1.INUSE
                  FROM 
                  MATERIAL_CATEGORY tb_1
                      INNER JOIN
                  PURCHASE_MODULE tb_2
                      ON tb_1.PURCHASE_MODULE_ID = tb_2.PURCHASE_MODULE_ID
                  WHERE 
                      tb_1.MATERIAL_CATEGORY_NAME LIKE '%dataItem.MATERIAL_CATEGORY_NAME%'
                  AND tb_1.MATERIAL_CATEGORY_ALPHABET LIKE '%dataItem.MATERIAL_CATEGORY_ALPHABET%'
                  AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                  ORDER BY 
                  dataItem.Order
                  LIMIT 
                      dataItem.Start 
                  , dataItem.Limit
              `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_NAME",
      dataItem["MATERIAL_CATEGORY_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ALPHABET",
      dataItem["MATERIAL_CATEGORY_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createMaterialCategory = async (dataItem) => {
    let sql = `  
                      INSERT INTO MATERIAL_CATEGORY
                      (
                          MATERIAL_CATEGORY_NAME
                          , MATERIAL_CATEGORY_ALPHABET
                          , PURCHASE_MODULE_ID
                          , CREATE_BY
                          , UPDATE_DATE
                          , UPDATE_BY
                      )
                      VALUES
                      (
                          'dataItem.MATERIAL_CATEGORY_NAME'
                          , 'dataItem.MATERIAL_CATEGORY_ALPHABET'
                          , 'dataItem.PURCHASE_MODULE_ID'
                          , 'dataItem.CREATE_BY'
                          ,  CURRENT_TIMESTAMP()
                          , 'dataItem.CREATE_BY'
                      )                
                     
                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_NAME",
      dataItem["MATERIAL_CATEGORY_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ALPHABET",
      dataItem["MATERIAL_CATEGORY_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PURCHASE_MODULE_ID",
      dataItem["PURCHASE_MODULE_ID"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateMaterialCategory = async (dataItem) => {
    let sql = `    UPDATE 
                          MATERIAL_CATEGORY 
                      SET
                          MATERIAL_CATEGORY_NAME = 'dataItem.MATERIAL_CATEGORY_NAME'
                          , MATERIAL_CATEGORY_ALPHABET = 'dataItem.MATERIAL_CATEGORY_ALPHABET'
                          , PURCHASE_MODULE_ID = 'dataItem.PURCHASE_MODULE_ID'
                          , INUSE = 'dataItem.INUSE'
                          , UPDATE_BY = 'dataItem.UPDATE_BY'
                          , UPDATE_DATE = CURRENT_TIMESTAMP()
                      WHERE 
                          MATERIAL_CATEGORY_ID = 'dataItem.MATERIAL_CATEGORY_ID'
                        `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_NAME",
      dataItem["MATERIAL_CATEGORY_NAME"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ALPHABET",
      dataItem["MATERIAL_CATEGORY_ALPHABET"]
    );

    sql = sql.replace(
      "dataItem.PURCHASE_MODULE_ID",
      dataItem["PURCHASE_MODULE_ID"]
    );

    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteMaterialCategory = async (dataItem) => {
    let sql = `    UPDATE
                      MATERIAL_CATEGORY
                  SET
                      INUSE = '0'
                      , UPDATE_BY = 'dataItem.UPDATE_BY'
                      , UPDATE_DATE = CURRENT_TIMESTAMP()
                  WHERE
                      MATERIAL_CATEGORY_ID = 'dataItem.MATERIAL_CATEGORY_ID'
                        `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_ID",
      dataItem["MATERIAL_CATEGORY_ID"]
    );
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMaterialCategoryNameAndInuse = async (dataItem) => {
    let sql = `          SELECT
                                  MATERIAL_CATEGORY_ID
                              , MATERIAL_CATEGORY_NAME
                              , MATERIAL_CATEGORY_ALPHABET
                              , PURCHASE_MODULE_ID
                              FROM 
                              MATERIAL_CATEGORY        
                              WHERE 
                                  MATERIAL_CATEGORY_NAME LIKE '%dataItem.MATERIAL_CATEGORY_NAME%'
                              AND INUSE LIKE '%dataItem.INUSE%'
                              ORDER BY 
                              MATERIAL_CATEGORY_NAME
                              LIMIT 
                              50
                                                  `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_NAME",
      dataItem["MATERIAL_CATEGORY_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetForBomByLikeMaterialCategoryNameAndInuse = async (dataItem) => {
    let sql = `         SELECT
                                          MATERIAL_CATEGORY_ID
                                      , MATERIAL_CATEGORY_NAME
                                      , MATERIAL_CATEGORY_ALPHABET
                                      , PURCHASE_MODULE_ID
                                      FROM 
                                      MATERIAL_CATEGORY        
                                      WHERE 
                                          MATERIAL_CATEGORY_NAME LIKE '%dataItem.MATERIAL_CATEGORY_NAME%'
                                      AND MATERIAL_CATEGORY_ID != 1
                                      AND INUSE LIKE '%dataItem.INUSE%'
                                      ORDER BY 
                                      MATERIAL_CATEGORY_NAME
                                      LIMIT 
                                      50
                                                  `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_NAME",
      dataItem["MATERIAL_CATEGORY_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeMaterialCategoryNameAndPurchaseModuleIdAndInuse = async (
    dataItem
  ) => {
    let sql = `           SELECT
                              MATERIAL_CATEGORY_ID
                          , MATERIAL_CATEGORY_NAME
                          , MATERIAL_CATEGORY_ALPHABET
                          , PURCHASE_MODULE_ID
                          FROM 
                          MATERIAL_CATEGORY        
                          WHERE 
                              MATERIAL_CATEGORY_NAME LIKE '%dataItem.MATERIAL_CATEGORY_NAME%'
                          AND PURCHASE_MODULE_ID = 'dataItem.PURCHASE_MODULE_ID'
                          AND INUSE LIKE '%dataItem.INUSE%'
                          ORDER BY 
                          MATERIAL_CATEGORY_NAME
                          LIMIT 
                          50
                                                  `;

    sql = sql.replace(
      "dataItem.MATERIAL_CATEGORY_NAME",
      dataItem["MATERIAL_CATEGORY_NAME"]
    );
    sql = sql.replace(
      "dataItem.PURCHASE_MODULE_ID",
      dataItem["PURCHASE_MODULE_ID"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetMaterialCategoryCanBeSoldByLikeMaterialCategoryNameAndInuse =
    async (dataItem) => {
      let sql = `         SELECT
                              MATERIAL_CATEGORY_ID
                              , MATERIAL_CATEGORY_NAME
                              , MATERIAL_CATEGORY_ALPHABET
                              , PURCHASE_MODULE_ID
                          FROM 
                              MATERIAL_CATEGORY        
                          WHERE 
                                  MATERIAL_CATEGORY_NAME LIKE '%dataItem.MATERIAL_CATEGORY_NAME%'
                              AND 
                                  (       PURCHASE_MODULE_ID = '1' 
                                      OR 
                                          PURCHASE_MODULE_ID = '2' 
                                  )
                              AND INUSE LIKE '%dataItem.INUSE%'
                          ORDER BY 
                              MATERIAL_CATEGORY_NAME
                          LIMIT 
                              50
                                                  `;

      sql = sql.replace(
        "dataItem.MATERIAL_CATEGORY_NAME",
        dataItem["MATERIAL_CATEGORY_NAME"]
      );
      sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
      return sql;
    };

  static GetAllByInuse = async (dataItem) => {
    let sql = `        SELECT
                          MATERIAL_CATEGORY_ID
                      , MATERIAL_CATEGORY_NAME
                      FROM 
                      MATERIAL_CATEGORY                    
                      WHERE 
                      INUSE = 'dataItem.INUSE'
                      ORDER BY
                      MATERIAL_CATEGORY_NAME
                                                  `;

    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = MaterialCategorySQL;

// ** SQLFactory

// *** Declare Function SQL

class MaterialTypeSQL {
  // *** Function Get
  static getMaterialType = async (dataItem) => {
    let sql = `      SELECT
                            MATERIAL_TYPE_ID
                        , MATERIAL_TYPE_NAME
                        , INUSE
                        FROM 
                        MATERIAL_TYPE                    
                        WHERE 
                        MATERIAL_TYPE_ID = 'dataItem.MATERIAL_TYPE_ID'
                    `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_ID",
      dataItem["MATERIAL_TYPE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchMaterialType = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        MATERIAL_TYPE
                    WHERE 
                            MATERIAL_TYPE_NAME LIKE '%dataItem.MATERIAL_TYPE_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_NAME",
      dataItem["MATERIAL_TYPE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `  SELECT 
                    MATERIAL_TYPE_ID
                , MATERIAL_TYPE_NAME
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
                FROM 
                MATERIAL_TYPE
                WHERE 
                    MATERIAL_TYPE_NAME LIKE '%dataItem.MATERIAL_TYPE_NAME%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_NAME",
      dataItem["MATERIAL_TYPE_NAME"]
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
  static createMaterialType = async (dataItem) => {
    let sql = `  
                            INSERT INTO MATERIAL_TYPE
                            (
                                MATERIAL_TYPE_ID
                                , MATERIAL_TYPE_NAME
                                , CREATE_BY
                                , UPDATE_DATE
                                , UPDATE_BY
                            )
                            VALUES
                            (
                                    DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                                , 'dataItem.MATERIAL_TYPE_NAME'
                                , 'dataItem.CREATE_BY'
                                ,  CURRENT_TIMESTAMP()
                                , 'dataItem.CREATE_BY'
                            )                              
                   
                              `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_NAME",
      dataItem["MATERIAL_TYPE_NAME"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateMaterialType = async (dataItem) => {
    let sql = `     UPDATE 
                        MATERIAL_TYPE 
                    SET
                        MATERIAL_TYPE_NAME = 'dataItem.MATERIAL_TYPE_NAME'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MATERIAL_TYPE_ID = 'dataItem.MATERIAL_TYPE_ID'
                      `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_ID",
      dataItem["MATERIAL_TYPE_ID"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_NAME",
      dataItem["MATERIAL_TYPE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteMaterialType = async (dataItem) => {
    let sql = `    UPDATE
                        MATERIAL_TYPE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        MATERIAL_TYPE_ID = 'dataItem.MATERIAL_TYPE_ID'
                      `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_ID",
      dataItem["MATERIAL_TYPE_ID"]
    );
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMaterialTypeName = async (dataItem) => {
    let sql = `             SELECT
                                MATERIAL_TYPE_ID
                            , MATERIAL_TYPE_NAME 
                            FROM
                            MATERIAL_TYPE                    
                            WHERE 
                                MATERIAL_TYPE_NAME LIKE '%dataItem.MATERIAL_TYPE_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            MATERIAL_TYPE_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_NAME",
      dataItem["MATERIAL_TYPE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };

  static GetByLikeMaterialTypeNameAndMaterialTypeCategoryId = async (
    dataItem
  ) => {
    let sql = `           SELECT
                                MATERIAL_TYPE_ID
                            , MATERIAL_TYPE_NAME 
                            FROM
                            MATERIAL_TYPE                    
                            WHERE 
                                MATERIAL_TYPE_NAME LIKE '%dataItem.MATERIAL_TYPE_NAME%'
                            AND MATERIAL_TYPE_CATEGORY_ID = 'dataItem.MATERIAL_TYPE_CATEGORY_ID'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            MATERIAL_TYPE_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_CATEGORY_ID",
      dataItem["MATERIAL_TYPE_CATEGORY_ID"]
    );

    sql = sql.replace(
      "dataItem.MATERIAL_TYPE_NAME",
      dataItem["MATERIAL_TYPE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };
}

module.exports = MaterialTypeSQL;

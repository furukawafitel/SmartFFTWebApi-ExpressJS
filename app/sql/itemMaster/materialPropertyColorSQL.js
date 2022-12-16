// ** SQLFactory

// *** Declare Function SQL

class MaterialPropertyColorSQL {
  // *** Function Get
  static getMaterialPropertyColor = async (dataItem) => {
    let sql = `       SELECT
                            MATERIAL_PROPERTY_COLOR_ID
                        , MATERIAL_PROPERTY_COLOR_NAME
                        , INUSE
                        FROM 
                        MATERIAL_PROPERTY_COLOR                    
                        WHERE 
                        MATERIAL_PROPERTY_COLOR_ID = 'dataItem.MATERIAL_PROPERTY_COLOR_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchMaterialPropertyColor = async (dataItem) => {
    let sqlList = [];

    let sql = `  SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        MATERIAL_PROPERTY_COLOR
                    WHERE 
                            MATERIAL_PROPERTY_COLOR_NAME LIKE '%dataItem.MATERIAL_PROPERTY_COLOR_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_NAME",
      dataItem["MATERIAL_PROPERTY_COLOR_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
            SELECT 
            MATERIAL_PROPERTY_COLOR_ID
        , MATERIAL_PROPERTY_COLOR_NAME
        , UPDATE_BY
        , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
        , INUSE
        FROM 
        MATERIAL_PROPERTY_COLOR
        WHERE 
            MATERIAL_PROPERTY_COLOR_NAME LIKE '%dataItem.MATERIAL_PROPERTY_COLOR_NAME%'
        AND INUSE LIKE '%dataItem.INUSE%'
        ORDER BY 
        dataItem.Order
        LIMIT 
            dataItem.Start 
        , dataItem.Limit
            `;

    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_NAME",
      dataItem["MATERIAL_PROPERTY_COLOR_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.Order", dataItem["Order"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createMaterialPropertyColor = async (dataItem) => {
    let sql = `  
                        INSERT INTO MATERIAL_PROPERTY_COLOR
                        (
                            MATERIAL_PROPERTY_COLOR_NAME
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            'dataItem.MATERIAL_PROPERTY_COLOR_NAME'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )         
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_NAME",
      dataItem["MATERIAL_PROPERTY_COLOR_NAME"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateMaterialPropertyColor = async (dataItem) => {
    let sql = `     UPDATE 
                        MATERIAL_PROPERTY_COLOR 
                    SET
                        MATERIAL_PROPERTY_COLOR_NAME = 'dataItem.MATERIAL_PROPERTY_COLOR_NAME'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MATERIAL_PROPERTY_COLOR_ID = 'dataItem.MATERIAL_PROPERTY_COLOR_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_NAME",
      dataItem["MATERIAL_PROPERTY_COLOR_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteMaterialPropertyColor = async (dataItem) => {
    let sql = `     UPDATE
                            MATERIAL_PROPERTY_COLOR
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            MATERIAL_PROPERTY_COLOR_ID = 'dataItem.MATERIAL_PROPERTY_COLOR_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_ID",
      dataItem["MATERIAL_PROPERTY_COLOR_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMaterialPropertyColorName = async (dataItem) => {
    let sql = `            SELECT
                                MATERIAL_PROPERTY_COLOR_ID
                            , MATERIAL_PROPERTY_COLOR_NAME 
                            FROM
                            MATERIAL_PROPERTY_COLOR                    
                            WHERE 
                                MATERIAL_PROPERTY_COLOR_NAME LIKE '%dataItem.MATERIAL_PROPERTY_COLOR_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            MATERIAL_PROPERTY_COLOR_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_COLOR_NAME",
      dataItem["MATERIAL_PROPERTY_COLOR_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = MaterialPropertyColorSQL;

// ** SQLFactory

// *** Declare Function SQL

class MaterialPropertyMadeBySQL {
  // *** Function Get
  static getMaterialPropertyMadeBy = async (dataItem) => {
    let sql = `     SELECT
                            MATERIAL_PROPERTY_MADE_BY_ID
                        , MATERIAL_PROPERTY_MADE_BY_NAME
                        , INUSE
                        FROM 
                        MATERIAL_PROPERTY_MADE_BY                    
                        WHERE 
                        MATERIAL_PROPERTY_MADE_BY_ID = 'dataItem.MATERIAL_PROPERTY_MADE_BY_ID'
                    `;

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchMaterialPropertyMadeBy = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        MATERIAL_PROPERTY_MADE_BY
                    WHERE 
                            MATERIAL_PROPERTY_MADE_BY_NAME LIKE '%dataItem.MATERIAL_PROPERTY_MADE_BY_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_NAME",
      dataItem["MATERIAL_PROPERTY_MADE_BY_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    MATERIAL_PROPERTY_MADE_BY_ID
                , MATERIAL_PROPERTY_MADE_BY_NAME
                , UPDATE_BY
                , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , INUSE
                FROM 
                MATERIAL_PROPERTY_MADE_BY
                WHERE 
                    MATERIAL_PROPERTY_MADE_BY_NAME LIKE '%dataItem.MATERIAL_PROPERTY_MADE_BY_NAME%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_NAME",
      dataItem["MATERIAL_PROPERTY_MADE_BY_NAME"]
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
  static createMaterialPropertyMadeBy = async (dataItem) => {
    let sql = `  
                INSERT INTO MATERIAL_PROPERTY_MADE_BY
                (
                    MATERIAL_PROPERTY_MADE_BY_NAME
                    , CREATE_BY
                    , UPDATE_DATE
                    , UPDATE_BY
                )
                VALUES
                (
                    'dataItem.MATERIAL_PROPERTY_MADE_BY_NAME'
                    , 'dataItem.CREATE_BY'
                    ,  CURRENT_TIMESTAMP()
                    , 'dataItem.CREATE_BY'
                )                
                   
                              `;

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_NAME",
      dataItem["MATERIAL_PROPERTY_MADE_BY_NAME"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateMaterialPropertyMadeBy = async (dataItem) => {
    let sql = `   UPDATE 
                        MATERIAL_PROPERTY_MADE_BY 
                    SET
                        MATERIAL_PROPERTY_MADE_BY_NAME = 'dataItem.MATERIAL_PROPERTY_MADE_BY_NAME'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MATERIAL_PROPERTY_MADE_BY_ID = 'dataItem.MATERIAL_PROPERTY_MADE_BY_ID'
                      `;

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
    );
    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_NAME",
      dataItem["MATERIAL_PROPERTY_MADE_BY_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteMaterialPropertyMadeBy = async (dataItem) => {
    let sql = `      UPDATE
                            MATERIAL_PROPERTY_MADE_BY
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            MATERIAL_PROPERTY_MADE_BY_ID = 'dataItem.MATERIAL_PROPERTY_MADE_BY_ID'
                      `;

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_ID",
      dataItem["MATERIAL_PROPERTY_MADE_BY_ID"]
    );
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMaterialPropertyMadeByName = async (dataItem) => {
    let sql = `           SELECT
                            MATERIAL_PROPERTY_MADE_BY_ID
                        , MATERIAL_PROPERTY_MADE_BY_NAME 
                        FROM
                        MATERIAL_PROPERTY_MADE_BY                    
                        WHERE 
                            MATERIAL_PROPERTY_MADE_BY_NAME LIKE '%dataItem.MATERIAL_PROPERTY_MADE_BY_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        MATERIAL_PROPERTY_MADE_BY_NAME
                        LIMIT 
                        50
                                                `;

    sql = sql.replace(
      "dataItem.MATERIAL_PROPERTY_MADE_BY_NAME",
      dataItem["MATERIAL_PROPERTY_MADE_BY_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = MaterialPropertyMadeBySQL;

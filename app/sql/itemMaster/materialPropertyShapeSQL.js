// ** SQLFactory

// *** Declare Function SQL

class MaterialPropertyShapeSQL {
  // *** Function Get
  static getMaterialPropertyShape = async (dataItem) => {
    let sql = `     SELECT
                        MATERIAL_PROPERTY_SHAPE_ID
                    , MATERIAL_PROPERTY_SHAPE_NAME
                    , INUSE
                    FROM 
                    MATERIAL_PROPERTY_SHAPE                    
                    WHERE 
                    MATERIAL_PROPERTY_SHAPE_ID = 'dataItem.MATERIAL_PROPERTY_SHAPE_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchMaterialPropertyShape = async (dataItem) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        MATERIAL_PROPERTY_SHAPE
                    WHERE 
                            MATERIAL_PROPERTY_SHAPE_NAME LIKE '%dataItem.MATERIAL_PROPERTY_SHAPE_NAME%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_NAME",
      dataItem["MATERIAL_PROPERTY_SHAPE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                SELECT 
                MATERIAL_PROPERTY_SHAPE_ID
            , MATERIAL_PROPERTY_SHAPE_NAME
            , UPDATE_BY
            , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
            , INUSE
            FROM 
            MATERIAL_PROPERTY_SHAPE
            WHERE 
                MATERIAL_PROPERTY_SHAPE_NAME LIKE '%dataItem.MATERIAL_PROPERTY_SHAPE_NAME%'
            AND INUSE LIKE '%dataItem.INUSE%'
            ORDER BY 
            dataItem.Order
            LIMIT 
                dataItem.Start 
            , dataItem.Limit
            `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_NAME",
      dataItem["MATERIAL_PROPERTY_SHAPE_NAME"]
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
  static createMaterialPropertyShape = async (dataItem) => {
    let sql = `  
                        INSERT INTO MATERIAL_PROPERTY_SHAPE
                        (
                            MATERIAL_PROPERTY_SHAPE_NAME
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            'dataItem.MATERIAL_PROPERTY_SHAPE_NAME'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )                
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_NAME",
      dataItem["MATERIAL_PROPERTY_SHAPE_NAME"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateMaterialPropertyShape = async (dataItem) => {
    let sql = `     UPDATE 
    MATERIAL_PROPERTY_SHAPE 
SET
      MATERIAL_PROPERTY_SHAPE_NAME = 'dataItem.MATERIAL_PROPERTY_SHAPE_NAME'
    , INUSE = 'dataItem.INUSE'
    , UPDATE_BY = 'dataItem.UPDATE_BY'
    , UPDATE_DATE = CURRENT_TIMESTAMP()
WHERE 
    MATERIAL_PROPERTY_SHAPE_ID = 'dataItem.MATERIAL_PROPERTY_SHAPE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_NAME",
      dataItem["MATERIAL_PROPERTY_SHAPE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteMaterialPropertyShape = async (dataItem) => {
    let sql = `    UPDATE
                        MATERIAL_PROPERTY_SHAPE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        MATERIAL_PROPERTY_SHAPE_ID = 'dataItem.MATERIAL_PROPERTY_SHAPE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_ID",
      dataItem["MATERIAL_PROPERTY_SHAPE_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMaterialPropertyShapeName = async (dataItem) => {
    let sql = `            SELECT
                                    MATERIAL_PROPERTY_SHAPE_ID
                                , MATERIAL_PROPERTY_SHAPE_NAME 
                                FROM
                                MATERIAL_PROPERTY_SHAPE                    
                                WHERE 
                                    MATERIAL_PROPERTY_SHAPE_NAME LIKE '%dataItem.MATERIAL_PROPERTY_SHAPE_NAME%'
                                AND INUSE LIKE '%dataItem.INUSE%'
                                ORDER BY 
                                MATERIAL_PROPERTY_SHAPE_NAME
                                LIMIT 
                                50
                                                `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PROPERTY_SHAPE_NAME",
      dataItem["MATERIAL_PROPERTY_SHAPE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = MaterialPropertyShapeSQL;

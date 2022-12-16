// ** SQLFactory

// *** Declare Function SQL

class MaterialPurposeSQL {
  // *** Function Get
  static getMaterialPurpose = async (dataItem) => {
    let sql = `       SELECT
                            MATERIAL_PURPOSE_ID
                        , MATERIAL_PURPOSE_NAME
                        , MATERIAL_PURPOSE_ALPHABET
                        , INUSE
                        FROM 
                        MATERIAL_PURPOSE                    
                        WHERE 
                        MATERIAL_PURPOSE_ID = 'dataItem.MATERIAL_PURPOSE_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_ID",
      dataItem["MATERIAL_PURPOSE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchMaterialPurpose = async (dataItem) => {
    let sqlList = [];

    let sql = `  SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        MATERIAL_PURPOSE
                    WHERE 
                            MATERIAL_PURPOSE_NAME LIKE '%dataItem.MATERIAL_PURPOSE_NAME%'
                        AND MATERIAL_PURPOSE_ALPHABET LIKE '%dataItem.MATERIAL_PURPOSE_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_NAME",
      dataItem["MATERIAL_PURPOSE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_ALPHABET",
      dataItem["MATERIAL_PURPOSE_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                        SELECT 
                        MATERIAL_PURPOSE_ID
                    , MATERIAL_PURPOSE_NAME
                    , MATERIAL_PURPOSE_ALPHABET
                    , UPDATE_BY
                    , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , INUSE
                    FROM 
                    MATERIAL_PURPOSE
                    WHERE 
                        MATERIAL_PURPOSE_NAME LIKE '%dataItem.MATERIAL_PURPOSE_NAME%'
                    AND MATERIAL_PURPOSE_ALPHABET LIKE '%dataItem.MATERIAL_PURPOSE_ALPHABET%'
                    AND INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    dataItem.Order
                    LIMIT 
                        dataItem.Start 
                    , dataItem.Limit
            `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_NAME",
      dataItem["MATERIAL_PURPOSE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_ALPHABET",
      dataItem["MATERIAL_PURPOSE_ALPHABET"]
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
  static createMaterialPurpose = async (dataItem) => {
    let sql = `  
                        INSERT INTO MATERIAL_PURPOSE
                        (
                            MATERIAL_PURPOSE_NAME
                            , MATERIAL_PURPOSE_ALPHABET
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        VALUES
                        (
                            'dataItem.MATERIAL_PURPOSE_NAME'
                            , 'dataItem.MATERIAL_PURPOSE_ALPHABET'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        )                
                   
                              `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_NAME",
      dataItem["MATERIAL_PURPOSE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_ALPHABET",
      dataItem["MATERIAL_PURPOSE_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateMaterialPurpose = async (dataItem) => {
    let sql = `    UPDATE 
                        MATERIAL_PURPOSE 
                    SET
                        MATERIAL_PURPOSE_NAME = 'dataItem.MATERIAL_PURPOSE_NAME'
                        , MATERIAL_PURPOSE_ALPHABET = 'dataItem.MATERIAL_PURPOSE_ALPHABET'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MATERIAL_PURPOSE_ID = 'dataItem.MATERIAL_PURPOSE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_ID",
      dataItem["MATERIAL_PURPOSE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_NAME",
      dataItem["MATERIAL_PURPOSE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_ALPHABET",
      dataItem["MATERIAL_PURPOSE_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteMaterialPurpose = async (dataItem) => {
    let sql = `    UPDATE
                        MATERIAL_PURPOSE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        MATERIAL_PURPOSE_ID = 'dataItem.MATERIAL_PURPOSE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_ID",
      dataItem["MATERIAL_PURPOSE_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeMaterialPurposeNameAndInuse = async (dataItem) => {
    let sql = `          SELECT
                                MATERIAL_PURPOSE_ID
                            , MATERIAL_PURPOSE_NAME 
                            FROM
                            MATERIAL_PURPOSE                    
                            WHERE 
                                MATERIAL_PURPOSE_NAME LIKE '%dataItem.MATERIAL_PURPOSE_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            MATERIAL_PURPOSE_NAME
                            LIMIT 
                            50
                                                `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PURPOSE_NAME",
      dataItem["MATERIAL_PURPOSE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = MaterialPurposeSQL;

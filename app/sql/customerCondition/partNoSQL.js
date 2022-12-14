// ** SQLFactory

// *** Declare Function SQL

class PartNoSQL {
  // *** Function Get
  static getPartNo = async (dataItem) => {
    let sql = `     SELECT
                        PART_NO_ID
                    , PART_NO_CODE
                    , INUSE
                    FROM 
                    PART_NO                    
                    WHERE 
                    PART_NO_ID = 'dataItem.PART_NO_ID'
                    `;

    sql = sql.replace("dataItem.PART_NO_ID", dataItem["PART_NO_ID"]);

    return sql;
  };

  // *** Function Search
  static searchPartNo = async (dataItem, sqlWhere) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        PART_NO tb_1
                    WHERE 
                            tb_1.PART_NO_CODE LIKE '%dataItem.PART_NO_CODE%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                        dataItem.sqlWhere  `;

    sql = sql.replace("dataItem.sqlWhere", sqlWhere);

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.PART_NO_CODE", dataItem["PART_NO_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                        SELECT 
                        tb_1.PART_NO_ID
                    , tb_1.PART_NO_CODE
                    , tb_1.PRODUCT_MAIN_ID 
                    , tb_2.PRODUCT_MAIN_NAME  
                    , tb_1.UPDATE_BY
                    , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , tb_1.INUSE
                    FROM 
                    PART_NO tb_1
                        INNER JOIN
                    PRODUCT_MAIN tb_2
                        ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                    WHERE 
                        tb_1.PART_NO_CODE LIKE '%dataItem.PART_NO_CODE%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                    dataItem.sqlWhere

                    ORDER BY 
                    dataItem.Order
                    LIMIT 
                        dataItem.Start 
                    , dataItem.Limit
            `;

    sql = sql.replace("dataItem.sqlWhere", sqlWhere);

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.PART_NO_CODE", dataItem["PART_NO_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createPartNo = async (dataItem) => {
    let sql = `  
                    INSERT INTO PART_NO
                    (
                        PART_NO_ID
                        , PART_NO_CODE
                        , PRODUCT_MAIN_ID
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
                        , 'dataItem.PART_NO_CODE'
                        , 'dataItem.PRODUCT_MAIN_ID'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                  
                   
                              `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.PART_NO_CODE", dataItem["PART_NO_CODE"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updatePartNo = async (dataItem) => {
    let sql = `     UPDATE 
                            PART_NO 
                        SET
                            PART_NO_CODE = 'dataItem.PART_NO_CODE'
                            , PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            PART_NO_ID = 'dataItem.PART_NO_ID'
                      `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.PART_NO_ID", dataItem["PART_NO_ID"]);
    sql = sql.replace("dataItem.PART_NO_CODE", dataItem["PART_NO_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deletePartNo = async (dataItem) => {
    let sql = `    UPDATE
                        PART_NO
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        PART_NO_ID = 'dataItem.PART_NO_ID'
                      `;

    sql = sql.replace("dataItem.PART_NO_ID", dataItem["PART_NO_ID"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikePartNoCodeAndInuse = async (dataItem) => {
    let sql = `           SELECT
                                PART_NO_ID
                            , PART_NO_CODE 
                            FROM
                            PART_NO                    
                            WHERE 
                                PART_NO_CODE LIKE '%dataItem.PART_NO_CODE%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            PART_NO_CODE ASC
                            LIMIT 
                            50
                                                `;

    sql = sql.replace("dataItem.PART_NO_CODE", dataItem["PART_NO_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikePartNoCodeAndProductMainIdAndInuse = async (dataItem) => {
    let sql = `             SELECT
                                    PART_NO_ID
                                , PART_NO_CODE 
                                FROM
                                PART_NO                    
                                WHERE 
                                    PART_NO_CODE LIKE '%dataItem.PART_NO_CODE%'
                                AND PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                                AND INUSE LIKE '%dataItem.INUSE%'
                                ORDER BY 
                                PART_NO_CODE ASC
                                LIMIT 
                                50
                                                `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.PART_NO_CODE", dataItem["PART_NO_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = PartNoSQL;

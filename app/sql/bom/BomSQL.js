// ** SQLFactory

// *** Declare Function SQL

class BomSQL {
  // *** Function Get
  static getBom = async (dataItem) => {
    let sql = `       SELECT
                            BOM_ID
                        , BOM_NAME
                        , BOM_CODE
                        , INUSE
                        FROM 
                        BOM                    
                        WHERE 
                        BOM_ID = 'dataItem.BOM_ID'
                    `;

    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);

    return sql;
  };

  // *** Function Search
  static searchBom = async (dataItem, sqlWhere) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM
                    BOM tb_1
                        INNER JOIN
                    PRODUCTION_PURPOSE tb_2
                        ON tb_1.PRODUCTION_PURPOSE_ID = tb_2.PRODUCTION_PURPOSE_ID
                        INNER JOIN
                    FLOW tb_3
                        ON tb_1.FLOW_ID = tb_3.FLOW_ID
                        INNER JOIN
                    PRODUCT_TYPE tb_4
                        ON tb_1.PRODUCT_TYPE_ID = tb_4.PRODUCT_TYPE_ID
                        INNER JOIN
                    PRODUCT_SUB tb_5
                        ON tb_4.PRODUCT_SUB_ID = tb_5.PRODUCT_SUB_ID 
                        INNER JOIN
                    PRODUCT_MAIN tb_6
                        ON tb_5.PRODUCT_MAIN_ID = tb_6.PRODUCT_MAIN_ID 
                        INNER JOIN
                    PRODUCT_CATEGORY tb_7
                        ON tb_6.PRODUCT_CATEGORY_ID = tb_7.PRODUCT_CATEGORY_ID 
                    WHERE 
                            tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
                        AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                        dataItem.sqlWhere `;

    sql = sql.replace("dataItem.sqlWhere", sqlWhere);

    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);

    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );

    sqlList.push(sql);

    sql = `
                        SELECT 
                        tb_1.BOM_ID
                    , tb_1.BOM_CODE
                    , tb_1.BOM_NAME                       
                    , tb_1.REVISION
                    , tb_1.PRODUCTION_PURPOSE_ID
                    , tb_2.PRODUCTION_PURPOSE_NAME
                    , tb_1.FLOW_ID
                    , tb_3.FLOW_CODE
                    , tb_3.FLOW_NAME    
                    , tb_3.TOTAL_COUNT_PROCESS
                    , tb_1.PRODUCT_TYPE_ID 
                    , tb_4.PRODUCT_TYPE_NAME    
                    , tb_5.PRODUCT_SUB_ID 
                    , tb_5.PRODUCT_SUB_NAME                       
                    , tb_6.PRODUCT_MAIN_ID 
                    , tb_6.PRODUCT_MAIN_NAME                          
                    , tb_7.PRODUCT_CATEGORY_ID 
                    , tb_7.PRODUCT_CATEGORY_NAME     
                    , tb_1.UPDATE_BY
                    , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , tb_1.INUSE
                    FROM
                    BOM tb_1
                        INNER JOIN
                    PRODUCTION_PURPOSE tb_2
                        ON tb_1.PRODUCTION_PURPOSE_ID = tb_2.PRODUCTION_PURPOSE_ID
                        INNER JOIN
                    FLOW tb_3
                        ON tb_1.FLOW_ID = tb_3.FLOW_ID
                        INNER JOIN
                    PRODUCT_TYPE tb_4
                        ON tb_1.PRODUCT_TYPE_ID = tb_4.PRODUCT_TYPE_ID
                        INNER JOIN
                    PRODUCT_SUB tb_5
                        ON tb_4.PRODUCT_SUB_ID = tb_5.PRODUCT_SUB_ID 
                        INNER JOIN
                    PRODUCT_MAIN tb_6
                        ON tb_5.PRODUCT_MAIN_ID = tb_6.PRODUCT_MAIN_ID 
                        INNER JOIN
                    PRODUCT_CATEGORY tb_7
                        ON tb_6.PRODUCT_CATEGORY_ID = tb_7.PRODUCT_CATEGORY_ID 
                    WHERE 
                        tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
                    AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                    dataItem.sqlWhere

                    ORDER BY 
                    dataItem.Order
                    LIMIT 
                    dataItem.Start, dataItem.Limit
              `;

    sql = sql.replace("dataItem.sqlWhere", sqlWhere);

    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);

    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
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
  static createBom = async (dataItem) => {
    let sql = `  
    INSERT INTO BOM
    (
          BOM_ID
        , BOM_NAME
        , BOM_CODE
        , PRODUCT_TYPE_ID
        , PRODUCTION_PURPOSE_ID
        , FLOW_ID
        , REVISION
        , CREATE_BY
        , UPDATE_DATE
        , UPDATE_BY
    )                   
            SELECT
                    @bomId
                 , 'dataItem.BOM_NAME'
                 ,      IF(COUNT(*) = 0 
                        , (                          
                            SELECT 
                                CONCAT('B',tb_5.PRODUCTION_PURPOSE_ALPHABET,'-',tb_4.PRODUCT_MAIN_ALPHABET,'-', LPAD((COUNT(DISTINCT tb_4.PRODUCT_MAIN_ID) + 1), 4, 0),'-','01')
                            FROM
                                BOM tb_1
                                    INNER JOIN 
                                PRODUCT_TYPE tb_2
                                    ON tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
                                    INNER JOIN
                                PRODUCT_SUB tb_3
                                    ON tb_2.PRODUCT_SUB_ID = tb_3.PRODUCT_SUB_ID
                                    INNER JOIN
                                PRODUCT_MAIN tb_4
                                    ON tb_3.PRODUCT_MAIN_ID = tb_4.PRODUCT_MAIN_ID
                                    INNER JOIN
                                PRODUCTION_PURPOSE tb_5
                                    ON tb_1.PRODUCTION_PURPOSE_ID = tb_5.PRODUCTION_PURPOSE_ID
                                WHERE
                                        tb_4.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                                    AND tb_1.PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID'
                        )
                        ,
                        CONCAT(SUBSTRING(BOM_CODE,1,11),LPAD(COUNT(*) + 1, 2, 0)))
                 , 'dataItem.PRODUCT_TYPE_ID'
                 , 'dataItem.PRODUCTION_PURPOSE_ID'
                 , 'dataItem.FLOW_ID'
                 , LPAD(COUNT(1) + 1, 2, 0) AS REVISION
                 , 'dataItem.CREATE_BY'
                 , CURRENT_TIMESTAMP()
                 , 'dataItem.CREATE_BY'
            FROM 
                BOM
            WHERE
                PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'
                AND PRODUCTION_PURPOSE_ID = 'dataItem.PRODUCTION_PURPOSE_ID';
                   
                              `;

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);

    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );
    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateBom = async (dataItem) => {
    let sql = `     UPDATE
                        BOM
                    SET
                        BOM_NAME = 'dataItem.BOM_NAME'
                        , FLOW_ID = 'dataItem.FLOW_ID'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        BOM_ID = 'dataItem.BOM_ID'
                      `;

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replace("dataItem.FLOW_ID", dataItem["FLOW_ID"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);
    return sql;
  };

  // *** Function Delete
  static deleteBom = async (dataItem) => {
    let sql = `    UPDATE 
                            BOM 
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            BOM_ID = 'dataItem.BOM_ID'
                      `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.BOM_ID", dataItem["BOM_ID"]);

    return sql;
  };

  static GetByLikeBomName = async (dataItem) => {
    let sql = `            SELECT
                                    BOM_ID
                                , BOM_NAME 
                                FROM
                                BOM                    
                                WHERE 
                                BOM_NAME LIKE '%dataItem.BOM_NAME%'
                                ORDER BY 
                                BOM_NAME ASC
                                LIMIT 
                                50
                                                `;

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    return sql;
  };

  static SearchByProductMainId = async (dataItem) => {
    let sqlList = [];

    let sql = `             SELECT 
                                COUNT(*) AS TOTAL_COUNT
                            FROM
                                BOM tb_1
                            WHERE 
                                tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
                            AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
                            AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                                                `;

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sqlList.push(sql);

    sql = `
    SELECT 
                          tb_1.BOM_ID
                        , tb_1.BOM_CODE
                        , tb_1.BOM_NAME
                        , tb_1.REVISION
                        , tb_1.UPDATE_BY
                        , tb_1.PRODUCT_TYPE_ID 
                        , tb_2.PRODUCT_TYPE_NAME    
                        , tb_2.PRODUCT_SUB_ID 
                        , tb_3.PRODUCT_SUB_NAME     
                        , tb_1.PRODUCTION_PURPOSE_ID
                        , tb_4.PRODUCTION_PURPOSE_NAME
                        , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                        , tb_1.INUSE
                    FROM
                        BOM tb_1
                            INNER JOIN
                        PRODUCT_TYPE tb_2
                            ON tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
                            INNER JOIN
                        PRODUCT_SUB tb_3
                            ON tb_2.PRODUCT_SUB_ID = tb_3.PRODUCT_SUB_ID 
                            INNER JOIN
                        PRODUCTION_PURPOSE tb_4
                            ON tb_1.PRODUCTION_PURPOSE_ID = tb_4.PRODUCTION_PURPOSE_ID
                    WHERE 
                            tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
                        AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                        dataItem.Order
                    LIMIT 
                        dataItem.Start, dataItem.Limit
`;

    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);
    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  static SearchByProductSubId = async (dataItem) => {
    let sqlList = [];
    let sql = ` """
    SELECT 
            COUNT(*) AS TOTAL_COUNT
    FROM
            BOM tb_1
    WHERE 
            tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
        AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
        AND tb_1.INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sqlList.push(sql);

    sql = ` SELECT 
    tb_1.BOM_ID
  , tb_1.BOM_CODE
  , tb_1.BOM_NAME
  , tb_1.REVISION
  , tb_1.UPDATE_BY
  , tb_1.PRODUCT_TYPE_ID 
  , tb_2.PRODUCT_TYPE_NAME    
  , tb_2.PRODUCT_SUB_ID 
  , tb_3.PRODUCT_SUB_NAME     
  , tb_1.PRODUCTION_PURPOSE_ID
  , tb_4.PRODUCTION_PURPOSE_NAME
  , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
  , tb_1.INUSE
FROM
  BOM tb_1
      INNER JOIN
  PRODUCT_TYPE tb_2
      ON tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
      INNER JOIN
  PRODUCT_SUB tb_3
      ON tb_2.PRODUCT_SUB_ID = tb_3.PRODUCT_SUB_ID 
      INNER JOIN
  PRODUCTION_PURPOSE tb_4
      ON tb_1.PRODUCTION_PURPOSE_ID = tb_4.PRODUCTION_PURPOSE_ID
WHERE 
      tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
  AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
  AND tb_1.INUSE LIKE '%dataItem.INUSE%'
ORDER BY 
  dataItem.Order
LIMIT 
  dataItem.Start, dataItem.Limit  `;

    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");
    return sqlList;
  };

  static SearchByProductTypeId = async (dataItem) => {
    let sqlList = [];
    let sql = `  SELECT 
                    COUNT(*) AS TOTAL_COUNT
                FROM
                    BOM tb_1
                WHERE 
                    tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
                AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
                AND tb_1.INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sqlList.push(sql);

    sql = ` SELECT 
                    tb_1.BOM_ID
                , tb_1.BOM_CODE
                , tb_1.BOM_NAME
                , tb_1.REVISION
                , tb_1.UPDATE_BY
                , tb_1.PRODUCT_TYPE_ID 
                , tb_2.PRODUCT_TYPE_NAME    
                , tb_2.PRODUCT_SUB_ID 
                , tb_3.PRODUCT_SUB_NAME     
                , tb_1.PRODUCTION_PURPOSE_ID
                , tb_4.PRODUCTION_PURPOSE_NAME
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM
                BOM tb_1
                    INNER JOIN
                PRODUCT_TYPE tb_2
                    ON tb_1.PRODUCT_TYPE_ID = tb_2.PRODUCT_TYPE_ID
                    INNER JOIN
                PRODUCT_SUB tb_3
                    ON tb_2.PRODUCT_SUB_ID = tb_3.PRODUCT_SUB_ID 
                    INNER JOIN
                PRODUCTION_PURPOSE tb_4
                    ON tb_1.PRODUCTION_PURPOSE_ID = tb_4.PRODUCTION_PURPOSE_ID
                WHERE 
                    tb_1.BOM_NAME LIKE '%dataItem.BOM_NAME%'
                AND tb_1.BOM_CODE LIKE '%dataItem.BOM_CODE%'
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order
                LIMIT 
                dataItem.Start, dataItem.Limit `;

    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);

    sql = sql.replace("dataItem.BOM_NAME", dataItem["BOM_NAME"]);
    sql = sql.replace("dataItem.BOM_CODE", dataItem["BOM_CODE"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");
    return sqlList;
  };
}

module.exports = BomSQL;
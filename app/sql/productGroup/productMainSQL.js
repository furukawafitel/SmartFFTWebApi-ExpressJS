// ** SQLFactory

// *** Declare Function SQL
class ProductMainSQL {
  // *** Function Get
  static getProductMain = (dataItem) => {
    let sql = `      SELECT
                          PRODUCT_MAIN_ID
                        , PRODUCT_MAIN_ID
                        , PRODUCT_MAIN_NAME
                        , PRODUCT_MAIN_ALPHABET
                        , PRODUCT_MAIN_CODE
                        , INUSE
                      FROM 
                        PRODUCT_MAIN                    
                      WHERE 
                        PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
              `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    return sql;
  };

  // ***  Function Search
  static searchProductMain = (dataItem) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        PRODUCT_MAIN tb_1                           
                    WHERE 
                            tb_1.PRODUCT_MAIN_NAME LIKE '%dataItem.PRODUCT_MAIN_NAME%'
                      AND tb_1.PRODUCT_MAIN_CODE LIKE '%dataItem.PRODUCT_MAIN_CODE%'	                        
                      AND tb_1.PRODUCT_MAIN_ALPHABET LIKE '%dataItem.PRODUCT_MAIN_ALPHABET%'	                        
                      AND tb_1.INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_CODE",
      dataItem["PRODUCT_MAIN_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `  SELECT 
                    tb_2.PRODUCT_CATEGORY_ID AS PRODUCT_CATEGORY_ID
                  , tb_2.PRODUCT_CATEGORY_CODE AS PRODUCT_CATEGORY_CODE
                  , tb_2.PRODUCT_CATEGORY_NAME AS PRODUCT_CATEGORY_NAME
                  , tb_1.PRODUCT_MAIN_ID AS PRODUCT_MAIN_ID                  
                  , tb_1.PRODUCT_MAIN_CODE AS PRODUCT_MAIN_CODE
                  , tb_1.PRODUCT_MAIN_NAME AS PRODUCT_MAIN_NAME
                  , tb_1.PRODUCT_MAIN_ALPHABET AS PRODUCT_MAIN_ALPHABET
                  , tb_1.UPDATE_BY AS UPDATE_BY
                  , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                  , tb_1.INUSE AS INUSE
                FROM 
                  PRODUCT_MAIN tb_1                           
                INNER JOIN
                  PRODUCT_CATEGORY tb_2 on tb_1.PRODUCT_CATEGORY_ID = tb_2.PRODUCT_CATEGORY_ID
                WHERE 
                      tb_1.PRODUCT_MAIN_NAME LIKE '%dataItem.PRODUCT_MAIN_NAME%'
                AND tb_1.PRODUCT_MAIN_ALPHABET LIKE '%dataItem.PRODUCT_MAIN_ALPHABET%'	                        
                AND tb_1.PRODUCT_MAIN_CODE LIKE '%dataItem.PRODUCT_MAIN_CODE%'	                        
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                  dataItem.Order            
                LIMIT 
                    dataItem.Start
                  , dataItem.Limit  `;

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_CODE",
      dataItem["PRODUCT_MAIN_CODE"]
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
  static createProductMain = (dataItem) => {
    let sql = `  
                  INSERT INTO PRODUCT_MAIN
                  (
                        PRODUCT_CATEGORY_ID
                      , PRODUCT_MAIN_NAME
                      , PRODUCT_MAIN_ALPHABET
                      , PRODUCT_MAIN_CODE
                      , CREATE_BY
                      , UPDATE_DATE
                      , UPDATE_BY
                  )                   
                  SELECT
                        'dataItem.PRODUCT_CATEGORY_ID'
                      , 'dataItem.PRODUCT_MAIN_NAME'
                      , 'dataItem.PRODUCT_MAIN_ALPHABET'
                      , CONCAT('PD-M-', LPAD((COUNT(*) + 1), 4, 0))
                      , 'dataItem.CREATE_BY'
                      , CURRENT_TIMESTAMP()
                      , 'dataItem.CREATE_BY'
                  FROM 
                      PRODUCT_MAIN
              `;

    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replace("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateProductMain = (dataItem) => {
    let sql = `   UPDATE 
                        PRODUCT_MAIN 
                    SET                       
                          PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'
                        , PRODUCT_MAIN_NAME = 'dataItem.PRODUCT_MAIN_NAME'
                        , PRODUCT_MAIN_ALPHABET = 'dataItem.PRODUCT_MAIN_ALPHABET'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteProductMain = (dataItem) => {
    let sql = `   UPDATE 
                        PRODUCT_MAIN 
                    SET
                          INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    return sql;
  };

  // ***  Function Search
  static searchByProductCategoryId = (dataItem) => {
    let sqlList = [];

    let sql = `   SELECT
                        COUNT(*) AS TOTAL_COUNT
                    FROM
                        PRODUCT_MAIN
                    WHERE 
                            PRODUCT_MAIN_NAME LIKE '%dataItem.PRODUCT_MAIN_NAME%'
                        AND PRODUCT_MAIN_ALPHABET LIKE '%dataItem.PRODUCT_MAIN_ALPHABET%'
                        AND PRODUCT_MAIN_CODE LIKE '%dataItem.PRODUCT_MAIN_CODE%'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        AND PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID' `;

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_CODE",
      dataItem["PRODUCT_MAIN_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sqlList.push(sql);

    sql = `   SELECT 
                    PRODUCT_MAIN_ID
                  , PRODUCT_CATEGORY_ID
                  , PRODUCT_MAIN_CODE
                  , PRODUCT_MAIN_NAME
                  , PRODUCT_MAIN_ALPHABET
                  , UPDATE_BY
                  , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                  , INUSE
                FROM 
                  PRODUCT_MAIN
                WHERE 
                      PRODUCT_MAIN_NAME LIKE '%dataItem.PRODUCT_MAIN_NAME%'
                  AND PRODUCT_MAIN_ALPHABET LIKE '%dataItem.PRODUCT_MAIN_ALPHABET%'
                  AND PRODUCT_MAIN_CODE LIKE '%dataItem.PRODUCT_MAIN_CODE%'
                  AND INUSE LIKE '%dataItem.INUSE%'
                  AND PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'
                ORDER BY 
                  dataItem.Order
                LIMIT 
                    dataItem.Start
                  , dataItem.Limit `;

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_ALPHABET",
      dataItem["PRODUCT_MAIN_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_CODE",
      dataItem["PRODUCT_MAIN_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Getlike
  static getByLikeProductMainNameAndInuse = (dataItem) => {
    let sql = `   SELECT
                        PRODUCT_MAIN_ID 
                      , PRODUCT_MAIN_NAME 
                      , PRODUCT_MAIN_ALPHABET
                    FROM
                      PRODUCT_MAIN                 
                    WHERE 
                          PRODUCT_MAIN_NAME LIKE '%dataItem.PRODUCT_MAIN_NAME%'
                      AND INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                      PRODUCT_MAIN_NAME ASC
                    LIMIT 
                      50          
                `;

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );

    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  // *** Function Get
  static getByLikeProductMainNameAndProductCategoryIdAndInuse = (dataItem) => {
    let sql = `      SELECT
                            tb_1.PRODUCT_MAIN_ID 
                          , tb_1.PRODUCT_MAIN_NAME 
                        FROM
                          PRODUCT_MAIN tb_1
                              INNER JOIN 
                          PRODUCT_CATEGORY tb_2 
                              ON (tb_1.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID' ) = tb_2.PRODUCT_CATEGORY_ID 
                        WHERE 
                              tb_1.PRODUCT_MAIN_NAME LIKE '%dataItem.PRODUCT_MAIN_NAME%'
                          AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                          tb_1.PRODUCT_MAIN_NAME ASC
                        LIMIT 
                          50            
              `;

    sql = sql.replace(
      "dataItem.PRODUCT_MAIN_NAME",
      dataItem["PRODUCT_MAIN_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };

  // *** Function Get
  static getByProductCategoryId = (dataItem) => {
    let sql = `      SELECT
                            PRODUCT_MAIN_ID
                          , PRODUCT_MAIN_NAME
                        FROM 
                          PRODUCT_MAIN                    
                        WHERE 
                          PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'   
              `;

    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    return sql;
  };
}

module.exports = ProductMainSQL;

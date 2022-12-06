// ** SQLFactory

// *** Declare Function SQL

class ProductSubSQL {
  // *** Function Get
  static getProductSub = async (dataItem) => {
    let sql = `      SELECT  PRODUCT_SUB_ID,
                        , PRODUCT_CATEGORY_ID
                        , PRODUCT_SUB_NAME
                        , PRODUCT_SUB_CODE
                        , PRODUCT_SUB_ALPHABET
                        , INUSE
                        FROM 
                        PRODUCT_SUB                    
                        WHERE 
                        PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
              `;

    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);

    return sql;
  };

  // *** Function Search
  static searchProductSub = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                COUNT(*) AS TOTAL_COUNT
            FROM 
                PRODUCT_SUB tb_1                           
            WHERE 
                    tb_1.PRODUCT_SUB_NAME  LIKE '%dataItem.PRODUCT_SUB_NAME%'
                AND tb_1.PRODUCT_SUB_CODE LIKE '%dataItem.PRODUCT_SUB_CODE%'	                        
                AND tb_1.PRODUCT_SUB_ALPHABET LIKE '%dataItem.PRODUCT_SUB_ALPHABET%'	                        
                AND tb_1.INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_CODE",
      dataItem["PRODUCT_SUB_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
    SELECT   tb_3.PRODUCT_CATEGORY_ID   
            , tb_3.PRODUCT_CATEGORY_NAME
            , tb_2.PRODUCT_MAIN_ID
            , tb_2.PRODUCT_MAIN_NAME
            , tb_1.PRODUCT_SUB_ID
            , tb_1.PRODUCT_SUB_CODE
            , tb_1.PRODUCT_SUB_ALPHABET
            , tb_1.PRODUCT_SUB_NAME
            , tb_1.UPDATE_BY
            , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
            , tb_1.INUSE
        FROM 
            PRODUCT_SUB tb_1 
                INNER JOIN 
            PRODUCT_MAIN tb_2 
                ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                INNER JOIN 
            PRODUCT_CATEGORY tb_3 
                ON tb_2.PRODUCT_CATEGORY_ID = tb_3.PRODUCT_CATEGORY_ID 
        WHERE 
                tb_1.PRODUCT_SUB_NAME  LIKE '%dataItem.PRODUCT_SUB_NAME%'
            AND tb_1.PRODUCT_SUB_ALPHABET LIKE '%dataItem.PRODUCT_SUB_ALPHABET%'	                        
            AND tb_1.PRODUCT_SUB_CODE LIKE '%dataItem.PRODUCT_SUB_CODE%'	                        
            AND tb_1.INUSE LIKE '%dataItem.INUSE%'
        ORDER BY 
            dataItem.Order            
        LIMIT 
            dataItem.Start, dataItem.Limit
      `;

    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_CODE",
      dataItem["PRODUCT_SUB_CODE"]
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
  static createProductSub = async (dataItem) => {
    let sql = `  
                INSERT INTO PRODUCT_SUB
                (
                    PRODUCT_MAIN_ID
                    , PRODUCT_SUB_NAME
                    , PRODUCT_SUB_ALPHABET
                    , PRODUCT_SUB_CODE
                    , CREATE_BY
                    , UPDATE_DATE
                    , UPDATE_BY
                )                   
                    SELECT
                        'dataItem.PRODUCT_MAIN_ID'
                        , 'dataItem.PRODUCT_SUB_NAME'
                        , 'dataItem.PRODUCT_SUB_ALPHABET'
                        , CONCAT('PD-S-', LPAD((COUNT(*) + 1), 4, 0))
                        , 'dataItem.CREATE_BY'
                        , CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    FROM 
                        PRODUCT_SUB
                        `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateProductSub = async (dataItem) => {
    let sql = `    UPDATE 
                        PRODUCT_SUB 
                    SET                      
                        PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        , PRODUCT_SUB_NAME = 'dataItem.PRODUCT_SUB_NAME'
                        , PRODUCT_SUB_ALPHABET = 'dataItem.PRODUCT_SUB_ALPHABET'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
                `;

    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteProductSub = async (dataItem) => {
    let sql = `   UPDATE 
                        PRODUCT_SUB 
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
                `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);

    return sql;
  };

  static SearchByProductCategoryId = async (dataItem) => {
    let sqlList = [];

    let sql = ` SELECT 
                    COUNT(*) AS TOTAL_COUNT
                FROM 
                    PRODUCT_SUB tb_1 
                        INNER JOIN 
                    PRODUCT_MAIN tb_2 
                        ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                        INNER JOIN 
                    PRODUCT_CATEGORY tb_3 
                        ON ( tb_2.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID' ) = tb_3.PRODUCT_CATEGORY_ID                      
                WHERE 
                        tb_1.PRODUCT_SUB_NAME  LIKE '%dataItem.PRODUCT_SUB_NAME%'
                    AND tb_1.PRODUCT_SUB_CODE LIKE '%dataItem.PRODUCT_SUB_CODE%'	                        
                    AND tb_1.PRODUCT_SUB_ALPHABET LIKE '%dataItem.PRODUCT_SUB_ALPHABET%'	                        
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
	`;

    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_CODE",
      dataItem["PRODUCT_SUB_CODE"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = ` SELECT 
                    tb_2.PRODUCT_MAIN_ID  
                , tb_2.PRODUCT_MAIN_NAME 
                , tb_1.PRODUCT_SUB_ID  
                , tb_1.PRODUCT_SUB_CODE 
                , tb_1.PRODUCT_SUB_NAME
                , tb_1.PRODUCT_SUB_ALPHABET
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                PRODUCT_SUB tb_1 
                    INNER JOIN 
                PRODUCT_MAIN tb_2 
                    ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                    INNER JOIN 
                PRODUCT_CATEGORY tb_3 
                    ON ( tb_2.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID' ) = tb_3.PRODUCT_CATEGORY_ID
                WHERE 
                    tb_1.PRODUCT_SUB_NAME  LIKE '%dataItem.PRODUCT_SUB_NAME%'
                AND tb_1.PRODUCT_SUB_CODE LIKE '%dataItem.PRODUCT_SUB_CODE%'	                        
                AND tb_1.PRODUCT_SUB_ALPHABET LIKE '%dataItem.PRODUCT_SUB_ALPHABET%'	                        
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order            
                LIMIT 
                dataItem.Start, dataItem.Limit
	`;

    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_CODE",
      dataItem["PRODUCT_SUB_CODE"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);

    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  static searchByProductMainId = async (dataItem) => {
    let sqlList = [];

    let sql = ` SELECT 
                    COUNT(*) AS TOTAL_COUNT
                FROM 
                    PRODUCT_SUB tb_1 
                        INNER JOIN 
                    PRODUCT_MAIN tb_2
                        ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                        INNER JOIN
                    PRODUCT_CATEGORY tb_3
                        ON tb_2.PRODUCT_CATEGORY_ID = tb_3.PRODUCT_CATEGORY_ID	             
                WHERE 
                        tb_1.PRODUCT_SUB_NAME  LIKE '%dataItem.PRODUCT_SUB_NAME%'
                    AND tb_1.PRODUCT_SUB_CODE LIKE '%dataItem.PRODUCT_SUB_CODE%'	                        
                    AND tb_1.PRODUCT_SUB_ALPHABET LIKE '%dataItem.PRODUCT_SUB_ALPHABET%'	                        
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                    AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
	`;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_CODE",
      dataItem["PRODUCT_SUB_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sqlList.push(sql);

    sql = ` SELECT  
                    tb_3.PRODUCT_CATEGORY_ID  
                , tb_3.PRODUCT_CATEGORY_NAME 
                , tb_1.PRODUCT_SUB_ID  
                , tb_1.PRODUCT_SUB_CODE 
                , tb_1.PRODUCT_SUB_NAME 
                , tb_1.PRODUCT_SUB_ALPHABET
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                PRODUCT_SUB tb_1 
                    INNER JOIN 
                PRODUCT_MAIN tb_2
                    ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                    INNER JOIN
                PRODUCT_CATEGORY tb_3
                    ON tb_2.PRODUCT_CATEGORY_ID = tb_3.PRODUCT_CATEGORY_ID	
                WHERE 
                    tb_1.PRODUCT_SUB_NAME  LIKE '%dataItem.PRODUCT_SUB_NAME%'
                AND tb_1.PRODUCT_SUB_CODE LIKE '%dataItem.PRODUCT_SUB_CODE%'	                        
                AND tb_1.PRODUCT_SUB_ALPHABET LIKE '%dataItem.PRODUCT_SUB_ALPHABET%'	                        
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                AND tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                ORDER BY 
                dataItem.Order            
                LIMIT 
                dataItem.Start, dataItem.Limit
	`;
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_CODE",
      dataItem["PRODUCT_SUB_CODE"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_ALPHABET",
      dataItem["PRODUCT_SUB_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);

    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  static getByLikeProductSubNameAndInuse = async (dataItem) => {
    let sql = `       SELECT
                            tb_1.PRODUCT_SUB_ID 
                        , tb_1.PRODUCT_SUB_NAME
                        , tb_1.PRODUCT_SUB_ALPHABET
                        , tb_1.PRODUCT_MAIN_ID
                        , tb_2.PRODUCT_MAIN_ALPHABET
                        FROM
                        PRODUCT_SUB tb_1
                            INNER JOIN 
                        PRODUCT_MAIN tb_2 
                            ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                        WHERE 
                            tb_1.PRODUCT_SUB_NAME LIKE '%dataItem.PRODUCT_SUB_NAME%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        tb_1.PRODUCT_SUB_NAME ASC
                        LIMIT 
                        50           
              `;
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );

    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static getByLikeProductSubNameAndProductMainIdAndInuse = async (dataItem) => {
    let sql = `   SELECT
                        tb_1.PRODUCT_SUB_ID 
                    , tb_1.PRODUCT_SUB_NAME 
                    FROM
                    PRODUCT_SUB tb_1
                        INNER JOIN 
                    PRODUCT_MAIN tb_2 
                        ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                    WHERE 
                        tb_1.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                    AND tb_1.PRODUCT_SUB_NAME LIKE '%dataItem.PRODUCT_SUB_NAME%'   
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    tb_1.PRODUCT_SUB_NAME ASC
                    LIMIT 
                    50            
              `;
    sql = sql.replace(
      "dataItem.PRODUCT_SUB_NAME",
      dataItem["PRODUCT_SUB_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    return sql;
  };

  static getByProductMainId = async (dataItem) => {
    let sql = `  SELECT
                    PRODUCT_SUB_ID
                , PRODUCT_SUB_NAME 
                FROM 
                PRODUCT_SUB                    
                WHERE 
                PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'     
    `;
    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    return sql;
  };
}

module.exports = ProductSubSQL;

// ** SQLFactory
// *** Declare Function SQL

class ProductTypeSQL {
  // *** Function Get
  static getProductType = async (dataItem) => {
    let sql = `       SELECT                        
                     PRODUCT_TYPE_ID,
                    , PRODUCT_SUB_ID
                    , PRODUCT_TYPE_NAME
                    , PRODUCT_TYPE_CODE
                    , INUSE
                    FROM 
                    PRODUCT_TYPE                    
                    WHERE 
                    PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'
                `;

    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);
    return sql;
  };

  // *** Function Search
  static searchProductType = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        PRODUCT_TYPE tb_1                           
                    WHERE 
                            tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                        AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT  
                        tb_4.PRODUCT_CATEGORY_ID  
                    , tb_4.PRODUCT_CATEGORY_NAME 
                    , tb_3.PRODUCT_MAIN_ID  
                    , tb_3.PRODUCT_MAIN_NAME  
                    , tb_2.PRODUCT_SUB_ID  
                    , tb_2.PRODUCT_SUB_NAME                            
                    , tb_1.PRODUCT_TYPE_ID  
                    , tb_1.PRODUCT_TYPE_CODE 
                    , tb_1.PRODUCT_TYPE_NAME 
                    , tb_1.UPDATE_BY
                    , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , tb_1.INUSE
                    FROM                    
                    PRODUCT_TYPE tb_1 
                        INNER JOIN
                    PRODUCT_SUB tb_2
                        ON tb_1.PRODUCT_SUB_ID  = tb_2.PRODUCT_SUB_ID
                        INNER JOIN 
                    PRODUCT_MAIN tb_3
                        ON tb_2.PRODUCT_MAIN_ID  = tb_3.PRODUCT_MAIN_ID 
                        INNER JOIN
                    PRODUCT_CATEGORY tb_4
                        ON tb_3.PRODUCT_CATEGORY_ID  = tb_4.PRODUCT_CATEGORY_ID
                    WHERE 
                        tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                    AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    dataItem.Order            
                    LIMIT 
                    dataItem.Start, dataItem.Limit
        `;

    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
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
  static createProductType = async (dataItem) => {
    let sql = `  
                    INSERT INTO PRODUCT_TYPE
                    (
                        PRODUCT_SUB_ID
                        , PRODUCT_TYPE_NAME
                        , PRODUCT_TYPE_CODE
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )                   
                    SELECT
                        'dataItem.PRODUCT_SUB_ID'
                        , 'dataItem.PRODUCT_TYPE_NAME'
                        , CONCAT('PD-T-', LPAD((COUNT(*) + 1), 4, 0))
                        , 'dataItem.CREATE_BY'
                        , CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    FROM 
                        PRODUCT_TYPE
                          `;

    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateProductType = async (dataItem) => {
    let sql = `    UPDATE 
                        PRODUCT_TYPE
                    SET                      
                        PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
                        , PRODUCT_TYPE_NAME = 'dataItem.PRODUCT_TYPE_NAME'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP() 
                    WHERE 
                        PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'
                  `;

    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  // *** Function Delete
  static deleteProductType = async (dataItem) => {
    let sql = `     UPDATE 
                        PRODUCT_TYPE 
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        PRODUCT_TYPE_ID = 'dataItem.PRODUCT_TYPE_ID'
                  `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace("dataItem.PRODUCT_TYPE_ID", dataItem["PRODUCT_TYPE_ID"]);

    return sql;
  };

  static SearchByProductCategoryId = async (dataItem) => {
    let sqlList = [];

    let sql = `  SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM                    
                        PRODUCT_TYPE tb_1 
                            INNER JOIN
                        PRODUCT_SUB tb_2
                            ON tb_1.PRODUCT_SUB_ID  = tb_2.PRODUCT_SUB_ID
                            INNER JOIN 
                        PRODUCT_MAIN tb_3
                            ON tb_2.PRODUCT_MAIN_ID  = tb_3.PRODUCT_MAIN_ID 
                            INNER JOIN
                        PRODUCT_CATEGORY tb_4
                            ON tb_3.PRODUCT_CATEGORY_ID  = tb_4.PRODUCT_CATEGORY_ID
                    WHERE
                            tb_4.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'
                        AND tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                        AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'
      `;

    sql = sql.replace(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = ` SELECT
                    tb_4.PRODUCT_CATEGORY_ID  
                , tb_4.PRODUCT_CATEGORY_NAME 
                , tb_3.PRODUCT_MAIN_ID  
                , tb_3.PRODUCT_MAIN_NAME  
                , tb_2.PRODUCT_SUB_ID  
                , tb_2.PRODUCT_SUB_NAME                            
                , tb_1.PRODUCT_TYPE_ID  
                , tb_1.PRODUCT_TYPE_CODE 
                , tb_1.PRODUCT_TYPE_NAME 
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM                    
                PRODUCT_TYPE tb_1 
                    INNER JOIN
                PRODUCT_SUB tb_2
                    ON tb_1.PRODUCT_SUB_ID  = tb_2.PRODUCT_SUB_ID
                    INNER JOIN 
                PRODUCT_MAIN tb_3
                    ON tb_2.PRODUCT_MAIN_ID  = tb_3.PRODUCT_MAIN_ID 
                    INNER JOIN
                PRODUCT_CATEGORY tb_4
                    ON tb_3.PRODUCT_CATEGORY_ID  = tb_4.PRODUCT_CATEGORY_ID
                WHERE
                    tb_4.PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'
                AND tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
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
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);

    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  static SearchByProductMainId = async (dataItem) => {
    let sqlList = [];

    let sql = ` SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM                    
                        PRODUCT_TYPE tb_1 
                            INNER JOIN
                        PRODUCT_SUB tb_2
                            ON tb_1.PRODUCT_SUB_ID  = tb_2.PRODUCT_SUB_ID
                            INNER JOIN 
                        PRODUCT_MAIN tb_3
                            ON tb_2.PRODUCT_MAIN_ID  = tb_3.PRODUCT_MAIN_ID                      
                    WHERE
                            tb_3.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        AND tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                        AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'
      `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                SELECT  
                        tb_4.PRODUCT_CATEGORY_ID  
                    , tb_4.PRODUCT_CATEGORY_NAME 
                    , tb_3.PRODUCT_MAIN_ID  
                    , tb_3.PRODUCT_MAIN_NAME  
                    , tb_2.PRODUCT_SUB_ID  
                    , tb_2.PRODUCT_SUB_NAME                            
                    , tb_1.PRODUCT_TYPE_ID  
                    , tb_1.PRODUCT_TYPE_CODE 
                    , tb_1.PRODUCT_TYPE_NAME 
                    , tb_1.UPDATE_BY
                    , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , tb_1.INUSE
                FROM                    
                    PRODUCT_TYPE tb_1 
                        INNER JOIN
                    PRODUCT_SUB tb_2
                        ON tb_1.PRODUCT_SUB_ID  = tb_2.PRODUCT_SUB_ID
                        INNER JOIN 
                    PRODUCT_MAIN tb_3
                        ON tb_2.PRODUCT_MAIN_ID  = tb_3.PRODUCT_MAIN_ID 
                        INNER JOIN
                    PRODUCT_CATEGORY tb_4
                        ON tb_3.PRODUCT_CATEGORY_ID  = tb_4.PRODUCT_CATEGORY_ID
                WHERE
                        tb_3.PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                    AND tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                    AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                    dataItem.Order            
                LIMIT 
                    dataItem.Start, dataItem.Limit
      `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
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

    let sql = `       SELECT 
                            COUNT(*) AS TOTAL_COUNT
                        FROM 
                            PRODUCT_TYPE tb_1 
                                INNER JOIN
                            PRODUCT_SUB tb_2
                                ON tb_1.PRODUCT_SUB_ID = tb_2.PRODUCT_SUB_ID               
                        WHERE
                                tb_2.PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
                            AND tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                            AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
                            AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                `;
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = ` SELECT  
                    tb_4.PRODUCT_CATEGORY_ID  
                , tb_4.PRODUCT_CATEGORY_NAME 
                , tb_3.PRODUCT_MAIN_ID  
                , tb_3.PRODUCT_MAIN_NAME  
                , tb_2.PRODUCT_SUB_ID  
                , tb_2.PRODUCT_SUB_NAME                            
                , tb_1.PRODUCT_TYPE_ID  
                , tb_1.PRODUCT_TYPE_CODE 
                , tb_1.PRODUCT_TYPE_NAME 
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM                    
                PRODUCT_TYPE tb_1 
                    INNER JOIN
                PRODUCT_SUB tb_2
                    ON tb_1.PRODUCT_SUB_ID  = tb_2.PRODUCT_SUB_ID
                    INNER JOIN 
                PRODUCT_MAIN tb_3
                    ON tb_2.PRODUCT_MAIN_ID  = tb_3.PRODUCT_MAIN_ID 
                    INNER JOIN
                PRODUCT_CATEGORY tb_4
                    ON tb_3.PRODUCT_CATEGORY_ID  = tb_4.PRODUCT_CATEGORY_ID
                WHERE
                    tb_2.PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
                AND tb_1.PRODUCT_TYPE_NAME  LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                AND tb_1.PRODUCT_TYPE_CODE LIKE '%dataItem.PRODUCT_TYPE_CODE%'	                        
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                dataItem.Order            
                LIMIT 
                dataItem.Start, dataItem.Limit
	`;
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);

    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_CODE",
      dataItem["PRODUCT_TYPE_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.Order", dataItem["Order"]);

    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);
    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  static GetByLikeProductTypeNameAndInuse = async (dataItem) => {
    let sql = `    SELECT
                    PRODUCT_TYPE_ID
                , PRODUCT_TYPE_NAME 
                FROM
                PRODUCT_TYPE                 
                WHERE 
                    PRODUCT_TYPE_NAME LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                AND INUSE LIKE '%dataItem.INUSE%'
                ORDER BY 
                PRODUCT_TYPE_NAME ASC
                LIMIT 
                50              
                                `;
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeProductTypeNameAndProductSubIdAndInuse = async (dataItem) => {
    let sql = `  SELECT
                        tb_1.PRODUCT_TYPE_ID 
                    , tb_1.PRODUCT_TYPE_NAME 
                    FROM
                    PRODUCT_TYPE tb_1
                        INNER JOIN 
                    PRODUCT_SUB tb_2 
                        ON tb_1.PRODUCT_SUB_ID = tb_2.PRODUCT_SUB_ID 
                    WHERE 
                        tb_1.PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
                    AND tb_1.PRODUCT_TYPE_NAME LIKE '%dataItem.PRODUCT_TYPE_NAME%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    tb_1.PRODUCT_TYPE_NAME ASC
                    LIMIT 
                    50          
      `;
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    sql = sql.replace(
      "dataItem.PRODUCT_TYPE_NAME",
      dataItem["PRODUCT_TYPE_NAME"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };

  static GetByProductSubId = async (dataItem) => {
    let sql = `       SELECT
                            PRODUCT_TYPE_ID
                        , PRODUCT_TYPE_NAME 
                        FROM 
                        PRODUCT_TYPE                    
                        WHERE 
                        PRODUCT_SUB_ID = 'dataItem.PRODUCT_SUB_ID'
              `;
    sql = sql.replace("dataItem.PRODUCT_SUB_ID", dataItem["PRODUCT_SUB_ID"]);
    return sql;
  };
}

module.exports = ProductTypeSQL;

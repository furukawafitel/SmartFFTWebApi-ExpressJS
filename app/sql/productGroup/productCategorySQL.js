// ** SQLFactory

// *** Declare Function SQL
class ProductCategorySQL {
  // *** Function Get
  static getProductcategory = async (dataItem) => {
    let sql = `     SELECT
                            PRODUCT_CATEGORY_ID
                          , PRODUCT_CATEGORY_NAME
                          , PRODUCT_CATEGORY_CODE
                          , PRODUCT_CATEGORY_ALPHABET
                          , INUSE
                        FROM 
                          PRODUCT_CATEGORY                    
                        WHERE 
                          PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'
              `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    return sql;
  };

  // ***  Function Search
  static searchProductcategory = async (dataItem) => {
    let sqlList = [];

    let sql = ` SELECT COUNT(*) AS TOTAL_COUNT
         FROM PRODUCT_CATEGORY
          WHERE
                PRODUCT_CATEGORY_NAME LIKE '%dataItem.PRODUCT_CATEGORY_NAME%'
            AND PRODUCT_CATEGORY_CODE LIKE '%dataItem.PRODUCT_CATEGORY_CODE%'
            AND INUSE LIKE '%dataItem.INUSE%'  `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_NAME",
      dataItem["PRODUCT_CATEGORY_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_CODE",
      dataItem["PRODUCT_CATEGORY_CODE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = ` SELECT PRODUCT_CATEGORY_ID,
                      PRODUCT_CATEGORY_CODE,
                      PRODUCT_CATEGORY_NAME,
                      PRODUCT_CATEGORY_ALPHABET,
                      UPDATE_BY,
                      DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE,
                      INUSE
        FROM PRODUCT_CATEGORY
        WHERE PRODUCT_CATEGORY_NAME LIKE '%dataItem.PRODUCT_CATEGORY_NAME%'
            AND PRODUCT_CATEGORY_CODE LIKE '%dataItem.PRODUCT_CATEGORY_CODE%'
            AND INUSE LIKE '%dataItem.INUSE%'
        ORDER BY dataItem.Order
        LIMIT dataItem.Start, dataItem.Limit  `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_NAME",
      dataItem["PRODUCT_CATEGORY_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_CODE",
      dataItem["PRODUCT_CATEGORY_CODE"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ALPHABET",
      dataItem["PRODUCT_CATEGORY_ALPHABET"]
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
  static createProductcategory = async (dataItem) => {
    let sql = `  INSERT INTO PRODUCT_CATEGORY
       (
        PRODUCT_CATEGORY_NAME,
        PRODUCT_CATEGORY_CODE,
        PRODUCT_CATEGORY_ALPHABET,
        CREATE_BY,
        UPDATE_DATE,
        UPDATE_BY
       )         

        SELECT
         'dataItem.PRODUCT_CATEGORY_NAME',
          CONCAT('PD-C-', LPAD((COUNT(*) + 1), 4, 0)),
         'dataItem.PRODUCT_CATEGORY_ALPHABET',
         'dataItem.CREATE_BY',
         CURRENT_TIMESTAMP(),
         'dataItem.CREATE_BY'
    FROM PRODUCT_CATEGORY
              `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_NAME",
      dataItem["PRODUCT_CATEGORY_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ALPHABET",
      dataItem["PRODUCT_CATEGORY_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateProductcategory = async (dataItem) => {
    let sql = `   UPDATE     PRODUCT_CATEGORY 
                  SET        PRODUCT_CATEGORY_NAME = 'dataItem.PRODUCT_CATEGORY_NAME'
                            , PRODUCT_CATEGORY_ALPHABET = 'dataItem.PRODUCT_CATEGORY_ALPHABET'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                  WHERE 
                            PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'
                `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_NAME",
      dataItem["PRODUCT_CATEGORY_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ALPHABET",
      dataItem["PRODUCT_CATEGORY_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    return sql;
  };

  // *** Function Delete
  static deleteProductcategory = async (dataItem) => {
    let sql = `   UPDATE 
                        PRODUCT_CATEGORY 
                    SET
                          INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        PRODUCT_CATEGORY_ID = 'dataItem.PRODUCT_CATEGORY_ID'
                `;

    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_ID",
      dataItem["PRODUCT_CATEGORY_ID"]
    );

    return sql;
  };

  // *** Function Getlike
  static getByLikeProductCategoryNameAndInuse = (dataItem) => {
    let sql = `   SELECT
                        PRODUCT_CATEGORY_ID 
                      , PRODUCT_CATEGORY_NAME 
                    FROM
                      PRODUCT_CATEGORY                    
                    WHERE 
                          PRODUCT_CATEGORY_NAME LIKE '%dataItem.PRODUCT_CATEGORY_NAME%'
                      AND INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                      PRODUCT_CATEGORY_NAME ASC
                    LIMIT 
                      50
                `;

    sql = sql.replaceAll(
      "dataItem.PRODUCT_CATEGORY_NAME",
      dataItem["PRODUCT_CATEGORY_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = ProductCategorySQL;

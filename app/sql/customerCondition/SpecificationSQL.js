// ** SQLFactory

// *** Declare Function SQL

class SpecificationSQL {
  // *** Function Get
  static getSpecification = async (dataItem) => {
    let sql = `       SELECT
                            SPECIFICATION_ID
                        , SPECIFICATION_CODE
                        , INUSE
                        FROM 
                        SPECIFICATION                    
                        WHERE 
                        SPECIFICATION_ID = 'dataItem.SPECIFICATION_ID'
                    `;

    sql = sql.replace(
      "dataItem.SPECIFICATION_ID",
      dataItem["SPECIFICATION_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchSpecification = async (dataItem, sqlWhere) => {
    let sqlList = [];

    let sql = `   
                SELECT 
                    COUNT(*) AS TOTAL_COUNT
                FROM 
                    SPECIFICATION tb_1
                WHERE 
                        tb_1.SPECIFICATION_CODE LIKE '%dataItem.SPECIFICATION_CODE%'
                    AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                    dataItem.sqlWhere `;

    sql = sql.replace("dataItem.sqlWhere", sqlWhere);

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.SPECIFICATION_CODE",
      dataItem["SPECIFICATION_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                    SELECT 
                    tb_1.SPECIFICATION_ID
                , tb_1.SPECIFICATION_CODE
                , tb_1.PRODUCT_MAIN_ID 
                , tb_2.PRODUCT_MAIN_NAME  
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                SPECIFICATION tb_1
                    INNER JOIN
                PRODUCT_MAIN tb_2
                    ON tb_1.PRODUCT_MAIN_ID = tb_2.PRODUCT_MAIN_ID 
                WHERE 
                    tb_1.SPECIFICATION_CODE LIKE '%dataItem.SPECIFICATION_CODE%'
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

    sql = sql.replace(
      "dataItem.SPECIFICATION_CODE",
      dataItem["SPECIFICATION_CODE"]
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
  static createSpecification = async (dataItem) => {
    let sql = `  
    INSERT INTO SPECIFICATION
    (
          SPECIFICATION_ID
        , SPECIFICATION_CODE
        , PRODUCT_MAIN_ID
        , CREATE_BY
        , UPDATE_DATE
        , UPDATE_BY
    )                   
    VALUES
    (
            DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f')
         , 'dataItem.SPECIFICATION_CODE'
         , 'dataItem.PRODUCT_MAIN_ID'
         , 'dataItem.CREATE_BY'
         , CURRENT_TIMESTAMP()
         , 'dataItem.CREATE_BY'
    )
                   
                              `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.SPECIFICATION_CODE",
      dataItem["SPECIFICATION_CODE"]
    );

    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateSpecification = async (dataItem) => {
    let sql = `     UPDATE 
                        SPECIFICATION 
                    SET
                        SPECIFICATION_CODE = 'dataItem.SPECIFICATION_CODE'
                        , PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        SPECIFICATION_ID = 'dataItem.SPECIFICATION_ID'
                      `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.SPECIFICATION_CODE",
      dataItem["SPECIFICATION_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace(
      "dataItem.SPECIFICATION_ID",
      dataItem["SPECIFICATION_ID"]
    );
    return sql;
  };

  // *** Function Delete
  static deleteSpecification = async (dataItem) => {
    let sql = `     UPDATE 
                        SPECIFICATION 
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        SPECIFICATION_ID = 'dataItem.SPECIFICATION_ID'
                      `;

    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    sql = sql.replace(
      "dataItem.SPECIFICATION_ID",
      dataItem["SPECIFICATION_ID"]
    );

    return sql;
  };

  static GetByLikeSpecificationCodeAndInuse = async (dataItem) => {
    let sql = `           SELECT
                                SPECIFICATION_ID
                            , SPECIFICATION_CODE 
                            FROM
                            SPECIFICATION                    
                            WHERE 
                                SPECIFICATION_CODE LIKE '%dataItem.SPECIFICATION_CODE%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            SPECIFICATION_CODE ASC
                            LIMIT 
                            50
                                                `;

    sql = sql.replace(
      "dataItem.SPECIFICATION_CODE",
      dataItem["SPECIFICATION_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeSpecificationCodeAndProductMainIdAndInuse = async (
    dataItem
  ) => {
    let sql = `            SELECT
                            SPECIFICATION_ID
                        , SPECIFICATION_CODE 
                        FROM
                        SPECIFICATION                    
                        WHERE 
                            SPECIFICATION_CODE LIKE '%dataItem.SPECIFICATION_CODE%'
                        AND PRODUCT_MAIN_ID = 'dataItem.PRODUCT_MAIN_ID'
                        AND INUSE LIKE '%dataItem.INUSE%'
                        ORDER BY 
                        SPECIFICATION_CODE ASC
                        LIMIT 
                                50
                                                `;

    sql = sql.replace("dataItem.PRODUCT_MAIN_ID", dataItem["PRODUCT_MAIN_ID"]);

    sql = sql.replace(
      "dataItem.SPECIFICATION_CODE",
      dataItem["SPECIFICATION_CODE"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = SpecificationSQL;

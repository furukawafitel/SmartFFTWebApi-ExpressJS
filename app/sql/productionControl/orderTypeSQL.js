// ** SQLFactory

// *** Declare Function SQL

class OrderTypeSQL {
  // *** Function Get
  static getOrderType = async (dataItem) => {
    let sql = `      SELECT
                            ORDER_TYPE_ID
                        , ORDER_TYPE_NAME
                        , ORDER_TYPE_ALPHABET
                        , INUSE
                        FROM 
                        ORDER_TYPE                    
                        WHERE 
                        ORDER_TYPE_ID = 'dataItem.ORDER_TYPE_ID'
                    `;

    sql = sql.replace("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);

    return sql;
  };

  // *** Function Search
  static searchOrderType = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        ORDER_TYPE
                    WHERE 
                            ORDER_TYPE_NAME LIKE '%dataItem.ORDER_TYPE_NAME%'
                        AND ORDER_TYPE_ALPHABET LIKE '%dataItem.ORDER_TYPE_ALPHABET%'
                        AND INUSE LIKE '%dataItem.INUSE%'
     `;

    sql = sql.replace("dataItem.ORDER_TYPE_NAME", dataItem["ORDER_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.ORDER_TYPE_ALPHABET",
      dataItem["ORDER_TYPE_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                        SELECT 
                        ORDER_TYPE_ID
                    , ORDER_TYPE_NAME
                    , ORDER_TYPE_ALPHABET
                    , UPDATE_BY
                    , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                    , INUSE
                    FROM 
                    ORDER_TYPE
                    WHERE 
                        ORDER_TYPE_NAME LIKE '%dataItem.ORDER_TYPE_NAME%'
                    AND ORDER_TYPE_ALPHABET LIKE '%dataItem.ORDER_TYPE_ALPHABET%'
                    AND INUSE LIKE '%dataItem.INUSE%'
                    ORDER BY 
                    dataItem.Order
                    LIMIT 
                        dataItem.Start 
                    , dataItem.Limit
            `;

    sql = sql.replace("dataItem.ORDER_TYPE_NAME", dataItem["ORDER_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.ORDER_TYPE_ALPHABET",
      dataItem["ORDER_TYPE_ALPHABET"]
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
  static createOrderType = async (dataItem) => {
    let sql = `  
                    INSERT INTO ORDER_TYPE
                    (
                        ORDER_TYPE_NAME
                        , ORDER_TYPE_ALPHABET
                        , CREATE_BY
                        , UPDATE_DATE
                        , UPDATE_BY
                    )
                    VALUES
                    (
                        'dataItem.ORDER_TYPE_NAME'
                        , 'dataItem.ORDER_TYPE_ALPHABET'
                        , 'dataItem.CREATE_BY'
                        ,  CURRENT_TIMESTAMP()
                        , 'dataItem.CREATE_BY'
                    )                
                   
                              `;

    sql = sql.replace("dataItem.ORDER_TYPE_NAME", dataItem["ORDER_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.ORDER_TYPE_ALPHABET",
      dataItem["ORDER_TYPE_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateOrderType = async (dataItem) => {
    let sql = `     UPDATE 
                            ORDER_TYPE 
                        SET
                            ORDER_TYPE_NAME = 'dataItem.ORDER_TYPE_NAME'
                            , ORDER_TYPE_ALPHABET = 'dataItem.ORDER_TYPE_ALPHABET'
                            , INUSE = 'dataItem.INUSE'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE 
                            ORDER_TYPE_ID = 'dataItem.ORDER_TYPE_ID'
                      `;

    sql = sql.replace("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);
    sql = sql.replace("dataItem.ORDER_TYPE_NAME", dataItem["ORDER_TYPE_NAME"]);
    sql = sql.replace(
      "dataItem.ORDER_TYPE_ALPHABET",
      dataItem["ORDER_TYPE_ALPHABET"]
    );
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteOrderType = async (dataItem) => {
    let sql = `    UPDATE
                            ORDER_TYPE
                        SET
                            INUSE = '0'
                            , UPDATE_BY = 'dataItem.UPDATE_BY'
                            , UPDATE_DATE = CURRENT_TIMESTAMP()
                        WHERE
                            ORDER_TYPE_ID = 'dataItem.ORDER_TYPE_ID'
                      `;

    sql = sql.replace("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);
    sql = sql.replace("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeOrderTypeNameAndInuse = async (dataItem) => {
    let sql = `           SELECT
                                ORDER_TYPE_ID
                            , ORDER_TYPE_NAME 
                            , ORDER_TYPE_ALPHABET
                            FROM
                            ORDER_TYPE                    
                            WHERE 
                                ORDER_TYPE_NAME LIKE '%dataItem.ORDER_TYPE_NAME%'
                            AND INUSE LIKE '%dataItem.INUSE%'
                            ORDER BY 
                            ORDER_TYPE_NAME
                            LIMIT 
                            50
                                                `;
    sql = sql.replace("dataItem.ORDER_TYPE_NAME", dataItem["ORDER_TYPE_NAME"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static GetByLikeOrderTypeNameAndProductionPurposeIdAndInuse = async (
    dataItem
  ) => {
    let sql = `           SELECT
                                tb_2.ORDER_TYPE_ID
                            , tb_2.ORDER_TYPE_NAME 
                            , tb_2.ORDER_TYPE_ALPHABET
                            FROM
                            ORDER_TYPE_PRODUCTION_PURPOSE tb_1
                                INNER JOIN
                            ORDER_TYPE tb_2
                                ON tb_1.ORDER_TYPE_ID = tb_2.ORDER_TYPE_ID
                                INNER JOIN                                                  
                            PRODUCTION_PURPOSE tb_3
                                ON tb_1.PRODUCTION_PURPOSE_ID = tb_3.PRODUCTION_PURPOSE_ID                            
                            WHERE 
                                tb_2.ORDER_TYPE_NAME LIKE '%dataItem.ORDER_TYPE_NAME%'
                            AND tb_3.PRODUCTION_PURPOSE_ID ='dataItem.PRODUCTION_PURPOSE_ID'
                            AND tb_3.INUSE LIKE '%dataItem.INUSE%'
                            GROUP BY 
                            tb_2.ORDER_TYPE_ID
                            ORDER BY 
                            tb_2.ORDER_TYPE_NAME
                            LIMIT 
                            50
                                                `;
    sql = sql.replace(
      "dataItem.PRODUCTION_PURPOSE_ID",
      dataItem["PRODUCTION_PURPOSE_ID"]
    );

    sql = sql.replace("dataItem.ORDER_TYPE_NAME", dataItem["ORDER_TYPE_NAME"]);
    sql = sql.replace("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = OrderTypeSQL;

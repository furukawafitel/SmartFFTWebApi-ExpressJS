// ** SQLFactory

// *** Declare Function SQL

class MaterialPriceSQL {
  // *** Function Get
  static getMaterialPrice = async (dataItem) => {
    let sql = `       SELECT
                            MATERIAL_ID
                        , PURCHASE_UNIT_QTY
                        , PURCHASE_UNIT_ID
                        , CONVERT_RATIO
                        , PURCHASE_PRICE_PER_UNIT
                        , ESTIMATED_PRICE_PER_USAGE_UNIT
                        , FISCAL_YEAR
                        , EFFECTIVE_DATE
                        , EXPIRATION_DATE
                        , INUSE
                        FROM 
                        MATERIAL_PRICE                    
                        WHERE 
                        MATERIAL_PRICE_ID = 'dataItem.MATERIAL_PRICE_ID'
                    `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRICE_ID",
      dataItem["MATERIAL_PRICE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchMaterialPrice = async (dataItem, sqlWhere) => {
    let sqlList = [];

    let sql = `   SELECT 
                        COUNT(*) AS TOTAL_COUNT
                    FROM 
                        MATERIAL_PRICE tb_1
                            INNER JOIN 
                        MATERIAL tb_2
                            ON tb_1.MATERIAL_ID = tb_2.MATERIAL_ID
                            INNER JOIN 
                        UNIT_OF_MEASUREMENT tb_3
                            ON tb_2.USAGE_UNIT_ID = tb_3.UNIT_OF_MEASUREMENT_ID
                            INNER JOIN 
                        UNIT_OF_MEASUREMENT tb_4
                            ON  tb_1.PURCHASE_UNIT_ID = tb_4.UNIT_OF_MEASUREMENT_ID
                            LEFT JOIN
                        MATERIAL_PRICE_SCT tb_5
                            ON tb_1.MATERIAL_PRICE_ID = tb_5.MATERIAL_PRICE_ID
                            LEFT JOIN
                        SCT tb_6
                            ON tb_5.SCT_ID = tb_6.SCT_ID
                    WHERE
                            tb_1.MATERIAL_ID = 'dataItem.MATERIAL_ID'
                        AND tb_1.FISCAL_YEAR LIKE '%dataItem.FISCAL_YEAR%'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                        dataItem.sqlWhere `;

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    if (
      dataItem.hasOwnProperty("MATERIAL_CATEGORY_ID") &&
      dataItem["MATERIAL_CATEGORY_ID"] !== ""
    ) {
      sql = sql.replaceAll(
        "dataItem.MATERIAL_CATEGORY_ID",
        dataItem["MATERIAL_CATEGORY_ID"]
      );
    }

    if (
      dataItem.hasOwnProperty("ORDER_TYPE_ID") &&
      dataItem["ORDER_TYPE_ID"] !== ""
    ) {
      sql = sql.replaceAll("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);
    }

    if (
      dataItem.hasOwnProperty("PRODUCTION_PURPOSE_ID") &&
      dataItem["PRODUCTION_PURPOSE_ID"] !== ""
    ) {
      sql = sql.replaceAll(
        "dataItem.PRODUCTION_PURPOSE_ID",
        dataItem["PRODUCTION_PURPOSE_ID"]
      );
    }

    sqlList.push(sql);

    sql = `
                    SELECT
                    tb_1.MATERIAL_PRICE_ID
                , tb_1.MATERIAL_ID
                , tb_1.PURCHASE_UNIT_QTY
                , tb_1.PURCHASE_UNIT_ID
                , tb_4.SYMBOL as PURCHASE_UNIT_SYMBOL
                , tb_1.CONVERT_RATIO
                , tb_3.SYMBOL as USAGE_UNIT_SYMBOL
                , tb_1.PURCHASE_PRICE_PER_UNIT
                , tb_1.USAGE_PRICE_PER_UNIT
                , tb_1.ESTIMATED_PRICE_PER_USAGE_UNIT
                , tb_1.FISCAL_YEAR
                , tb_1.REVISION
                , tb_1.DATE_CONTROL_OPTIONAL_NEED
                , DATE_FORMAT(tb_1.EFFECTIVE_DATE, '%d-%b-%Y') AS EFFECTIVE_DATE
                , DATE_FORMAT(tb_1.EXPIRATION_DATE, '%d-%b-%Y') AS EXPIRATION_DATE
                , tb_6.SCT_ID
                , tb_6.SCT_CODE
                , tb_1.REMARK
                , tb_1.UPDATE_BY
                , DATE_FORMAT(tb_1.UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                , tb_1.INUSE
                FROM 
                MATERIAL_PRICE tb_1
                    INNER JOIN 
                MATERIAL tb_2
                    ON tb_1.MATERIAL_ID = tb_2.MATERIAL_ID
                    INNER JOIN 
                UNIT_OF_MEASUREMENT tb_3
                    ON tb_2.USAGE_UNIT_ID = tb_3.UNIT_OF_MEASUREMENT_ID
                    INNER JOIN 
                UNIT_OF_MEASUREMENT tb_4
                    ON  tb_1.PURCHASE_UNIT_ID = tb_4.UNIT_OF_MEASUREMENT_ID
                    LEFT JOIN
                MATERIAL_PRICE_SCT tb_5
                    ON tb_1.MATERIAL_PRICE_ID = tb_5.MATERIAL_PRICE_ID
                    LEFT JOIN
                SCT tb_6
                    ON tb_5.SCT_ID = tb_6.SCT_ID
                WHERE
                    tb_1.MATERIAL_ID = 'dataItem.MATERIAL_ID'
                AND tb_1.FISCAL_YEAR LIKE '%dataItem.FISCAL_YEAR%'
                AND tb_1.INUSE LIKE '%dataItem.INUSE%'

                dataItem.sqlWhere

                ORDER BY 
                dataItem.Order
                LIMIT 
                    dataItem.Start 
                , dataItem.Limit
            `;

    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_NAME",
      dataItem["PRODUCTION_PURPOSE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.PRODUCTION_PURPOSE_ALPHABET",
      dataItem["PRODUCTION_PURPOSE_ALPHABET"]
    );

    sql = sql.replaceAll("dataItem.sqlWhere", sqlWhere);

    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.Order", dataItem["Order"]);
    sql = sql.replaceAll("dataItem.Start", dataItem["Start"]);
    sql = sql.replaceAll("dataItem.Limit", dataItem["Limit"]);

    if (
      dataItem.hasOwnProperty("MATERIAL_CATEGORY_ID") &&
      dataItem["MATERIAL_CATEGORY_ID"] !== ""
    ) {
      sql = sql.replaceAll(
        "dataItem.MATERIAL_CATEGORY_ID",
        dataItem["MATERIAL_CATEGORY_ID"]
      );
    }

    if (
      dataItem.hasOwnProperty("ORDER_TYPE_ID") &&
      dataItem["ORDER_TYPE_ID"] !== ""
    ) {
      sql = sql.replaceAll("dataItem.ORDER_TYPE_ID", dataItem["ORDER_TYPE_ID"]);
    }

    if (
      dataItem.hasOwnProperty("PRODUCTION_PURPOSE_ID") &&
      dataItem["PRODUCTION_PURPOSE_ID"] !== ""
    ) {
      sql = sql.replaceAll(
        "dataItem.PRODUCTION_PURPOSE_ID",
        dataItem["PRODUCTION_PURPOSE_ID"]
      );
    }

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  // *** Function Insert
  static createMaterialPrice = async (dataItem) => {
    let sql = `  
                        INSERT INTO MATERIAL_PRICE
                        (
                            MATERIAL_PRICE_ID
                            , MATERIAL_ID
                            , PURCHASE_UNIT_QTY
                            , PURCHASE_UNIT_ID
                            , CONVERT_RATIO
                            , PURCHASE_PRICE_PER_UNIT
                            , USAGE_PRICE_PER_UNIT
                            , ESTIMATED_PRICE_PER_USAGE_UNIT
                            , FISCAL_YEAR
                            , REVISION
                            , DATE_CONTROL_OPTIONAL_NEED
                            , EFFECTIVE_DATE
                            , EXPIRATION_DATE
                            , REMARK
                            , CREATE_BY
                            , UPDATE_DATE
                            , UPDATE_BY
                        )
                        SELECT                        
                            @materialPriceId
                            , 'dataItem.MATERIAL_ID'
                            , 'dataItem.PURCHASE_UNIT_QTY'
                            , 'dataItem.PURCHASE_UNIT_ID'
                            , 'dataItem.CONVERT_RATIO'
                            , 'dataItem.PURCHASE_PRICE_PER_UNIT'
                            , 'dataItem.USAGE_PRICE_PER_UNIT'
                            , 'dataItem.ESTIMATED_PRICE_PER_USAGE_UNIT'
                            , 'dataItem.FISCAL_YEAR'
                            ,  LPAD(COUNT(1) + 1, 2, 0) AS REVISION
                            , 'dataItem.DATE_CONTROL_OPTIONAL_NEED'
                            , 'dataItem.EFFECTIVE_DATE'
                            , 'dataItem.EXPIRATION_DATE'
                            , 'dataItem.REMARK'
                            , 'dataItem.CREATE_BY'
                            ,  CURRENT_TIMESTAMP()
                            , 'dataItem.CREATE_BY'
                        FROM
                            MATERIAL_PRICE
                        WHERE 
                                MATERIAL_ID = 'dataItem.MATERIAL_ID' 
                            AND FISCAL_YEAR = 'dataItem.FISCAL_YEAR'               
                                    
                              `;

    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replaceAll(
      "dataItem.PURCHASE_UNIT_QTY",
      dataItem["PURCHASE_UNIT_QTY"]
    );
    sql = sql.replaceAll(
      "dataItem.PURCHASE_UNIT_ID",
      dataItem["PURCHASE_UNIT_ID"]
    );
    sql = sql.replaceAll("dataItem.CONVERT_RATIO", dataItem["CONVERT_RATIO"]);
    sql = sql.replaceAll(
      "dataItem.PURCHASE_PRICE_PER_UNIT",
      dataItem["PURCHASE_PRICE_PER_UNIT"]
    );
    sql = sql.replaceAll(
      "dataItem.USAGE_PRICE_PER_UNIT",
      dataItem["USAGE_PRICE_PER_UNIT"]
    );
    sql = sql.replaceAll(
      "dataItem.ESTIMATED_PRICE_PER_USAGE_UNIT",
      dataItem["ESTIMATED_PRICE_PER_USAGE_UNIT"]
    );
    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll(
      "dataItem.DATE_CONTROL_OPTIONAL_NEED",
      dataItem["DATE_CONTROL_OPTIONAL_NEED"]
    );
    sql = sql.replaceAll("dataItem.EFFECTIVE_DATE", dataItem["EFFECTIVE_DATE"]);
    sql = sql.replaceAll(
      "dataItem.EXPIRATION_DATE",
      dataItem["EXPIRATION_DATE"]
    );
    sql = sql.replaceAll("dataItem.REMARK", dataItem["REMARK"]);
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);

    return sql;
  };

  // *** Function update
  static updateMaterialPrice = async (dataItem) => {
    let sql = `    UPDATE 
                        MATERIAL_PRICE 
                    SET
                        PURCHASE_UNIT_QTY= 'dataItem.PURCHASE_UNIT_QTY'
                        , PURCHASE_UNIT_ID= 'dataItem.PURCHASE_UNIT_ID'
                        , CONVERT_RATIO= 'dataItem.CONVERT_RATIO'
                        , PURCHASE_PRICE_PER_UNIT= 'dataItem.PURCHASE_PRICE_PER_UNIT'
                        , USAGE_PRICE_PER_UNIT= 'dataItem.USAGE_PRICE_PER_UNIT'
                        , ESTIMATED_PRICE_PER_USAGE_UNIT = 'dataItem.ESTIMATED_PRICE_PER_USAGE_UNIT'
                        , DATE_CONTROL_OPTIONAL_NEED= 'dataItem.DATE_CONTROL_OPTIONAL_NEED'
                        , EFFECTIVE_DATE= 'dataItem.EFFECTIVE_DATE'
                        , EXPIRATION_DATE= 'dataItem.EXPIRATION_DATE'
                        , REMARK= 'dataItem.REMARK'
                        , INUSE = 'dataItem.INUSE'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE 
                        MATERIAL_PRICE_ID = 'dataItem.MATERIAL_PRICE_ID' ;
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRICE_ID",
      dataItem["MATERIAL_PRICE_ID"]
    );

    sql = sql.replaceAll(
      "dataItem.PURCHASE_UNIT_QTY",
      dataItem["PURCHASE_UNIT_QTY"]
    );
    sql = sql.replaceAll(
      "dataItem.PURCHASE_UNIT_ID",
      dataItem["PURCHASE_UNIT_ID"]
    );
    sql = sql.replaceAll("dataItem.CONVERT_RATIO", dataItem["CONVERT_RATIO"]);
    sql = sql.replaceAll(
      "dataItem.PURCHASE_PRICE_PER_UNIT",
      dataItem["PURCHASE_PRICE_PER_UNIT"]
    );
    sql = sql.replaceAll(
      "dataItem.USAGE_PRICE_PER_UNIT",
      dataItem["USAGE_PRICE_PER_UNIT"]
    );
    sql = sql.replaceAll(
      "dataItem.ESTIMATED_PRICE_PER_USAGE_UNIT",
      dataItem["ESTIMATED_PRICE_PER_USAGE_UNIT"]
    );
    sql = sql.replaceAll(
      "dataItem.DATE_CONTROL_OPTIONAL_NEED",
      dataItem["DATE_CONTROL_OPTIONAL_NEED"]
    );
    sql = sql.replaceAll("dataItem.EFFECTIVE_DATE", dataItem["EFFECTIVE_DATE"]);
    sql = sql.replaceAll(
      "dataItem.EXPIRATION_DATE",
      dataItem["EXPIRATION_DATE"]
    );
    sql = sql.replaceAll("dataItem.REMARK", dataItem["REMARK"]);

    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteMaterialPrice = async (dataItem) => {
    let sql = `     UPDATE
                        MATERIAL_PRICE
                    SET
                        INUSE = '0'
                        , UPDATE_BY = 'dataItem.UPDATE_BY'
                        , UPDATE_DATE = CURRENT_TIMESTAMP()
                    WHERE
                        MATERIAL_PRICE_ID = 'dataItem.MATERIAL_PRICE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRICE_ID",
      dataItem["MATERIAL_PRICE_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByMaterialIdAndFiscalYearAndInuse = async (dataItem) => {
    let sql = `           SELECT                          
                                PURCHASE_UNIT_QTY
                            , PURCHASE_UNIT_ID
                            , CONVERT_RATIO
                            , PURCHASE_PRICE_PER_UNIT
                            , USAGE_PRICE_PER_UNIT
                            , ESTIMATED_PRICE_PER_USAGE_UNIT
                            , FISCAL_YEAR
                            , EFFECTIVE_DATE
                            , EXPIRATION_DATE
                            FROM
                            MATERIAL_PRICE                    
                            WHERE 
                                MATERIAL_ID = 'dataItem.MATERIAL_ID'
                            AND FISCAL_YEAR = 'dataItem.FISCAL_YEAR'
                            AND INUSE = 'dataItem.INUSE'
                                                `;

    sql = sql.replaceAll("dataItem.MATERIAL_ID", dataItem["MATERIAL_ID"]);
    sql = sql.replaceAll("dataItem.FISCAL_YEAR", dataItem["FISCAL_YEAR"]);
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };

  static CreateMaterialPriceId = async () => {
    let sql = `        SET @materialPriceId=(SELECT DATE_FORMAT(NOW(6) , '%y%m%d-%H%i%s-%f'));
                                                `;
    return sql;
  };

  static DeleteByMaterialPriceId = async (dataItem) => {
    let sql = `             DELETE  FROM
                                    MATERIAL_PRICE
                                WHERE
                                    MATERIAL_PRICE_ID = 'dataItem.MATERIAL_PRICE_ID'
                                                `;

    sql = sql.replaceAll(
      "dataItem.MATERIAL_PRICE_ID",
      dataItem["MATERIAL_PRICE_ID"]
    );
    return sql;
  };
}

module.exports = MaterialPriceSQL;

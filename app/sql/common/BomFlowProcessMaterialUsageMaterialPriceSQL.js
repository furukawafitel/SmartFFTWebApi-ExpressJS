// ** SQLFactory

// *** Declare Function SQL
class BomFlowProcessMaterialUsageMaterialPriceSQL {
  // *** Function Get
  static GetByBomIdAndFlowProcessIdAndLikeInuse = async (dataItem) => {
    let sql = `      SELECT
                            tb_1.BOM_FLOW_PROCESS_MATERIAL_USAGE_ID
                        , tb_1.NO
                        , tb_2.MATERIAL_ID
                        , tb_2.MATERIAL_INTERNAL_CODE
                        , tb_2.MATERIAL_INTERNAL_FULL_NAME
                        , tb_2.IMAGE_PATH 
                        , tb_1.USAGE_QUANTITY
                        , tb_2.USAGE_UNIT_ID  AS USAGE_UNIT_ID
                        , tb_3.SYMBOL AS USAGE_UNIT_SYMBOL
                        , tb_2.MATERIAL_CATEGORY_ID
                        , tb_4.MATERIAL_CATEGORY_NAME 
                        , tb_4.PURCHASE_MODULE_ID
                        , tb_5.MATERIAL_TYPE_NAME
                        , tb_2.USAGE_UNIT_ID  AS MATERIAL_PRICE_USAGE_UNIT_ID
                        , tb_8.UNIT_OF_MEASUREMENT_NAME  AS MATERIAL_PRICE_USAGE_UNIT_NAME
                        , tb_8.SYMBOL  AS MATERIAL_PRICE_USAGE_UNIT_SYMBOL					
                        FROM
                        BOM_FLOW_PROCESS_MATERIAL_USAGE tb_1
                            INNER JOIN
                        MATERIAL tb_2
                            ON tb_1.MATERIAL_ID = tb_2.MATERIAL_ID
                                INNER JOIN 
                        UNIT_OF_MEASUREMENT tb_3
                            ON tb_2.USAGE_UNIT_ID  = tb_3.UNIT_OF_MEASUREMENT_ID
                            INNER JOIN 
                        MATERIAL_CATEGORY tb_4
                            ON tb_2.MATERIAL_CATEGORY_ID = tb_4.MATERIAL_CATEGORY_ID
                            INNER JOIN 
                        MATERIAL_TYPE tb_5
                            ON tb_2.MATERIAL_TYPE_ID = tb_5.MATERIAL_TYPE_ID
                            LEFT JOIN 
                        UNIT_OF_MEASUREMENT tb_8
                            ON tb_2.USAGE_UNIT_ID  = tb_8.UNIT_OF_MEASUREMENT_ID
                        WHERE                        
                            tb_1.BOM_ID ='dataItem.BOM_ID'
                        AND tb_1.FLOW_PROCESS_ID  = 'dataItem.FLOW_PROCESS_ID'
                        AND tb_1.INUSE LIKE '%dataItem.INUSE%'           
                        ORDER BY
                        tb_1.NO
                    `;

    sql = sql.replaceAll("dataItem.BOM_ID", dataItem["BOM_ID"]);
    sql = sql.replaceAll(
      "dataItem.FLOW_PROCESS_ID",
      dataItem["FLOW_PROCESS_ID"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    return sql;
  };
}

module.exports = BomFlowProcessMaterialUsageMaterialPriceSQL;

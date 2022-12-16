// ** SQLFactory

// *** Declare Function SQL

class SctSubCodeSQL {
  // *** Function Get
  static getSctSubCode = async (dataItem) => {
    let sql = `        SELECT
                              SCT_SUB_CODE_ID
                          , SCT_SUB_CODE_NAME
                          , SCT_SUB_CODE_ALPHABET
                          , INUSE
                          FROM 
                          SCT_SUB_CODE                    
                          WHERE 
                          SCT_SUB_CODE_ID = 'dataItem.SCT_SUB_CODE_ID'
                      `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ID",
      dataItem["SCT_SUB_CODE_ID"]
    );

    return sql;
  };

  // *** Function Search
  static searchSctSubCode = async (dataItem) => {
    let sqlList = [];

    let sql = `    SELECT 
                          COUNT(*) AS TOTAL_COUNT
                      FROM 
                          SCT_SUB_CODE
                      WHERE 
                              SCT_SUB_CODE_NAME LIKE '%dataItem.SCT_SUB_CODE_NAME%'
                          AND SCT_SUB_CODE_ALPHABET LIKE '%dataItem.SCT_SUB_CODE_ALPHABET%'
                          AND INUSE LIKE '%dataItem.INUSE%' `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_NAME",
      dataItem["SCT_SUB_CODE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ALPHABET",
      dataItem["SCT_SUB_CODE_ALPHABET"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);

    sqlList.push(sql);

    sql = `
                      SELECT 
                      SCT_SUB_CODE_ID
                  , SCT_SUB_CODE_NAME
                  , SCT_SUB_CODE_ALPHABET
                  , CAN_INPUT_TO_PRODUCTION_LINE
                  , UPDATE_BY
                  , DATE_FORMAT(UPDATE_DATE, '%d-%b-%Y %H:%i:%s') AS MODIFIED_DATE
                  , INUSE
                  FROM 
                  SCT_SUB_CODE
                  WHERE 
                      SCT_SUB_CODE_NAME LIKE '%dataItem.SCT_SUB_CODE_NAME%'
                  AND SCT_SUB_CODE_ALPHABET LIKE '%dataItem.SCT_SUB_CODE_ALPHABET%'
                  AND INUSE LIKE '%dataItem.INUSE%'
                  ORDER BY 
                  dataItem.Order
                  LIMIT 
                      dataItem.Start 
                  , dataItem.Limit
              `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_NAME",
      dataItem["SCT_SUB_CODE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ALPHABET",
      dataItem["SCT_SUB_CODE_ALPHABET"]
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
  static createSctSubCode = async (dataItem) => {
    let sql = `  
                          INSERT INTO SCT_SUB_CODE
                          (
                              SCT_SUB_CODE_NAME
                              , SCT_SUB_CODE_ALPHABET
                              , CAN_INPUT_TO_PRODUCTION_LINE
                              , CREATE_BY
                              , UPDATE_DATE
                              , UPDATE_BY
                          )
                          VALUES
                          (
                              'dataItem.SCT_SUB_CODE_NAME'
                              , 'dataItem.SCT_SUB_CODE_ALPHABET'
                              , 'dataItem.CAN_INPUT_TO_PRODUCTION_LINE'
                              , 'dataItem.CREATE_BY'
                              ,  CURRENT_TIMESTAMP()
                              , 'dataItem.CREATE_BY'
                          )          
                     
                                `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_NAME",
      dataItem["SCT_SUB_CODE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ALPHABET",
      dataItem["SCT_SUB_CODE_ALPHABET"]
    );
    sql = sql.replaceAll(
      "dataItem.CAN_INPUT_TO_PRODUCTION_LINE",
      dataItem["CAN_INPUT_TO_PRODUCTION_LINE"]
    );
    sql = sql.replaceAll("dataItem.CREATE_BY", dataItem["CREATE_BY"]);
    return sql;
  };

  // *** Function update
  static updateSctSubCode = async (dataItem) => {
    let sql = `     UPDATE 
                          SCT_SUB_CODE 
                      SET
                          SCT_SUB_CODE_NAME = 'dataItem.SCT_SUB_CODE_NAME'
                          , SCT_SUB_CODE_ALPHABET = 'dataItem.SCT_SUB_CODE_ALPHABET'
                          , CAN_INPUT_TO_PRODUCTION_LINE = 'dataItem.CAN_INPUT_TO_PRODUCTION_LINE'
                          , INUSE = 'dataItem.INUSE'
                          , UPDATE_BY = 'dataItem.UPDATE_BY'
                          , UPDATE_DATE = CURRENT_TIMESTAMP()
                      WHERE 
                          SCT_SUB_CODE_ID = 'dataItem.SCT_SUB_CODE_ID'
                        `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ID",
      dataItem["SCT_SUB_CODE_ID"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_NAME",
      dataItem["SCT_SUB_CODE_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ALPHABET",
      dataItem["SCT_SUB_CODE_ALPHABET"]
    );
    sql = sql.replaceAll(
      "dataItem.CAN_INPUT_TO_PRODUCTION_LINE",
      dataItem["CAN_INPUT_TO_PRODUCTION_LINE"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);
    return sql;
  };

  // *** Function Delete
  static deleteSctSubCode = async (dataItem) => {
    let sql = `    UPDATE
                          SCT_SUB_CODE
                      SET
                          INUSE = '0'
                          , UPDATE_BY = 'dataItem.UPDATE_BY'
                          , UPDATE_DATE = CURRENT_TIMESTAMP()
                      WHERE
                          SCT_SUB_CODE_ID = 'dataItem.SCT_SUB_CODE_ID'
                        `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_ID",
      dataItem["SCT_SUB_CODE_ID"]
    );
    sql = sql.replaceAll("dataItem.UPDATE_BY", dataItem["UPDATE_BY"]);

    return sql;
  };

  static GetByLikeSctSubCodeNameAndInuse = async (dataItem) => {
    let sql = `            SELECT
                                  SCT_SUB_CODE_ID
                              , SCT_SUB_CODE_NAME 
                              , SCT_SUB_CODE_ALPHABET
                              FROM
                              SCT_SUB_CODE                    
                              WHERE 
                                  SCT_SUB_CODE_NAME LIKE '%dataItem.SCT_SUB_CODE_NAME%'
                              AND INUSE LIKE '%dataItem.INUSE%'
                              ORDER BY 
                              SCT_SUB_CODE_NAME
                              LIMIT 
                              50
                                                  `;

    sql = sql.replaceAll(
      "dataItem.SCT_SUB_CODE_NAME",
      dataItem["SCT_SUB_CODE_NAME"]
    );
    sql = sql.replaceAll("dataItem.INUSE", dataItem["INUSE"]);
    return sql;
  };
}

module.exports = SctSubCodeSQL;

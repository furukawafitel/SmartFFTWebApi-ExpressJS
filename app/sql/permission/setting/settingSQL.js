class SettingSQL {
  static getPermissionAll = (dataItem) => {
    let sql = `  SELECT
                        PERMISSION_ID,
                        USER_GROUP_ID,
                        MENU_ID,
                        APPLICATION_ID,
                        IS_CREATE,
                        IS_UPDATE,
                        IS_DELETE,
                        IS_SEARCH

                    FROM PERMISSION
                  `;
    return sql;
  };

  static getPermissionMenu = (dataItem) => {
    let sql = `   SELECT 
                    PERMISSION_ID,
                    USER_GROUP_ID,
                    MENU_ID,
                    APPLICATION_ID,
                    IF(IS_CREATE, 'true', 'false') AS IS_CREATE,
                    IF(IS_UPDATE, 'true', 'false') AS IS_UPDATE,
                    IF(IS_DELETE, 'true', 'false') AS IS_DELETE,
                    IF(IS_SEARCH, 'true', 'false') AS IS_SEARCH

                FROM PERMISSION 
                WHERE USER_GROUP_ID  =  'dataItem.USER_GROUP_ID' 
                AND APPLICATION_ID = 'dataItem.APPLICATION_ID'
                                `;

    sql = sql.replace("dataItem.USER_GROUP_ID", dataItem["USER_GROUP_ID"]);
    sql = sql.replace("dataItem.APPLICATION_ID", dataItem["APPLICATION_ID"]);

    return sql;
  };

  static getPermissionCheck = (dataItem) => {
    let sql = `  SELECT A.PERMISSION_ID,
                        F.USER_NAME,
                        B.USER_GROUP_NAME,
                        C.MENU_NAME,
                        D.APPLICATION_NAME,
                        A.IS_CREATE,
                        A.IS_UPDATE,
                        A.IS_DELETE,
                        A.IS_SEARCH

                    FROM PERMISSION AS A
                    INNER JOIN USER_GROUP AS B ON (B.USER_GROUP_ID = A.USER_GROUP_ID)
                    INNER JOIN MENU AS C ON (C.MENU_ID = A.MENU_ID)
                    INNER JOIN APPLICATION AS D ON (D.APPLICATION_ID = A.APPLICATION_ID)
                    INNER JOIN USER_SECURITY_HAVE_GROUP AS E ON (E.USER_GROUP_ID = B.USER_GROUP_ID)
                    INNER JOIN USER_SECURITY AS F ON (F.USER_SECURITY_ID = E.USER_SECURITY_ID)

                    WHERE F.USER_NAME = 'dataItem.USER_NAME'
                    AND B.USER_GROUP_NAME = 'dataItem.USER_GROUP_NAME'
                    AND C.MENU_NAME = 'dataItem.MENU_NAME'
                    AND D.APPLICATION_NAME = 'dataItem.APPLICATION_NAME'
                    AND C.MENU_LEAF = 1
                                `;

    sql = sql.replace("dataItem.USER_NAME", dataItem["USER_NAME"]);
    sql = sql.replace("dataItem.USER_GROUP_NAME", dataItem["USER_GROUP_NAME"]);
    sql = sql.replace("dataItem.MENU_NAME", dataItem["MENU_NAME"]);
    sql = sql.replace(
      "dataItem.APPLICATION_NAME",
      dataItem["APPLICATION_NAME"]
    );

    return sql;
  };

  static search = (dataItem) => {
    let sqlList = [];

    let sql = `  SELECT COUNT(*) AS TOTAL_COUNT
                FROM APPLICATION AS A
                INNER JOIN MENU AS B ON (B.APPLICATION_ID = A.APPLICATION_ID)
                LEFT JOIN PERMISSION AS C ON (C.APPLICATION_ID = A.APPLICATION_ID AND C.MENU_ID = B.MENU_ID AND C.USER_GROUP_ID = 'dataItem.USER_GROUP_ID')
                WHERE A.APPLICATION_ID = 'dataItem.APPLICATION_ID'  `;

    sql = sql.replace("dataItem.APPLICATION_ID", dataItem["APPLICATION_ID"]);
    sql = sql.replace("dataItem.USER_GROUP_ID", dataItem["USER_GROUP_ID"]);

    sqlList.push(sql);

    sql = ` SELECT * FROM (SELECT @rank:=0 AS No) AS RANK,
    (
       SELECT 
            (@rank:=@rank + 1) AS RN,
            B.MENU_ID,
            B.MENU_NAME,
            C.PERMISSION_ID,
            IF(C.IS_CREATE, 'true', 'false') AS IS_CREATE,
            IF(C.IS_UPDATE, 'true', 'false') AS IS_UPDATE,
            IF(C.IS_DELETE, 'true', 'false') AS IS_DELETE,
            IF(C.IS_SEARCH, 'true', 'false') AS IS_SEARCH

        FROM APPLICATION AS A
        INNER JOIN MENU AS B ON (B.APPLICATION_ID = A.APPLICATION_ID)
        LEFT JOIN PERMISSION AS C ON (C.APPLICATION_ID = A.APPLICATION_ID AND C.MENU_ID = B.MENU_ID AND C.USER_GROUP_ID = 'dataItem.USER_GROUP_ID')

        WHERE A.APPLICATION_ID = 'dataItem.APPLICATION_ID'
    ) TB
    WHERE RN > 'dataItem.Start' AND RN <= 'dataItem.Limit'  `;

    sql = sql.replace("dataItem.APPLICATION_ID", dataItem["APPLICATION_ID"]);
    sql = sql.replace("dataItem.USER_GROUP_ID", dataItem["USER_GROUP_ID"]);
    sql = sql.replace("dataItem.Start", dataItem["Start"]);
    sql = sql.replace("dataItem.Limit", dataItem["Limit"]);

    sqlList.push(sql);

    sqlList = sqlList.join(";");

    return sqlList;
  };

  static create = (dataItem) => {
    let sql = ` INSERT INTO PERMISSION
                    (
                        PERMISSION_ID,
                        USER_GROUP_ID,
                        APPLICATION_ID,
                        MENU_ID,
                        IS_CREATE,
                        IS_UPDATE,
                        IS_DELETE,
                        IS_SEARCH,
                        DESCRIPTION,
                        CREATE_USER,
                        CREATE_DATE
                    )
                    VALUES
                    (
                        (SELECT IFNULL( MAX(PERMISSION_ID), 0) + 1 AS MAX_VAL FROM PERMISSION MAX_ID),
                        'dataItem.USER_GROUP_ID',
                        'dataItem.APPLICATION_ID',
                        'dataItem.MENU_ID',
                        'dataItem.IS_CREATE',
                        'dataItem.IS_UPDATE',
                        'dataItem.IS_DELETE',
                        'dataItem.IS_SEARCH',
                        'dataItem.DESCRIPTION',
                        'dataItem.CREATE_USER',
                        CURRENT_TIMESTAMP()
                    )
                                `;

    sql = sql.replace("dataItem.USER_GROUP_ID", dataItem["USER_GROUP_ID"]);
    sql = sql.replace("dataItem.APPLICATION_ID", dataItem["APPLICATION_ID"]);
    sql = sql.replace("dataItem.MENU_ID", dataItem["MENU_ID"]);
    sql = sql.replace("dataItem.IS_CREATE", dataItem["IS_CREATE"]);
    sql = sql.replace("dataItem.IS_UPDATE", dataItem["IS_UPDATE"]);
    sql = sql.replace("dataItem.IS_DELETE", dataItem["IS_DELETE"]);
    sql = sql.replace("dataItem.IS_SEARCH", dataItem["IS_SEARCH"]);
    sql = sql.replace("dataItem.DESCRIPTION", dataItem["DESCRIPTION"]);
    sql = sql.replace("dataItem.CREATE_USER", dataItem["CREATE_USER"]);

    return sql;
  };

  static updateByUserGroupIdApplicationIdMenuId = (dataItem) => {
    let sql = `    UPDATE PERMISSION SET
                    IS_CREATE = 'dataItem.IS_CREATE',
                    IS_UPDATE = 'dataItem.IS_UPDATE',
                    IS_DELETE = 'dataItem.IS_DELETE',
                    IS_SEARCH = 'dataItem.IS_SEARCH',
                    DESCRIPTION = 'dataItem.DESCRIPTION',
                    LAST_USER = 'dataItem.LAST_USER',
                    LAST_DATE = CURRENT_TIMESTAMP()

                WHERE APPLICATION_ID = 'dataItem.APPLICATION_ID'
                AND USER_GROUP_ID = 'dataItem.USER_GROUP_ID'
                AND MENU_ID = 'dataItem.MENU_ID'
                            `;

    sql = sql.replace("dataItem.APPLICATION_ID", dataItem["APPLICATION_ID"]);
    sql = sql.replace("dataItem.USER_GROUP_ID", dataItem["USER_GROUP_ID"]);
    sql = sql.replace("dataItem.MENU_ID", dataItem["MENU_ID"]);
    sql = sql.replace("dataItem.IS_CREATE", dataItem["IS_CREATE"]);
    sql = sql.replace("dataItem.IS_UPDATE", dataItem["IS_UPDATE"]);
    sql = sql.replace("dataItem.IS_DELETE", dataItem["IS_DELETE"]);
    sql = sql.replace("dataItem.IS_SEARCH", dataItem["IS_SEARCH"]);
    sql = sql.replace("dataItem.DESCRIPTION", dataItem["DESCRIPTION"]);
    sql = sql.replace("dataItem.LAST_USER", dataItem["LAST_USER"]);
    return sql;
  };

  static update = (dataItem) => {
    let sql = `     UPDATE PERMISSION SET
                    IS_CREATE = 'dataItem.IS_CREATE',
                    IS_UPDATE = 'dataItem.IS_UPDATE',
                    IS_DELETE = 'dataItem.IS_DELETE',
                    IS_SEARCH = 'dataItem.IS_SEARCH',
                    DESCRIPTION = 'dataItem.DESCRIPTION',
                    LAST_USER = 'dataItem.LAST_USER',
                    LAST_DATE = CURRENT_TIMESTAMP()
                WHERE PERMISSION_ID = 'dataItem.PERMISSION_ID'
              `;

    sql = sql.replace("dataItem.PERMISSION_NAME", dataItem["PERMISSION_NAME"]);
    sql = sql.replace("dataItem.PERMISSION_URL", dataItem["PERMISSION_URL"]);
    sql = sql.replace("dataItem.DESCRIPTION", dataItem["DESCRIPTION"]);
    sql = sql.replace("dataItem.LAST_USER", dataItem["LAST_USER"]);
    sql = sql.replace("dataItem.PERMISSION_ID", dataItem["PERMISSION_ID"]);

    return sql;
  };

  static delete = (dataItem) => {
    let sql = `    DELETE FROM PERMISSION
                   WHERE PERMISSION_ID = 'dataItem.PERMISSION_ID'
              `;

    sql = sql.replace("dataItem.PERMISSION_ID", dataItem["PERMISSION_ID"]);

    return sql;
  };

  static deleteByUserGroupIdAndApplicationId = (dataItem) => {
    let sql = `   DELETE FROM PERMISSION
                    WHERE APPLICATION_ID = 'dataItem.APPLICATION_ID'
                    AND USER_GROUP_ID = 'dataItem.USER_GROUP_ID'
              `;

    sql = sql.replace("dataItem.APPLICATION_ID", dataItem["APPLICATION_ID"]);
    sql = sql.replace("dataItem.USER_GROUP_ID", dataItem["USER_GROUP_ID"]);
    return sql;
  };
}

module.exports = SettingSQL;

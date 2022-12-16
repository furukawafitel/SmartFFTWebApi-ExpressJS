// ** SQLFactory

// *** Declare Function SQL
class PermissionSQL {
  // *** get permissionCheck
  static getPermissionCheck = async (dataItem) => {
    let sql = ` SELECT A.PERMISSION_ID,
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

    sql = sql.replaceAll("dataItem.USER_NAME", dataItem["USER_NAME"]);
    sql = sql.replaceAll(
      "dataItem.USER_GROUP_NAME",
      dataItem["USER_GROUP_NAME"]
    );
    sql = sql.replaceAll("dataItem.MENU_NAME", dataItem["MENU_NAME"]);
    sql = sql.replaceAll(
      "dataItem.APPLICATION_NAME",
      dataItem["APPLICATION_NAME"]
    );
    return sql;
  };

  // *** get Signin
  static signin = async (dataItem) => {
    let sql = ` SELECT USER_SECURITY_ID ,
                      USER_NAME ,
                      USER_PASSWORD   
                FROM USER_SECURITY 
                WHERE USER_NAME =  'dataItem.USER_NAME' 
                AND   USER_PASSWORD = 'dataItem.USER_PASSWORD'
              `;

    sql = sql.replaceAll("dataItem.USER_NAME", dataItem["USER_NAME"]);
    sql = sql.replaceAll("dataItem.USER_PASSWORD", dataItem["USER_PASSWORD"]);

    return sql;
  };

  // *** getUserGroup
  static getUserGroup = async (dataItem) => {
    let sql = `  SELECT  DISTINCT(B.USER_GROUP_ID) AS USER_GROUP_ID,
                         B.USER_GROUP_NAME
                FROM USER_SECURITY_HAVE_GROUP AS A
                INNER JOIN USER_GROUP AS B ON (B.USER_GROUP_ID = A.USER_GROUP_ID)
                INNER JOIN USER_SECURITY AS C ON (C.USER_SECURITY_ID = A.USER_SECURITY_ID)

                WHERE C.USER_NAME = 'dataItem.USER_NAME'
              `;

    sql = sql.replaceAll("dataItem.USER_NAME", dataItem["USER_NAME"]);
    return sql;
  };

  // *** getMenu
  static getLoginMenu = async (dataItem) => {
    let sql = `  SELECT A.APPLICATION_ID,
                        A.APPLICATION_NAME,
                        B.MENU_ID,
                        B.MENU_NAME,
                        B.MENU_LEAF,
                        B.MENU_PARENT_ID,
                        C.MENU_NAME AS MENU_PARENT_NAME

                FROM APPLICATION AS A
                INNER JOIN MENU AS B ON (B.APPLICATION_ID = A.APPLICATION_ID)
                LEFT JOIN MENU AS C ON (C.MENU_ID = B.MENU_PARENT_ID)
                INNER JOIN PERMISSION AS D ON (D.MENU_ID = B.MENU_ID)
                INNER JOIN USER_GROUP AS E ON (E.USER_GROUP_ID = D.USER_GROUP_ID)
                INNER JOIN USER_SECURITY_HAVE_GROUP AS F ON (F.USER_GROUP_ID = E.USER_GROUP_ID) 
                INNER JOIN USER_SECURITY AS G ON (G.USER_SECURITY_ID = F.USER_SECURITY_ID)

                WHERE A.APPLICATION_NAME = 'dataItem.APPLICATION_NAME'
                AND E.USER_GROUP_NAME = 'dataItem.USER_GROUP_NAME'
                AND G.USER_NAME = 'dataItem.USER_NAME'

                ORDER BY B.MENU_PARENT_ID, B.MENU_ID
              `;

    sql = sql.replaceAll(
      "dataItem.APPLICATION_NAME",
      dataItem["APPLICATION_NAME"]
    );
    sql = sql.replaceAll(
      "dataItem.USER_GROUP_NAME",
      dataItem["USER_GROUP_NAME"]
    );
    sql = sql.replaceAll("dataItem.USER_NAME", dataItem["USER_NAME"]);
    return sql;
  };
}

module.exports = PermissionSQL;

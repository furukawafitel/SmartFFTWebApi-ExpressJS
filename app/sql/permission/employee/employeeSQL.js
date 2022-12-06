// ** SQLFactory

// *** Declare Function SQL
class EmployeeSQL {
  static getEmployeeAll = async () => {
    let sql = `   SELECT EmpCode AS EMP_CODE,
                        EmpName AS EMP_NAME,
                        EmpSurname AS EMP_SURNAME,
                        EmpPosition AS EMP_POSITION,
                        EmpDept AS EMP_DEPT,
                        EmpEmail AS EMP_EMAIL,
                        EmpCodeResign AS EMP_RESIGN,
                        EmpPcode AS EMP_PCODE,
                        EmpStartwork AS EMP_STARTWORK,
                        UpdateTime AS UPDATE_TIME

                    FROM mfg.INFO_EMPLOYEES
              `;
    return sql;
  };

  static getEmployeeByEmpCode = async (dataItem) => {
    let sql = `    SELECT EmpCode AS EMP_CODE,
                    EmpName AS EMP_NAME,
                    EmpSurname AS EMP_SURNAME,
                    EmpPosition AS EMP_POSITION,
                    EmpDept AS EMP_DEPT,
                    EmpEmail AS EMP_EMAIL,
                    EmpCodeResign AS EMP_RESIGN,
                    EmpPcode AS EMP_PCODE,
                    EmpStartwork AS EMP_STARTWORK,
                    UpdateTime AS UPDATE_TIME

                FROM mfg.INFO_EMPLOYEES

                WHERE EmpCode = 'dataItem.EMP_CODE'
                AND (EmpCodeResign IS NULL OR EmpCodeResign = '')
              `;

    sql = sql.replace("dataItem.EMP_CODE", dataItem["USER_NAME"]);

    return sql;
  };
}

module.exports = EmployeeSQL;

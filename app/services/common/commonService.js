// ** Services

const MySQLExecute = require("../../businessData/dbExecute");
const CommonSQL = require("../../sql/common/commonSQL");

// ** get connect permisision Database
const configDb = "SmartFFT";

class CommonService {
  // static async GetDataExcel(dataItem, result) {
  //   let query = await CommonSQL.GetDataExcel(dataItem);
  //   let resultData = await MySQLExecute.searchList(query, result, configDb);
  //   return resultData;
  // }

  static async GetYearNow(dataItem, result) {
    let query = await CommonSQL.GetYearNow();
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }

  static async GetByLikeMonthShortNameEnglish(dataItem, result) {
    let query = await CommonSQL.GetByLikeMonthShortNameEnglish(dataItem);
    let resultData = await MySQLExecute.search(query, result, configDb);
    return resultData;
  }
}

module.exports = CommonService;

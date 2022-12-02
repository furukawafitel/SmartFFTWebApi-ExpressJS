// ** Services

const MySQLExecute = require("../../businessData/dbExecute");
const CommonSQL = require("../../sql/common/commonSQL");

// ** get connect permisision Database
const configDb = "SmartFFT";

class CommonService {
  static async GetDataExcel(dataItem, result) {
    let query = await CommonSQL.GetDataExcel(dataItem);
    let resultData = await MySQLExecute.searchList(query, result, configDb);
    return resultData;
  }
}

module.exports = CommonService;

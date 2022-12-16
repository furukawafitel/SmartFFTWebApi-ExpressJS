// ** MODEL

const CommonService = require("../../services/common/commonService");

// constructor
class CommonModels {
  // // ** Get ExcelData
  // static async GetDataExcel(dataItem, result) {
  //   let resultData = await CommonService.GetDataExcel(dataItem, result);
  //   return resultData;
  // }

  static async GetYearNow(dataItem, result) {
    let resultData = await CommonService.GetYearNow(dataItem, result);
    return resultData;
  }

  static async GetByLikeMonthShortNameEnglish(dataItem, result) {
    let resultData = await CommonService.GetByLikeMonthShortNameEnglish(
      dataItem,
      result
    );
    return resultData;
  }
}

module.exports = CommonModels;

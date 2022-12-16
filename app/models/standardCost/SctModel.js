// ** Model

const SctService = require("../../services/standardCost/SctService");

class SctModels {
  // ** Get ExcelData
  static async GetDataExcel(dataItem, result) {
    let resultData = await SctService.GetDataExcel(dataItem, result);
    return resultData;
  }
  static async getSct(dataItem, result) {
    let resultData = await SctService.getSct(dataItem, result);
    return resultData;
  }

  static async searchSct(dataItem, result) {
    let resultData = await SctService.searchSct(dataItem, result);
    return resultData;
  }

  static async createSct(dataItem, result) {
    let resultData = await SctService.createSct(dataItem, result);
    return resultData;
  }

  static async updateSct(dataItem, result) {
    let resultData = await SctService.updateSct(dataItem, result);
    return resultData;
  }

  static async deleteSct(dataItem, result) {
    let resultData = await SctService.deleteSct(dataItem, result);
    return resultData;
  }

  static async GetByLikeSctNameAndInuse(dataItem, result) {
    let resultData = await SctService.GetByLikeSctNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = SctModels;

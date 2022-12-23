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

  static async createSctStep1(dataItem, result) {
    let resultData = await SctService.createSctStep1(dataItem, result);
    return resultData;
  }

  static async createSctStep2(dataItem, result) {
    let resultData = await SctService.createSctStep2(dataItem, result);
    return resultData;
  }

  static async createSctStep3(dataItem, result) {
    let resultData = await SctService.createSctStep3(dataItem, result);
    return resultData;
  }

  static async createSctStep4(dataItem, result) {
    let resultData = await SctService.createSctStep4(dataItem, result);
    return resultData;
  }

  static async updateSctStep1(dataItem, result) {
    let resultData = await SctService.updateSctStep1(dataItem, result);
    return resultData;
  }

  static async updateSctStep2(dataItem, result) {
    let resultData = await SctService.updateSctStep2(dataItem, result);
    return resultData;
  }

  static async updateSctStep3(dataItem, result) {
    let resultData = await SctService.updateSctStep3(dataItem, result);
    return resultData;
  }

  static async updateSctStep4(dataItem, result) {
    let resultData = await SctService.updateSctStep4(dataItem, result);
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

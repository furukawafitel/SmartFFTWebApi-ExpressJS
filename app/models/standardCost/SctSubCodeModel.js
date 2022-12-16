// ** Model

const SctSubCodeService = require("../../services/standardCost/SctSubCodeService");

class SctSubCodeModels {
  static async getSctSubCode(dataItem, result) {
    let resultData = await SctSubCodeService.getSctSubCode(dataItem, result);
    return resultData;
  }

  static async searchSctSubCode(dataItem, result) {
    let resultData = await SctSubCodeService.searchSctSubCode(dataItem, result);
    return resultData;
  }

  static async createSctSubCode(dataItem, result) {
    let resultData = await SctSubCodeService.createSctSubCode(dataItem, result);
    return resultData;
  }

  static async updateSctSubCode(dataItem, result) {
    let resultData = await SctSubCodeService.updateSctSubCode(dataItem, result);
    return resultData;
  }

  static async deleteSctSubCode(dataItem, result) {
    let resultData = await SctSubCodeService.deleteSctSubCode(dataItem, result);
    return resultData;
  }

  static async GetByLikeSctSubCodeNameAndInuse(dataItem, result) {
    let resultData = await SctSubCodeService.GetByLikeSctSubCodeNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = SctSubCodeModels;

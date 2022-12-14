// ** Model

const VenderService = require("../../services/itemMaster/venderService");

class VenderModels {
  static async getVender(dataItem, result) {
    let resultData = await VenderService.getVender(dataItem, result);
    return resultData;
  }

  static async searchVender(dataItem, result) {
    let resultData = await VenderService.searchVender(dataItem, result);
    return resultData;
  }

  static async createVender(dataItem, result) {
    let resultData = await VenderService.createVender(dataItem, result);
    return resultData;
  }

  static async updateVender(dataItem, result) {
    let resultData = await VenderService.updateVender(dataItem, result);
    return resultData;
  }

  static async deleteVender(dataItem, result) {
    let resultData = await VenderService.deleteVender(dataItem, result);
    return resultData;
  }

  static async GetByLikeVendorName(dataItem, result) {
    let resultData = await VenderService.GetByLikeVendorName(dataItem, result);
    return resultData;
  }

  static async GetByLikeVendorAlphabetAndInuse(dataItem, result) {
    let resultData = await VenderService.GetByLikeVendorAlphabetAndInuse(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = VenderModels;

// ** Model

const BomService = require("../../services/bom/BomService");

class BomModels {
  static async getBom(dataItem, result) {
    let resultData = await BomService.getBom(dataItem, result);
    return resultData;
  }

  static async searchBom(dataItem, result) {
    let resultData = await BomService.searchBom(dataItem, result);
    return resultData;
  }

  static async createBom(dataItem, result) {
    let resultData = await BomService.createBom(dataItem, result);
    return resultData;
  }

  static async updateBom(dataItem, result) {
    let resultData = await BomService.updateBom(dataItem, result);
    return resultData;
  }

  static async deleteBom(dataItem, result) {
    let resultData = await BomService.deleteBom(dataItem, result);
    return resultData;
  }

  static async GetByLikeBomName(dataItem, result) {
    let resultData = await BomService.GetByLikeBomName(dataItem, result);
    return resultData;
  }

  static async SearchByProductTypeId(dataItem, result) {
    let resultData = await BomService.SearchByProductTypeId(dataItem, result);
    return resultData;
  }
}
module.exports = BomModels;

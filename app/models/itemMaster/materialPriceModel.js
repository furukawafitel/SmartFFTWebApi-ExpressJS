// ** Model

const MaterialPriceService = require("../../services/itemMaster/materialPriceService");

class MaterialPriceModels {
  static async getMaterialPrice(dataItem, result) {
    let resultData = await MaterialPriceService.getMaterialPrice(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchMaterialPrice(dataItem, result) {
    let resultData = await MaterialPriceService.searchMaterialPrice(
      dataItem,
      result
    );
    return resultData;
  }

  static async createMaterialPrice(dataItem, result) {
    let resultData = await MaterialPriceService.createMaterialPrice(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateMaterialPrice(dataItem, result) {
    let resultData = await MaterialPriceService.updateMaterialPrice(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteMaterialPrice(dataItem, result) {
    let resultData = await MaterialPriceService.deleteMaterialPrice(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeMaterialPriceNameAndInuse(dataItem, result) {
    let resultData =
      await MaterialPriceService.GetByMaterialIdAndFiscalYearAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = MaterialPriceModels;

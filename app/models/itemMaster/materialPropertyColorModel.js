// ** Model

const MaterialPropertyColorService = require("../../services/itemMaster/materialPropertyColorService");

class MaterialPropertyColorModels {
  static async getMaterialPropertyColor(dataItem, result) {
    let resultData =
      await MaterialPropertyColorService.getMaterialPropertyColor(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchMaterialPropertyColor(dataItem, result) {
    let resultData =
      await MaterialPropertyColorService.searchMaterialPropertyColor(
        dataItem,
        result
      );
    return resultData;
  }

  static async createMaterialPropertyColor(dataItem, result) {
    let resultData =
      await MaterialPropertyColorService.createMaterialPropertyColor(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateMaterialPropertyColor(dataItem, result) {
    let resultData =
      await MaterialPropertyColorService.updateMaterialPropertyColor(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteMaterialPropertyColor(dataItem, result) {
    let resultData =
      await MaterialPropertyColorService.deleteMaterialPropertyColor(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeMaterialPropertyColorName(dataItem, result) {
    let resultData =
      await MaterialPropertyColorService.GetByLikeMaterialPropertyColorName(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = MaterialPropertyColorModels;

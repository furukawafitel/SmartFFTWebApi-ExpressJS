// ** Model

const MaterialPropertyMadeByService = require("../../services/itemMaster/materialPropertyMadeByService");

class MaterialPropertyMadeByModels {
  static async getMaterialPropertyMadeBy(dataItem, result) {
    let resultData =
      await MaterialPropertyMadeByService.getMaterialPropertyMadeBy(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchMaterialPropertyMadeBy(dataItem, result) {
    let resultData =
      await MaterialPropertyMadeByService.searchMaterialPropertyMadeBy(
        dataItem,
        result
      );
    return resultData;
  }

  static async createMaterialPropertyMadeBy(dataItem, result) {
    let resultData =
      await MaterialPropertyMadeByService.createMaterialPropertyMadeBy(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateMaterialPropertyMadeBy(dataItem, result) {
    let resultData =
      await MaterialPropertyMadeByService.updateMaterialPropertyMadeBy(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteMaterialPropertyMadeBy(dataItem, result) {
    let resultData =
      await MaterialPropertyMadeByService.deleteMaterialPropertyMadeBy(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeMaterialPropertyMadeByName(dataItem, result) {
    let resultData =
      await MaterialPropertyMadeByService.GetByLikeMaterialPropertyMadeByName(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = MaterialPropertyMadeByModels;

// ** Model

const MaterialService = require("../../services/itemMaster/materialService");

class MaterialModels {
  static async getMaterial(dataItem, result) {
    let resultData = await MaterialService.getMaterial(dataItem, result);
    return resultData;
  }

  static async searchMaterial(dataItem, result) {
    let resultData = await MaterialService.searchMaterial(dataItem, result);
    return resultData;
  }

  static async createMaterial(dataItem, result) {
    let resultData = await MaterialService.createMaterial(dataItem, result);
    return resultData;
  }

  static async updateMaterial(dataItem, result) {
    let resultData = await MaterialService.updateMaterial(dataItem, result);
    return resultData;
  }

  static async deleteMaterial(dataItem, result) {
    let resultData = await MaterialService.deleteMaterial(dataItem, result);
    return resultData;
  }

  static async GetByLikeMaterialNameAndInuse(dataItem, result) {
    let resultData = await MaterialService.GetByLikeMaterialNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetCountByMaterialCategoryId(dataItem, result) {
    let resultData = await MaterialService.GetCountByMaterialCategoryId(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetCountByMaterialPurposeId(dataItem, result) {
    let resultData = await MaterialService.GetCountByMaterialPurposeId(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetCountByMaterialTypeId(dataItem, result) {
    let resultData = await MaterialService.GetCountByMaterialTypeId(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetCountByVendorId(dataItem, result) {
    let resultData = await MaterialService.GetCountByVendorId(dataItem, result);
    return resultData;
  }

  static async GetCountByMakerId(dataItem, result) {
    let resultData = await MaterialService.GetCountByMakerId(dataItem, result);
    return resultData;
  }

  static async GetImageByItemCodeForSupportMesAndOldSystem(dataItem, result) {
    let resultData =
      await MaterialService.GetImageByItemCodeForSupportMesAndOldSystem(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = MaterialModels;

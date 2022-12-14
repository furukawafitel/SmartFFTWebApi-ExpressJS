// ** Model

const MaterialPurposeService = require("../../services/itemMaster/materialPurposeService");

class MaterialPurposeModels {
  static async getMaterialPurpose(dataItem, result) {
    let resultData = await MaterialPurposeService.getMaterialPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchMaterialPurpose(dataItem, result) {
    let resultData = await MaterialPurposeService.searchMaterialPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async createMaterialPurpose(dataItem, result) {
    let resultData = await MaterialPurposeService.createMaterialPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateMaterialPurpose(dataItem, result) {
    let resultData = await MaterialPurposeService.updateMaterialPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteMaterialPurpose(dataItem, result) {
    let resultData = await MaterialPurposeService.deleteMaterialPurpose(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeMaterialPurposeNameAndInuse(dataItem, result) {
    let resultData =
      await MaterialPurposeService.GetByLikeMaterialPurposeNameAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = MaterialPurposeModels;

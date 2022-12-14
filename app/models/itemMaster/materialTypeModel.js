// ** Model

const MaterialTypeService = require("../../services/itemMaster/materialTypeService");

class MaterialTypeModels {
  static async getMaterialType(dataItem, result) {
    let resultData = await MaterialTypeService.getMaterialType(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchMaterialType(dataItem, result) {
    let resultData = await MaterialTypeService.searchMaterialType(
      dataItem,
      result
    );
    return resultData;
  }

  static async createMaterialType(dataItem, result) {
    let resultData = await MaterialTypeService.createMaterialType(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateMaterialType(dataItem, result) {
    let resultData = await MaterialTypeService.updateMaterialType(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteMaterialType(dataItem, result) {
    let resultData = await MaterialTypeService.deleteMaterialType(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeMaterialTypeName(dataItem, result) {
    let resultData = await MaterialTypeService.GetByLikeMaterialTypeName(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeMaterialTypeNameAndMaterialTypeCategoryId(
    dataItem,
    result
  ) {
    let resultData =
      await MaterialTypeService.GetByLikeMaterialTypeNameAndMaterialTypeCategoryId(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = MaterialTypeModels;

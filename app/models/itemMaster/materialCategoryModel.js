// ** Model

const MaterialCategoryService = require("../../services/itemMaster/materialCategoryService");

class MaterialCategoryModels {
  static async getMaterialCategory(dataItem, result) {
    let resultData = await MaterialCategoryService.getMaterialCategory(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchMaterialCategory(dataItem, result) {
    let resultData = await MaterialCategoryService.searchMaterialCategory(
      dataItem,
      result
    );
    return resultData;
  }

  static async createMaterialCategory(dataItem, result) {
    let resultData = await MaterialCategoryService.createMaterialCategory(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateMaterialCategory(dataItem, result) {
    let resultData = await MaterialCategoryService.updateMaterialCategory(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteMaterialCategory(dataItem, result) {
    let resultData = await MaterialCategoryService.deleteMaterialCategory(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeMaterialCategoryNameAndInuse(dataItem, result) {
    let resultData =
      await MaterialCategoryService.GetByLikeMaterialCategoryNameAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetForBomByLikeMaterialCategoryNameAndInuse(dataItem, result) {
    let resultData =
      await MaterialCategoryService.GetForBomByLikeMaterialCategoryNameAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeMaterialCategoryNameAndPurchaseModuleIdAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await MaterialCategoryService.GetByLikeMaterialCategoryNameAndPurchaseModuleIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetMaterialCategoryCanBeSoldByLikeMaterialCategoryNameAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await MaterialCategoryService.GetMaterialCategoryCanBeSoldByLikeMaterialCategoryNameAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetAllByInuse(dataItem, result) {
    let resultData = await MaterialCategoryService.GetAllByInuse(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = MaterialCategoryModels;

// ** Model

const MaterialPropertyShapeService = require("../../services/itemMaster/materialPropertyShapeService");

class MaterialPropertyShapeModels {
  static async getMaterialPropertyShape(dataItem, result) {
    let resultData =
      await MaterialPropertyShapeService.getMaterialPropertyShape(
        dataItem,
        result
      );
    return resultData;
  }

  static async searchMaterialPropertyShape(dataItem, result) {
    let resultData =
      await MaterialPropertyShapeService.searchMaterialPropertyShape(
        dataItem,
        result
      );
    return resultData;
  }

  static async createMaterialPropertyShape(dataItem, result) {
    let resultData =
      await MaterialPropertyShapeService.createMaterialPropertyShape(
        dataItem,
        result
      );
    return resultData;
  }

  static async updateMaterialPropertyShape(dataItem, result) {
    let resultData =
      await MaterialPropertyShapeService.updateMaterialPropertyShape(
        dataItem,
        result
      );
    return resultData;
  }

  static async deleteMaterialPropertyShape(dataItem, result) {
    let resultData =
      await MaterialPropertyShapeService.deleteMaterialPropertyShape(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeMaterialPropertyShapeName(dataItem, result) {
    let resultData =
      await MaterialPropertyShapeService.GetByLikeMaterialPropertyShapeName(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = MaterialPropertyShapeModels;

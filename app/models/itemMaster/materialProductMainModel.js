// ** Model

const MaterialProductMainService = require("../../services/itemMaster/materialProductMainService");

class MaterialProductMainModels {
  static async createMaterialProductMain(dataItem, result) {
    let resultData = await MaterialProductMainService.createMaterialProductMain(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteMaterialProductMain(dataItem, result) {
    let resultData = await MaterialProductMainService.deleteMaterialProductMain(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = MaterialProductMainModels;

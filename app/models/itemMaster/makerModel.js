// ** Model

const MakerService = require("../../services/itemMaster/makerService");

class MakerModels {
  static async getMaker(dataItem, result) {
    let resultData = await MakerService.getMaker(dataItem, result);
    return resultData;
  }

  static async searchMaker(dataItem, result) {
    let resultData = await MakerService.searchMaker(dataItem, result);
    return resultData;
  }

  static async createMaker(dataItem, result) {
    let resultData = await MakerService.createMaker(dataItem, result);
    return resultData;
  }

  static async updateMaker(dataItem, result) {
    let resultData = await MakerService.updateMaker(dataItem, result);
    return resultData;
  }

  static async deleteMaker(dataItem, result) {
    let resultData = await MakerService.deleteMaker(dataItem, result);
    return resultData;
  }

  static async GetByLikeMakerNameAndInuse(dataItem, result) {
    let resultData = await MakerService.GetByLikeMakerNameAndInuse(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = MakerModels;

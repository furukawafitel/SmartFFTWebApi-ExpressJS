// ** Model

const PartNoService = require("../../services/customerCondition/partNoService");

class PartNoModels {
  static async getPartNo(dataItem, result) {
    let resultData = await PartNoService.getPartNo(dataItem, result);
    return resultData;
  }

  static async searchPartNo(dataItem, result) {
    let resultData = await PartNoService.searchPartNo(dataItem, result);
    return resultData;
  }

  static async createPartNo(dataItem, result) {
    let resultData = await PartNoService.createPartNo(dataItem, result);
    return resultData;
  }

  static async updatePartNo(dataItem, result) {
    let resultData = await PartNoService.updatePartNo(dataItem, result);
    return resultData;
  }

  static async deletePartNo(dataItem, result) {
    let resultData = await PartNoService.deletePartNo(dataItem, result);
    return resultData;
  }

  static async GetByLikePartNoCodeAndInuse(dataItem, result) {
    let resultData = await PartNoService.GetByLikePartNoCodeAndInuse(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikePartNoCodeAndProductMainIdAndInuse(dataItem, result) {
    let resultData =
      await PartNoService.GetByLikePartNoCodeAndProductMainIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = PartNoModels;

// ** Model

const SpecificationService = require("../../services/customerCondition/SpecificationRoutes");

class SpecificationModels {
  static async getSpecification(dataItem, result) {
    let resultData = await SpecificationService.getSpecification(
      dataItem,
      result
    );
    return resultData;
  }

  static async searchSpecification(dataItem, result) {
    let resultData = await SpecificationService.searchSpecification(
      dataItem,
      result
    );
    return resultData;
  }

  static async createSpecification(dataItem, result) {
    let resultData = await SpecificationService.createSpecification(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateSpecification(dataItem, result) {
    let resultData = await SpecificationService.updateSpecification(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteSpecification(dataItem, result) {
    let resultData = await SpecificationService.deleteSpecification(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeSpecificationCodeAndInuse(dataItem, result) {
    let resultData =
      await SpecificationService.GetByLikeSpecificationCodeAndInuse(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeSpecificationCodeAndProductMainIdAndInuse(
    dataItem,
    result
  ) {
    let resultData =
      await SpecificationService.GetByLikeSpecificationCodeAndProductMainIdAndInuse(
        dataItem,
        result
      );
    return resultData;
  }
}
module.exports = SpecificationModels;

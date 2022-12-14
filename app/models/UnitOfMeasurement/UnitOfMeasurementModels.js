// ** Model

const UnitOfMeasurementService = require("../../services/UnitOfMeasurement/UnitOfMeasurementService");

class UnitOfMeasurementModels {
  static async getUnit(dataItem, result) {
    let resultData = await UnitOfMeasurementService.getUnit(dataItem, result);
    return resultData;
  }

  static async searchUnit(dataItem, result) {
    let resultData = await UnitOfMeasurementService.searchUnit(
      dataItem,
      result
    );
    return resultData;
  }

  static async createUnit(dataItem, result) {
    let resultData = await UnitOfMeasurementService.createUnit(
      dataItem,
      result
    );
    return resultData;
  }

  static async updateUnit(dataItem, result) {
    let resultData = await UnitOfMeasurementService.updateUnit(
      dataItem,
      result
    );
    return resultData;
  }

  static async deleteUnit(dataItem, result) {
    let resultData = await UnitOfMeasurementService.deleteUnit(
      dataItem,
      result
    );
    return resultData;
  }

  static async GetByLikeUnitOfMeasurementName(dataItem, result) {
    let resultData =
      await UnitOfMeasurementService.GetByLikeUnitOfMeasurementName(
        dataItem,
        result
      );
    return resultData;
  }

  static async GetByLikeSymbol(dataItem, result) {
    let resultData = await UnitOfMeasurementService.GetByLikeSymbol(
      dataItem,
      result
    );
    return resultData;
  }
}
module.exports = UnitOfMeasurementModels;

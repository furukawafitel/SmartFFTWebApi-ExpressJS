// ** Services

const UnitOfMeasurementSQL = require("../../sql/UnitOfMeasurement/UnitOfMeasurementSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class UnitOfMeasurementService {
  static async getUnit(dataItem, result) {
    let query = await UnitOfMeasurementSQL.getUnit(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async searchUnit(dataItem, result) {
    let resultData = [];
    let query;
    query = await UnitOfMeasurementSQL.searchUnit(dataItem);
    resultData = MySQLExecute.searchList(query, result);

    return resultData;
  }

  static async createUnit(dataItem, result) {
    let query = await UnitOfMeasurementSQL.createUnit(dataItem);
    let resultData = MySQLExecute.create(query, result);
    return resultData;
  }

  static async updateUnit(dataItem, result) {
    let query = await UnitOfMeasurementSQL.updateUnit(dataItem);
    let resultData = MySQLExecute.update(query, result);
    return resultData;
  }

  static async deleteUnit(dataItem, result) {
    let query = await UnitOfMeasurementSQL.deleteUnit(dataItem);
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }

  static async GetByLikeUnitOfMeasurementName(dataItem, result) {
    let query = await UnitOfMeasurementSQL.GetByLikeUnitOfMeasurementName(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async GetByLikeSymbol(dataItem, result) {
    let query = await UnitOfMeasurementSQL.GetByLikeSymbol(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = UnitOfMeasurementService;

// ** Services

const MaterialProductMainSQL = require("../../sql/itemMaster/materialProductMainSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class MaterialProductMainService {
  static async createMaterialProductMain(dataItem, result) {
    let query = await MaterialProductMainSQL.createMaterialProductMain(
      dataItem
    );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }

  static async deleteMaterialProductMain(dataItem, result) {
    let query = await MaterialProductMainSQL.deleteMaterialProductMain(
      dataItem
    );
    let resultData = MySQLExecute.delete(query, result);
    return resultData;
  }
}
module.exports = MaterialProductMainService;

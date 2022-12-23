// ** Services

const BomFlowProcessMaterialUsageMaterialPriceSQL = require("../../sql/common/BomFlowProcessMaterialUsageMaterialPriceSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class BomFlowProcessMaterialUsageMaterialPriceService {
  static async GetByBomIdAndFlowProcessIdAndLikeInuse(dataItem, result) {
    let query =
      await BomFlowProcessMaterialUsageMaterialPriceSQL.GetByBomIdAndFlowProcessIdAndLikeInuse(
        dataItem
      );
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = BomFlowProcessMaterialUsageMaterialPriceService;

// ** Services

const flowFlowProcessSQL = require("../../sql/common/flowFlowProcessSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class Flow_FlowProcessService {
  static async GetByBomId(dataItem, result) {
    let query = await flowFlowProcessSQL.GetByBomId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = Flow_FlowProcessService;

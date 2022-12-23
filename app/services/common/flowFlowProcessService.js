// ** Services

const Flow_FlowProcessService = require("../../sql/common/flowFlowProcessSQL");
const MySQLExecute = require("../../businessData/dbExecute");

// **** constructor
class Flow_FlowProcessService {
  static async GetByBomId(dataItem, result) {
    let query = await Flow_FlowProcessService.GetByBomId(dataItem);
    let resultData = MySQLExecute.search(query, result);
    return resultData;
  }
}
module.exports = Flow_FlowProcessService;

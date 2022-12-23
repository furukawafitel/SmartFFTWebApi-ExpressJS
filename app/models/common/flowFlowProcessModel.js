// ** Model

const Flow_FlowProcessService = require("../../services/common/flowFlowProcessService");

class Flow_FlowProcessModel {
  static async GetByBomId(dataItem, result) {
    let resultData = await Flow_FlowProcessService.GetByBomId(dataItem, result);
    return resultData;
  }
}
module.exports = Flow_FlowProcessModel;

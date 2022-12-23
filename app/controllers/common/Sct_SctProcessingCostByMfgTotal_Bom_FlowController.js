const SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgModels = require("../../models/common/SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgModel");

// ** Get productMain
const GetBySctId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgModels.GetBySctId(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data.length; i++) {
            data["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search GetBySctId",
            TotalCountOnDb: ""
          });
        }
      );
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

module.exports = {
  GetBySctId
};

const BomFlowProcessMaterialUsageMaterialPriceModels = require("../../models/common/BomFlowProcessMaterialUsageMaterialPriceModel");

const GetByBomIdAndFlowProcessIdAndLikeInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      BomFlowProcessMaterialUsageMaterialPriceModels.GetByBomIdAndFlowProcessIdAndLikeInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetByBomIdAndFlowProcessIdAndLikeInuse",
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
  GetByBomIdAndFlowProcessIdAndLikeInuse
};
7;

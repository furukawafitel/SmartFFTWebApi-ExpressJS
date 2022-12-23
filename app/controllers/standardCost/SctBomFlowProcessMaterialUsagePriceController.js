const SctBomFlowProcessMaterialUsagePriceModels = require("../../models/standardCost/SctBomFlowProcessMaterialUsagePriceModel");

const createSctBomFlowProcessMaterialUsagePrice = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctBomFlowProcessMaterialUsagePriceModels.createSctBomFlowProcessMaterialUsagePrice(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create createSctBomFlowProcessMaterialUsagePrice",
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

const DeleteBySctId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctBomFlowProcessMaterialUsagePriceModels.DeleteBySctId(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Update Data Success",
            ResultOnDb: data,
            MethodOnDb: "Update DeleteBySctId",
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

const GetBySctId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      SctBomFlowProcessMaterialUsagePriceModels.GetBySctId(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetBySctId",
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
  DeleteBySctId,
  createSctBomFlowProcessMaterialUsagePrice,
  GetBySctId
};

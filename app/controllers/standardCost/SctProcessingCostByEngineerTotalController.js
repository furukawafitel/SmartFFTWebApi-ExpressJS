const SctProcessingCostByEngineerTotalModel = require("../../models/standardCost/SctProcessingCostByEngineerTotalModel");

const createSctFlowProcessProcessingCostByEngineer = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctProcessingCostByEngineerTotalModel.createSctFlowProcessProcessingCostByEngineer(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create createSctFlowProcessProcessingCostByEngineer",
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
      SctProcessingCostByEngineerTotalModel.DeleteBySctId(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Delete Data Success",
            ResultOnDb: data,
            MethodOnDb: "delete DeleteBySctId",
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

const GetBySctIdAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      SctProcessingCostByEngineerTotalModel.GetBySctIdAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search GetBySctIdAndInuse",
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
  createSctFlowProcessProcessingCostByEngineer,
  GetBySctIdAndInuse,
  DeleteBySctId
};

const SctTotalCostModels = require("../../models/standardCost/SctTotalCostModel");

const createSctTotalCost = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctTotalCostModels.createSctTotalCost(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Insert Data Success",
          ResultOnDb: data,
          MethodOnDb: "Create SctTotalCost",
          TotalCountOnDb: ""
        });
      });
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
      SctTotalCostModels.DeleteBySctId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Delete Data Success",
          ResultOnDb: data,
          MethodOnDb: "delete DeleteBySctId",
          TotalCountOnDb: ""
        });
      });
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
      SctTotalCostModels.GetBySctId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "GetBySctId",
          TotalCountOnDb: ""
        });
      });
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

module.exports = {
  createSctTotalCost,
  GetBySctId,
  DeleteBySctId
};

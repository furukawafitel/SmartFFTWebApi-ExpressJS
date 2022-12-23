const SctCostConditionForFiscalYearDefaultModels = require("../../models/standardCost/SctCostConditionForFiscalYearDefaultModel");

// ** Get productMain
const getSctCostConditionForFiscalYearDefault = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctCostConditionForFiscalYearDefaultModels.getSctCostConditionForFiscalYearDefault(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data.length; i++) {
            data["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search SctCostConditionForFiscalYearDefault",
            TotalCountOnDb: data["TOTAL_COUNT"]
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

const searchSctCostConditionForFiscalYearDefault = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    dataItem["Start"] = Number(dataItem["Start"]) * Number(dataItem["Limit"]);
    let orderBy = "";

    if (!dataItem.hasOwnProperty("Order")) {
      orderBy = "tb_1.UPDATE_DATE DESC";
    } else {
      for (let i = 0; i < dataItem["Order"].length; i++) {
        const word = dataItem["Order"][i];
        if (word["id"] == "PRODUCT_MAIN_NAME") {
          orderBy +=
            "tb_2." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else {
          orderBy +=
            "tb_1." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        }
      }
      orderBy = orderBy.slice(0, -1);
    }
    dataItem["Order"] = orderBy;

    if (dataItem !== "") {
      SctCostConditionForFiscalYearDefaultModels.searchSctCostConditionForFiscalYearDefault(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data[1].length; i++) {
            data[1][i]["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data[1],
            MethodOnDb: "Search SctCostConditionForFiscalYearDefault",
            TotalCountOnDb: data[0][0]["TOTAL_COUNT"]
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

const createSctCostConditionForFiscalYearDefault = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctCostConditionForFiscalYearDefaultModels.createSctCostConditionForFiscalYearDefault(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create SctCostConditionForFiscalYearDefault",
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

const updateSctCostConditionForFiscalYearDefault = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctCostConditionForFiscalYearDefaultModels.updateSctCostConditionForFiscalYearDefault(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Update Data Success",
            ResultOnDb: data,
            MethodOnDb: "Update SctCostConditionForFiscalYearDefault",
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

const deleteSctCostConditionForFiscalYearDefault = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      SctCostConditionForFiscalYearDefaultModels.deleteSctCostConditionForFiscalYearDefault(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Delete Data Success",
            ResultOnDb: data,
            MethodOnDb: "delete SctCostConditionForFiscalYearDefault",
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
      SctCostConditionForFiscalYearDefaultModels.GetBySctIdAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetBySctIdAndInuse",
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
  getSctCostConditionForFiscalYearDefault,
  searchSctCostConditionForFiscalYearDefault,
  createSctCostConditionForFiscalYearDefault,
  updateSctCostConditionForFiscalYearDefault,
  deleteSctCostConditionForFiscalYearDefault,
  GetBySctIdAndInuse
};

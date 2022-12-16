const CostConditionForFiscalYearReferToProductMainModels = require("../../models/standardCost/costConditionForFiscalYearReferToProductMainModel");

// ** Get productMain
const getCostConditionForFiscalYearReferToProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CostConditionForFiscalYearReferToProductMainModels.getCostConditionForFiscalYearReferToProductMain(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data.length; i++) {
            data["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search CostConditionForFiscalYearReferToProductMain",
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

const searchCostConditionForFiscalYearReferToProductMain = async (req, res) => {
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
      CostConditionForFiscalYearReferToProductMainModels.searchCostConditionForFiscalYearReferToProductMain(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data[1].length; i++) {
            data[1][i]["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data[1],
            MethodOnDb: "Search CostConditionForFiscalYearReferToProductMain",
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

const createCostConditionForFiscalYearReferToProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CostConditionForFiscalYearReferToProductMainModels.createCostConditionForFiscalYearReferToProductMain(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create CostConditionForFiscalYearReferToProductMain",
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

const updateCostConditionForFiscalYearReferToProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CostConditionForFiscalYearReferToProductMainModels.updateCostConditionForFiscalYearReferToProductMain(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Update Data Success",
            ResultOnDb: data,
            MethodOnDb: "Update CostConditionForFiscalYearReferToProductMain",
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

const deleteCostConditionForFiscalYearReferToProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      CostConditionForFiscalYearReferToProductMainModels.deleteCostConditionForFiscalYearReferToProductMain(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Delete Data Success",
            ResultOnDb: data,
            MethodOnDb: "delete CostConditionForFiscalYearReferToProductMain",
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
  getCostConditionForFiscalYearReferToProductMain,
  searchCostConditionForFiscalYearReferToProductMain,
  createCostConditionForFiscalYearReferToProductMain,
  updateCostConditionForFiscalYearReferToProductMain,
  deleteCostConditionForFiscalYearReferToProductMain
};

const FiscalYearPeriodReferToCustomerInvoiceToModels = require("../../models/standardCost/FiscalYearPeriodReferToCustomerInvoiceToModel");

// ** Get productMain
const getFiscalYearPeriodReferToCustomerInvoiceTo = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      FiscalYearPeriodReferToCustomerInvoiceToModels.getFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data.length; i++) {
            data["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search FiscalYearPeriodReferToCustomerInvoiceTo",
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

const searchFiscalYearPeriodReferToCustomerInvoiceTo = async (req, res) => {
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
      orderBy = "tb_1.UPDATE_DATE DESC , tb_1.INUSE DESC";
    } else {
      for (let i = 0; i < dataItem["Order"].length; i++) {
        const word = dataItem["Order"][i];
        if (word["id"] == "CUSTOMER_INVOICE_TO_ALPHABET") {
          orderBy +=
            "tb_2." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "P2_START_MONTH_OF_FISCAL_YEAR_NAME") {
          orderBy += "tb_4.MONTH_ID" + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "P3_START_MONTH_OF_FISCAL_YEAR_NAME") {
          orderBy += "tb_3.MONTH_ID" + (word["desc"] ? " DESC" : " ASC") + ",";
        } else {
          orderBy +=
            "tb_1." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        }
      }
      orderBy = orderBy.slice(0, -1);
    }
    dataItem["Order"] = orderBy;

    if (dataItem !== "") {
      FiscalYearPeriodReferToCustomerInvoiceToModels.searchFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data[1].length; i++) {
            data[1][i]["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data[1],
            MethodOnDb: "Search FiscalYearPeriodReferToCustomerInvoiceTo",
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

const createFiscalYearPeriodReferToCustomerInvoiceTo = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      FiscalYearPeriodReferToCustomerInvoiceToModels.createFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create FiscalYearPeriodReferToCustomerInvoiceTo",
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

const updateFiscalYearPeriodReferToCustomerInvoiceTo = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      FiscalYearPeriodReferToCustomerInvoiceToModels.updateFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Update Data Success",
            ResultOnDb: data,
            MethodOnDb: "Update FiscalYearPeriodReferToCustomerInvoiceTo",
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

const deleteFiscalYearPeriodReferToCustomerInvoiceTo = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      FiscalYearPeriodReferToCustomerInvoiceToModels.deleteFiscalYearPeriodReferToCustomerInvoiceTo(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Delete Data Success",
            ResultOnDb: data,
            MethodOnDb: "delete FiscalYearPeriodReferToCustomerInvoiceTo",
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

const GetByLikeProductionPurposeNameAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      FiscalYearPeriodReferToCustomerInvoiceToModels.GetByLikeProductionPurposeNameAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetByLikeProductionPurposeNameAndInuse",
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
  getFiscalYearPeriodReferToCustomerInvoiceTo,
  searchFiscalYearPeriodReferToCustomerInvoiceTo,
  createFiscalYearPeriodReferToCustomerInvoiceTo,
  updateFiscalYearPeriodReferToCustomerInvoiceTo,
  deleteFiscalYearPeriodReferToCustomerInvoiceTo,
  GetByLikeProductionPurposeNameAndInuse
};

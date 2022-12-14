const CustomerInvoiceModels = require("../../models/customer/customerInvoiceModel");

// ** Get productMain
const getCustomerInvoice = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CustomerInvoiceModels.getCustomerInvoice(dataItem, (err, data) => {
        for (let i = 0; i < data.length; i++) {
          data["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search CustomerInvoice",
          TotalCountOnDb: data["TOTAL_COUNT"]
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

const searchCustomerInvoice = async (req, res) => {
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
      orderBy = "UPDATE_DATE DESC";
    } else {
      for (let i = 0; i < dataItem["Order"].length; i++) {
        const word = dataItem["Order"][i];
        orderBy += word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
      }
      orderBy = orderBy.slice(0, -1);
    }
    dataItem["Order"] = orderBy;

    if (dataItem !== "") {
      CustomerInvoiceModels.searchCustomerInvoice(dataItem, (err, data) => {
        for (let i = 0; i < data[1].length; i++) {
          data[1][i]["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data[1],
          MethodOnDb: "Search CustomerInvoice",
          TotalCountOnDb: data[0][0]["TOTAL_COUNT"]
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

const createCustomerInvoice = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CustomerInvoiceModels.createCustomerInvoice(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Insert Data Success",
          ResultOnDb: data,
          MethodOnDb: "Create CustomerInvoice",
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

const updateCustomerInvoice = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CustomerInvoiceModels.updateCustomerInvoice(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Update Data Success",
          ResultOnDb: data,
          MethodOnDb: "Update CustomerInvoice",
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

const deleteCustomerInvoice = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      CustomerInvoiceModels.deleteCustomerInvoice(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Delete Data Success",
          ResultOnDb: data,
          MethodOnDb: "delete CustomerInvoice",
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

const GetByLikeCustomerInvoiceToName = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      CustomerInvoiceModels.GetByLikeCustomerInvoiceToName(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetByLikeCustomerInvoiceToName",
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

const GetByLikeCustomerInvoiceToAlphabetAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      CustomerInvoiceModels.GetByLikeCustomerInvoiceToAlphabetAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetByLikeCustomerInvoiceToAlphabetAndInuse",
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

const GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse =
  async (req, res) => {
    try {
      let dataItem;
      if (Object.entries(req.body).length === 0) {
        dataItem = JSON.parse(req.query.data);
      } else {
        dataItem = req.body;
      }
      if (dataItem !== "") {
        CustomerInvoiceModels.GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse(
          dataItem,
          (err, data) => {
            res.send({
              Status: true,
              Message: "Search Data Success",
              ResultOnDb: data,
              MethodOnDb:
                "GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse",
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
  getCustomerInvoice,
  searchCustomerInvoice,
  createCustomerInvoice,
  updateCustomerInvoice,
  deleteCustomerInvoice,
  GetByLikeCustomerInvoiceToName,
  GetByLikeCustomerInvoiceToAlphabetAndInuse,
  GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse
};

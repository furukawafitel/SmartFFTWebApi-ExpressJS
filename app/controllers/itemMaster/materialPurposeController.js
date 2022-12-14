const MaterialPurposeModels = require("../../models/itemMaster/materialPurposeModel");

// ** Get productMain
const getMaterialPurpose = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialPurposeModels.getMaterialPurpose(dataItem, (err, data) => {
        for (let i = 0; i < data.length; i++) {
          data["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search MaterialPurpose",
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

const searchMaterialPurpose = async (req, res) => {
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
      MaterialPurposeModels.searchMaterialPurpose(dataItem, (err, data) => {
        for (let i = 0; i < data[1].length; i++) {
          data[1][i]["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data[1],
          MethodOnDb: "Search MaterialPurpose",
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

const createMaterialPurpose = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialPurposeModels.createMaterialPurpose(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Insert Data Success",
          ResultOnDb: data,
          MethodOnDb: "Create MaterialPurpose",
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

const updateMaterialPurpose = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialPurposeModels.updateMaterialPurpose(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Update Data Success",
          ResultOnDb: data,
          MethodOnDb: "Update MaterialPurpose",
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

const deleteMaterialPurpose = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialPurposeModels.deleteMaterialPurpose(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Delete Data Success",
          ResultOnDb: data,
          MethodOnDb: "delete MaterialPurpose",
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

const GetByLikeMaterialPurposeNameAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialPurposeModels.GetByLikeMaterialPurposeNameAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetByLikeMaterialPurposeNameAndInuse",
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
  getMaterialPurpose,
  searchMaterialPurpose,
  createMaterialPurpose,
  updateMaterialPurpose,
  deleteMaterialPurpose,
  GetByLikeMaterialPurposeNameAndInuse
};

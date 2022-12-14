const MaterialPropertyMadeByModels = require("../../models/itemMaster/materialPropertyMadeByModel");

// ** Get
const getMaterialPropertyMadeBy = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialPropertyMadeByModels.getMaterialPropertyMadeBy(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data.length; i++) {
            data["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search MaterialPropertyMadeBy",
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

const searchMaterialPropertyMadeBy = async (req, res) => {
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
      MaterialPropertyMadeByModels.searchMaterialPropertyMadeBy(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data[1].length; i++) {
            data[1][i]["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data[1],
            MethodOnDb: "Search MaterialPropertyMadeBy",
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

const createMaterialPropertyMadeBy = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialPropertyMadeByModels.createMaterialPropertyMadeBy(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create MaterialPropertyMadeBy",
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

const updateMaterialPropertyMadeBy = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialPropertyMadeByModels.updateMaterialPropertyMadeBy(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Update Data Success",
            ResultOnDb: data,
            MethodOnDb: "Update MaterialPropertyMadeBy",
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

const deleteMaterialPropertyMadeBy = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialPropertyMadeByModels.deleteMaterialPropertyMadeBy(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Delete Data Success",
            ResultOnDb: data,
            MethodOnDb: "delete MaterialPropertyMadeBy",
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

const GetByLikeMaterialPropertyMadeByName = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialPropertyMadeByModels.GetByLikeMaterialPropertyMadeByName(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetByLikeMaterialPropertyMadeByName",
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
  getMaterialPropertyMadeBy,
  searchMaterialPropertyMadeBy,
  createMaterialPropertyMadeBy,
  updateMaterialPropertyMadeBy,
  deleteMaterialPropertyMadeBy,
  GetByLikeMaterialPropertyMadeByName
};

const ProductSubModels = require("../../models/productGroup/productSubModel");

// ** Get productCategory
const getProductSub = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductSubModels.getProductSub(dataItem, (err, data) => {
        for (let i = 0; i < data.length; i++) {
          data["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search Product-Sub",
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

const searchProductSub = async (req, res) => {
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
        if (word["id"] == "PRODUCT_CATEGORY_NAME") {
          orderBy +=
            "tb_3." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "PRODUCT_MAIN_NAME") {
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
      ProductSubModels.searchProductSub(dataItem, (err, data) => {
        for (let i = 0; i < data[1].length; i++) {
          data[1][i]["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data[1],
          MethodOnDb: "Search ProductSub",
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

const createProductSub = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductSubModels.createProductSub(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Insert Data Success",
          ResultOnDb: data,
          MethodOnDb: "Create Product Sub",
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

const updateProductSub = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductSubModels.updateProductSub(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Update Data Success",
          ResultOnDb: data,
          MethodOnDb: "Update Product Sub",
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

const deleteProductSub = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      ProductSubModels.deleteProductSub(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Delete Data Success",
          ResultOnDb: data,
          MethodOnDb: "Update Product Category",
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

const getByLikeProductSubNameAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      ProductSubModels.getByLikeProductSubNameAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search Product Sub",
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

const getByLikeProductSubNameAndProductMainIdAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      ProductSubModels.getByLikeProductSubNameAndProductMainIdAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search Product Sub",
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

const getByProductMainId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      ProductSubModels.getByProductMainId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search Product Sub",
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
  getProductSub,
  searchProductSub,
  createProductSub,
  updateProductSub,
  deleteProductSub,
  getByLikeProductSubNameAndInuse,
  getByLikeProductSubNameAndProductMainIdAndInuse,
  getByProductMainId
};

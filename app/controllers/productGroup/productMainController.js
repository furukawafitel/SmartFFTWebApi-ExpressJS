const e = require("express");
const ProductMainModels = require("../../models/productGroup/productMainModel");

// ** Get productCategory
const GetProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductMainModels.getProductMain(dataItem, (err, data) => {
        for (let i = 0; i < data.length; i++) {
          data["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search ProductCategory",
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

// ** Get productCategory from the database (with condition).
const SearchProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    dataItem["Start"] = Number(dataItem["Start"]) * Number(dataItem["Limit"]);
    let orderBy = "";

    if (dataItem["PRODUCT_CATEGORY_ID"] == "") {
      if (!dataItem.hasOwnProperty("Order")) {
        orderBy = "tb_1.UPDATE_DATE DESC";
      } else {
        for (let i = 0; i < dataItem["Order"].length; i++) {
          const word = dataItem["Order"][i];
          if (word["id"] == "PRODUCT_CATEGORY_NAME") {
            orderBy +=
              "tb_2." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
          } else {
          }
          orderBy +=
            "tb_1." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        }
        orderBy = orderBy.slice(0, -1);
      }

      dataItem["Order"] = orderBy;
    } else {
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
    }

    if (dataItem !== "") {
      ProductMainModels.searchProductMain(dataItem, (err, data) => {
        for (let i = 0; i < data[1].length; i++) {
          data[1][i]["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data[1],
          MethodOnDb: "Search ProductCategory",
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

const CreateProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductMainModels.createProductMain(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Insert Data Success",
          ResultOnDb: data,
          MethodOnDb: "Create Product Category",
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

const UpdateProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductMainModels.updateProductMain(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Update Data Success",
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

const DeleteProductMain = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      ProductMainModels.deleteProductMain(dataItem, (err, data) => {
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

const GetByLikeProductMainNameAndInuse = async (req, res) => {
  try {
    const dataItem = req.body;
    if (dataItem !== "") {
      ProductMainModels.getByLikeProductMainNameAndInuse(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "Search Product Category",
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
  GetProductMain,
  SearchProductMain,
  CreateProductMain,
  UpdateProductMain,
  DeleteProductMain,
  GetByLikeProductMainNameAndInuse
};

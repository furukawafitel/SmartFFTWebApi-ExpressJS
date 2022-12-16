const ProductCategoryModels = require("../../models/productGroup/productCategoryModel");

// ** Get productCategory
const GetProductcategory = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductCategoryModels.getProductcategory(dataItem, (err, data) => {
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
const SearchProductcategory = async (req, res) => {
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
      ProductCategoryModels.searchProductcategory(dataItem, (err, data) => {
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

const CreateProductCategory = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductCategoryModels.createProductcategory(dataItem, (err, data) => {
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

const UpdateProductcategory = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      ProductCategoryModels.updateProductcategory(dataItem, (err, data) => {
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

const DeleteProductcategory = async (req, res) => {
  try {
    const dataItem = req.body;
    if (dataItem !== "") {
      ProductCategoryModels.deleteProductcategory(dataItem, (err, data) => {
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

const GetByLikeProductCategoryNameAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      ProductCategoryModels.getByLikeProductCategoryNameAndInuse(
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
  GetProductcategory,
  SearchProductcategory,
  CreateProductCategory,
  UpdateProductcategory,
  DeleteProductcategory,
  GetByLikeProductCategoryNameAndInuse
};

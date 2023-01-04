const MaterialModels = require("../../models/itemMaster/materialModel");

const fs = require("fs");

// ** Get productMain
const getMaterial = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialModels.getMaterial(dataItem, (err, data) => {
        for (let i = 0; i < data.length; i++) {
          data["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search Material",
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

const searchMaterial = async (req, res) => {
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

        // *** Component
        if (word["id"] == "MATERIAL_CATEGORY_NAME") {
          orderBy +=
            "tb_2." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "MATERIAL_PURPOSE_NAME") {
          orderBy +=
            "tb_3." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "MATERIAL_TYPE_NAME") {
          orderBy +=
            "tb_4." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "VENDOR_NAME") {
          orderBy +=
            "tb_5." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "MAKER_NAME") {
          orderBy +=
            "tb_6." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        }

        // *** Product Component Detail
        else if (word["id"] == "PRODUCT_CATEGORY_NAME") {
          orderBy +=
            "tb_19." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "PRODUCT_MAIN_NAME") {
          orderBy +=
            "tb_18." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "PRODUCT_SUB_NAME") {
          orderBy +=
            "tb_13." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "PRODUCT_TYPE_NAME") {
          orderBy +=
            "tb_12." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "WORK_ORDER_CODE") {
          orderBy +=
            "tb_14." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "PART_NO_CODE") {
          orderBy +=
            "tb_15." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "SPECIFICATION_CODE") {
          orderBy +=
            "tb_16." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "CUSTOMER_ORDER_FROM_ALPHABET") {
          orderBy +=
            "tb_17." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "USAGE_UNIT_SYMBOL") {
          orderBy += "tb_20.SYMBOL" + (word["desc"] ? " DESC" : " ASC") + ",";
        }

        //** Item in Product Main (Grouping for BOM) */
        else if (word["id"] == "IS_EXIST_MATERIAL_IN_PRODUCT_MAIN") {
          orderBy +=
            String("IS_EXIST_MATERIAL_IN_PRODUCT_MAIN ") +
            (word["desc"] ? " DESC" : " ASC") +
            ",";
        } else {
          orderBy +=
            "tb_1." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        }
      }
      orderBy = orderBy.slice(0, -1);
    }
    dataItem["Order"] = orderBy;

    if (dataItem !== "") {
      MaterialModels.searchMaterial(dataItem, (err, data) => {
        for (let i = 0; i < data[1].length; i++) {
          data[1][i]["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data[1],
          MethodOnDb: "Search Material",
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

const createMaterial = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialModels.createMaterial(dataItem, (err, data) => {
        if (data[0][0]["errorStatus"] == 0 && dataItem["IMAGE"] != "") {
          // ** Insert PIC
          var base64Data = dataItem["IMAGE"].replace(
            /^data:image\/png;base64,/,
            ""
          );

          require("fs").writeFile(
            data[0][0]["IMAGE_PATH"],
            base64Data,
            "base64",
            function (err) {
              console.log(err);
            }
          );

          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create Material",
            TotalCountOnDb: ""
          });
        } else {
          res.send({
            Status: true,
            Message: "Insert Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create Material",
            TotalCountOnDb: ""
          });
        }
      });
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

const updateMaterial = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      MaterialModels.updateMaterial(dataItem, (err, data) => {
        if (dataItem["IMAGE"] != "") {
          dataItem["IMAGE_PATH"] =
            dataItem["IMAGE_ROOT_PATH"] +
            dataItem["MATERIAL_INTERNAL_CODE"] +
            ".png";

          // ** Insert PIC
          var base64Data = dataItem["IMAGE"].replace(
            /^data:image\/png;base64,/,
            ""
          );

          require("fs").writeFile(
            dataItem["IMAGE_PATH"],
            base64Data,
            "base64",
            function (err) {
              console.log(err);
            }
          );

          res.send({
            Status: true,
            Message: "Update Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create Material",
            TotalCountOnDb: ""
          });
        } else {
          res.send({
            Status: true,
            Message: "Update Data Success",
            ResultOnDb: data,
            MethodOnDb: "Create Material",
            TotalCountOnDb: ""
          });
        }
      });
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

const deleteMaterial = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.deleteMaterial(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Delete Data Success",
          ResultOnDb: data,
          MethodOnDb: "delete Material",
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

const GetByLikeMaterialNameAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.GetByLikeMaterialNameAndInuse(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "GetByLikeMaterialNameAndInuse",
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

const GetCountByMaterialCategoryId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.GetCountByMaterialCategoryId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "GetCountByMaterialCategoryId",
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

const GetCountByMaterialPurposeId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.GetCountByMaterialPurposeId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "GetCountByMaterialPurposeId",
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

const GetCountByMaterialTypeId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.GetCountByMaterialTypeId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "GetCountByMaterialTypeId",
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

const GetCountByVendorId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.GetCountByVendorId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "GetCountByVendorId",
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

const GetCountByMakerId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.GetCountByMakerId(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "GetCountByMakerId",
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

const GetImageByItemCodeForSupportMesAndOldSystem = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      MaterialModels.GetImageByItemCodeForSupportMesAndOldSystem(
        dataItem,
        (err, data) => {
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb: "GetImageByItemCodeForSupportMesAndOldSystem",
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
  getMaterial,
  searchMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  GetByLikeMaterialNameAndInuse,
  GetCountByMaterialCategoryId,
  GetCountByMaterialPurposeId,
  GetCountByMaterialTypeId,
  GetCountByVendorId,
  GetCountByMakerId,
  GetImageByItemCodeForSupportMesAndOldSystem
};

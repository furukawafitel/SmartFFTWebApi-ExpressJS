const SctModels = require("../../models/standardCost/SctModel");
const excel = require("exceljs");

let workbook = new excel.Workbook();
let MaterialResult;
let SCTResult;
let ProcessResult;
let dataArray;
let dataItem;

const GetExcelFromURL = async (req, res) => {
  if (Object.entries(req.body).length === 0) {
    dataItem = JSON.parse(req.query.data);
  } else {
    dataItem = req.body;
  }

  dataArray = dataItem["LIST_SCT_ID"];
  MaterialResult = [];
  SCTResult = [];
  ProcessResult = [];

  for (let i = 0; i < dataArray.length; i++) {
    await SctModels.GetDataExcel(dataArray[i], async (err, data) => {
      MaterialResult.push(data[0]);
      SCTResult.push(data[1]);
      ProcessResult.push(data[2]);
    });
  }

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "STD_COST_FILE.xlsx"
  );

  await workbook.xlsx.readFile("FM-SCT.xlsx").then(async function () {
    // ** Prepare Data

    copyWorksheetExcelFile(workbook).then(function () {
      createAllExcelFile(workbook).then(function () {
        sendFile(res);
      });
    });
  });
};

async function copyWorksheetExcelFile() {
  for (let i = 0; i < dataArray.length - 1; i++) {
    await copyWorksheet(i);
  }
}

async function createAllExcelFile() {
  for (let i = 0; i < dataArray.length; i++) {
    workbook = await writingFile(i + 1, i);
  }
}

async function sendFile(res) {
  await workbook.xlsx.write(res).then(async function () {
    res.status(200).end();
  });
}

async function copyWorksheet(i) {
  let ws1 = workbook.getWorksheet(1);
  let copySheet = workbook.addWorksheet("New-Worksheet");
  copySheet.model = Object.assign(ws1.model, {
    mergeCells: ws1.model.merges
  });
  copySheet.name = "SCT_NAME" + `${i}`;
}

async function writingFile(sheetId, cntRound) {
  try {
    let worksheet = workbook.getWorksheet(sheetId);

    worksheet.name = SCTResult[cntRound][0]["SCT_CODE_FOR_SUPPORT_MES"];
    // **** set (Row , Column)
    // *** Material Cost
    for (let i = 0; i < MaterialResult[cntRound].length; i++) {
      const element = MaterialResult[cntRound][i];
      worksheet.getCell(16 + i, 7).value = element["MATERIAL_INTERNAL_CODE"];
      worksheet.getCell(16 + i, 8).value = element["MATERIAL_CATEGORY_NAME"];
      worksheet.getCell(16 + i, 9).value =
        element["MATERIAL_INTERNAL_FULL_NAME"];
      worksheet.getCell(16 + i, 10).value =
        element["MATERIAL_INTERNAL_SHORT_NAME"];
      worksheet.getCell(16 + i, 11).value = element["USAGE_QUANTITY"];
      worksheet.getCell(16 + i, 12).value = element["SYMBOL"];
      worksheet.getCell(16 + i, 13).value = element["NEW_PRICE"];
      worksheet.getCell(16 + i, 14).value = element["OLD_PRICE"];
      worksheet.getCell(16 + i, 15).value = element["DIFF_PRICE"];
      worksheet.getCell(16 + i, 16).value =
        element["SCT_PROCESS_SEQUENCE_CODE"];
      worksheet.getCell(16 + i, 17).value = element["NEW_YIELD_ACCUMULATION"];
      worksheet.getCell(16 + i, 18).value = element["OLD_YIELD_ACCUMULATION"];
      worksheet.getCell(16 + i, 19).value = element["NEW_AMOUNT"];
      worksheet.getCell(16 + i, 20).value = element["OLD_AMOUNT"];
      worksheet.getCell(16 + i, 21).value = element["DIFF_AMOUNT"];
    }

    // ***์ NEW STANDARD COST DETIAL
    for (let i = 0; i < SCTResult[cntRound].length; i++) {
      const element = SCTResult[cntRound][i];
      worksheet.getCell(4, 2).value = element["FISCAL_YEAR"];
      worksheet.getCell(5, 2).value = element["SCT_CODE_FOR_SUPPORT_MES"];
      worksheet.getCell(6, 2).value = element["REVISION"];
      worksheet.getCell(7, 2).value = element["DESCRIPTION"];
      worksheet.getCell(8, 2).value = element["FROM_DATE"];
      worksheet.getCell(9, 2).value = element["TO_DATE"];
      worksheet.getCell(12, 2).value = element["MAIN_PRODUCT_CODE"];
      worksheet.getCell(13, 2).value = element["TYPE"];
      worksheet.getCell(17, 2).value = element["DIRECT_UNIT_PROCESS_COST"];
      worksheet.getCell(18, 2).value =
        element["INDIRECT_RATE_OF_DIRECT_PROCESS_COST"];
      worksheet.getCell(19, 2).value = element["DIREC_COST_CODE"];
      worksheet.getCell(20, 2).value = element["TOTAL_PROCESSING_TIME"];
      worksheet.getCell(21, 2).value =
        element["TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE"];
      worksheet.getCell(22, 2).value = element["TOTAL_DIRECT_COST"];
      worksheet.getCell(23, 2).value = element["DIRECT_PROCESS_COST"];
      worksheet.getCell(24, 2).value = element["TOTAL_PRICE_OF_RAW_MATERIAL"];
      worksheet.getCell(25, 2).value = element["TOTAL_PRICE_OF_SUB_ASSY"];
      worksheet.getCell(26, 2).value =
        element["TOTAL_PRICE_OF_SEMI_FINISHED_GOODS"];
      worksheet.getCell(27, 2).value = element["TOTAL_PRICE_OF_CONSUMABLE"];
      worksheet.getCell(28, 2).value = element["TOTAL_PRICE_OF_PACKING"];
      worksheet.getCell(29, 2).value =
        element["TOTAL_PRICE_OF_ALL_OF_MATERIALS"];
      worksheet.getCell(30, 2).value = element["IMPORTED_FEE"];
      worksheet.getCell(31, 2).value = element["IMPORTED_COST"];
      worksheet.getCell(32, 2).value =
        element["TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST"];

      worksheet.getCell(40, 2).value =
        element["ASSEMBLY_GROUP_FOR_SUPPORT_MES"];
      worksheet.getCell(41, 2).value = element["INDIRECT_COST_SALE_AVE"];

      // ** OLD STANDARD COST DETIAL
      if (element["OLD_FISCAL_YEAR"] !== null) {
        worksheet.getCell(4, 3).value = element["OLD_FISCAL_YEAR"];
        worksheet.getCell(5, 3).value = element["OLD_SCT_CODE_FOR_SUPPORT_MES"];
        worksheet.getCell(6, 3).value = element["OLD_REVISION"];
        worksheet.getCell(7, 3).value = element["DESCRIPTION"];
        worksheet.getCell(8, 3).value = element["OLD_FROM_DATE"];
        worksheet.getCell(9, 3).value = element["OLD_TO_DATE"];
        worksheet.getCell(11, 3).value = element["OLD_SCT_CODE"];
        worksheet.getCell(12, 3).value = element["MAIN_PRODUCT_CODE"];
        worksheet.getCell(13, 3).value = element["TYPE"];
        worksheet.getCell(17, 3).value =
          element["OLD_DIRECT_UNIT_PROCESS_COST"];
        worksheet.getCell(18, 3).value =
          element["OLD_INDIRECT_RATE_OF_DIRECT_PROCESS_COST"];
        worksheet.getCell(19, 3).value = element["OLD_DIREC_COST_CODE"];
        worksheet.getCell(20, 3).value = element["OLD_TOTAL_PROCESSING_TIME"];
        worksheet.getCell(21, 3).value =
          element["OLD_TOTAL_PROCESSING_TIME_INCLUDING_INDIRECT_RATE"];
        worksheet.getCell(22, 3).value = element["OLD_TOTAL_DIRECT_COST"];
        worksheet.getCell(23, 3).value = element["OLD_DIRECT_PROCESS_COST"];
        worksheet.getCell(24, 3).value =
          element["OLD_TOTAL_PRICE_OF_RAW_MATERIAL"];
        worksheet.getCell(25, 3).value = element["OLD_TOTAL_PRICE_OF_SUB_ASSY"];
        worksheet.getCell(26, 3).value =
          element["OLD_TOTAL_PRICE_OF_SEMI_FINISHED_GOODS"];
        worksheet.getCell(27, 3).value =
          element["OLD_TOTAL_PRICE_OF_CONSUMABLE"];
        worksheet.getCell(28, 3).value = element["OLD_TOTAL_PRICE_OF_PACKING"];
        worksheet.getCell(29, 3).value =
          element["OLD_TOTAL_PRICE_OF_ALL_OF_MATERIALS"];
        worksheet.getCell(30, 3).value = element["OLD_IMPORTED_FEE"];
        worksheet.getCell(31, 3).value = element["OLD_IMPORTED_COST"];
        worksheet.getCell(32, 3).value =
          element["OLD_TOTAL_PRICE_OF_ALL_OF_MATERIALS_INCLUDE_IMPORTED_COST"];
      }
    }

    // *** Processing Cost
    for (let i = 0; i < ProcessResult[cntRound].length; i++) {
      const element = ProcessResult[cntRound][i];
      worksheet.getCell(16 + i, 22).value =
        element["OLD_SYSTEM_PROCESS_SEQUENCE_CODE"];
      worksheet.getCell(16 + i, 23).value = element["PROCESS_NAME"];
      worksheet.getCell(16 + i, 24).value = element["YIELD_RATE"];
      worksheet.getCell(16 + i, 25).value = element["YIELD_ACCUMULATION"];
      worksheet.getCell(16 + i, 26).value = element["CLEAR_TIME"];
      worksheet.getCell(16 + i, 27).value = element["GO_STRAIGHT_RATE"];
      worksheet.getCell(16 + i, 28).value = element["ESSENTIAL_TIME"];
      worksheet.getCell(16 + i, 29).value = element["PROCESS_STANDARD_TIME"];
      worksheet.getCell(16 + i, 30).value = element["NOTE"];
      worksheet.getCell(16 + i, 31).value =
        element["OLD_SYSTEM_COLLECTION_POINT"] === 1 ? "O" : "";
    }
  } catch (error) {
    console.log(error);
  }
  return workbook;
}

const getSct = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctModels.getSct(dataItem, (err, data) => {
        for (let i = 0; i < data.length; i++) {
          data["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search Sct",
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

const searchSct = async (req, res) => {
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
      orderBy = "tb_2.UPDATE_DATE DESC , tb_2.SCT_ID DESC";
    } else {
      for (let i = 0; i < dataItem["Order"].length; i++) {
        const word = dataItem["Order"][i];
        if (word["id"] == "TOTAL_WORKING_PROGRESS_PERCENT") {
          orderBy +=
            "tb_2." + word["id"] + (word["desc"] ? " DESC" : " ASC") + ",";
        } else if (word["id"] == "CURRENT_ASSIGN_STEP_NO") {
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
      SctModels.searchSct(dataItem, (err, data) => {
        for (let i = 0; i < data[1].length; i++) {
          data[1][i]["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data[1],
          MethodOnDb: "Search Sct",
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

const createSct = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctModels.createSct(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Insert Data Success",
          ResultOnDb: data,
          MethodOnDb: "Create Sct",
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

const updateSct = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      SctModels.updateSct(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Update Data Success",
          ResultOnDb: data,
          MethodOnDb: "Update Sct",
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

const deleteSct = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      SctModels.deleteSct(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Delete Data Success",
          ResultOnDb: data,
          MethodOnDb: "delete Sct",
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

const getByLikeSctNameAndInuse = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      SctModels.getByLikeSctNameAndInuse(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "getByLikeSctNameAndInuse",
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
  getSct,
  searchSct,
  createSct,
  updateSct,
  deleteSct,
  getByLikeSctNameAndInuse,
  GetExcelFromURL
};

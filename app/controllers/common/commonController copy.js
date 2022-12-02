// ** COMMON CONTROLLER
const excel = require("exceljs");
const CommonModels = require("../../models/common/commonModel");

let workbook = new excel.Workbook();
let MaterialResult = [];
let SCTResult = [];
let ProcessResult = [];

const GetExcelFromURL = async (req, res) => {
  await CommonModels.GetDataExcel(res, (err, data) => {
    MaterialResult = data[0];
    SCTResult = data[1];
    ProcessResult = data[2];

    workbook.xlsx.readFile("FM-SCT.xlsx").then(async function () {
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=" + "STD_COST_FILE.xlsx"
      );

      for (let i = 0; i < 1; i++) {
        CopyWorksheet(i);
      }

      for (let i = 0; i <= 1; i++) {
        workbook = GetParameter(i + 1);
      }

      workbook.xlsx.write(res).then(function () {
        res.status(200).end();
      });
    });
  });
};

// GetExcelFromURLTwo = async (req, res) => {
//   await CommonModels.GetDataExcel(res, async (err, data) => {
//     MaterialResult = data[0];
//     SCTResult = data[1];
//     ProcessResult = data[2];
//     console.log(ProcessResult[0]);

//     await workbook.xlsx.readFile("FM-SCT-M.xlsx").then(async function () {
//       res.setHeader(
//         "Content-Type",
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//       );
//       res.setHeader(
//         "Content-Disposition",
//         "attachment; filename=" + "STD_COST_FILE.xlsx"
//       );
//       await WriteExcelFile();

//       return workbook.xlsx.write(res).then(function () {
//         res.status(200).end();
//       });
//     });
//   });
// };

const WriteExcelFile = async () => {
  console.log("TEST");

  for (let i = 0; i < 1; i++) {
    CopyWorksheet(i);
  }

  for (let i = 0; i <= 1; i++) {
    workbook = await GetParameter(i + 1);
  }
};

const CopyWorksheet = (i) => {
  var ws1 = workbook.getWorksheet(1);
  let copySheet = workbook.addWorksheet("New-Worksheet");

  copySheet.model = Object.assign(ws1.model, {
    mergeCells: ws1.model.merges
  });
  copySheet.name = "SCT_NAME" + `${i}`;
};

const GetParameter = (sheetId) => {
  try {
    // console.log(sheetId);
    let worksheet = workbook.getWorksheet(sheetId);

    // worksheet.name = "WE R THE CHAMP";
    // let copySheet = workbook.addWorkSheet("Sheet");
    // **** set (Row , Column)
    // *** Material Cost
    for (let i = 0; i < MaterialResult.length; i++) {
      const element = MaterialResult[i];
      worksheet.getCell(16 + i, 7).value = element["MATERIAL_INTERNAL_CODE"];
      worksheet.getCell(16 + i, 8).value = element["MATERIAL_CATEGORY_NAME"];
      worksheet.getCell(16 + i, 9).value =
        element["MATERIAL_INTERNAL_FULL_NAME"];
      worksheet.getCell(16 + i, 10).value =
        element["MATERIAL_TYPE_CATEGORY_NAME"];
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

    // // *** Processing Cost
    for (let i = 0; i < ProcessResult.length; i++) {
      const element = ProcessResult[i];
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

    // ***์ STANDARD COST DETIAL
    for (let i = 0; i < SCTResult.length; i++) {
      const element = SCTResult[i];
      console.log(element);
      worksheet.getCell(4, 2).value = element["FISCAL_YEAR"];
      worksheet.getCell(5, 2).value = element["SCT_CODE"];
      worksheet.getCell(6, 2).value = element["REVISION"];
      worksheet.getCell(7, 2).value = element["DESCRIPTION"];
      worksheet.getCell(8, 2).value = element["FROM_DATE"];
      //worksheet.getCell(9, 2).value = element["EXPIRATION_DATE"];
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
    }
  } catch (error) {
    console.log(error);
  }

  return workbook;
};

module.exports = {
  GetExcelFromURL
};

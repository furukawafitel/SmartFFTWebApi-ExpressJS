module.exports = (app) => {
  const common = require("../../controllers/common/commonController");
  var router = require("express").Router();

  // *** Get Data

  router.get("/exportExcel", common.GetExcelFromURL);

  app.use("/api/sct", router);
};

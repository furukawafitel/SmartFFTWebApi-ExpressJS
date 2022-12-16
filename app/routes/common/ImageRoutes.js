module.exports = (app) => {
  const common = require("../../controllers/common/commonController");
  var router = require("express").Router();

  // *** Get Data

  router.post("/getImageFromUrl", common.getImageFromUrl);

  router.get("/getYearNow", common.GetYearNow);

  router.get(
    "/getByLikeMonthShortNameEnglish",
    common.GetByLikeMonthShortNameEnglish
  );

  app.use("/api/common", router);
};

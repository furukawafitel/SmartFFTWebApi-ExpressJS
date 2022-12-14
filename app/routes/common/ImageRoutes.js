module.exports = (app) => {
  const common = require("../../controllers/common/commonController");
  var router = require("express").Router();

  // *** Get Data

  router.post("/getImageFromUrl", common.getImageFromUrl);

  app.use("/api/common", router);
};

module.exports = (app) => {
  const BomFlowProcessMaterialUsageMaterialPriceController = require("../../controllers/common/BomFlowProcessMaterialUsageMaterialPriceController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/getByBomIdAndFlowProcessIdAndLikeInuse",
    BomFlowProcessMaterialUsageMaterialPriceController.GetByBomIdAndFlowProcessIdAndLikeInuse
  );

  app.use("/api/bom-flow-process-material-usage-material-price", router);
};

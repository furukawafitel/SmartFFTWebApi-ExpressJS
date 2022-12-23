module.exports = (app) => {
  const SctBomFlowProcessMaterialUsagePriceController = require("../../controllers/standardCost/SctBomFlowProcessMaterialUsagePriceController");

  var router = require("express").Router();

  // *** Create a new
  router.post(
    "/create",
    SctBomFlowProcessMaterialUsagePriceController.createSctBomFlowProcessMaterialUsagePrice
  );

  // *** Delete
  router.delete(
    "/delete",
    SctBomFlowProcessMaterialUsagePriceController.DeleteBySctId
  );

  router.get(
    "/getBySctId",
    SctBomFlowProcessMaterialUsagePriceController.GetBySctId
  );

  app.use("/api/sct-bom-flow-process-material-usage-price", router);
};

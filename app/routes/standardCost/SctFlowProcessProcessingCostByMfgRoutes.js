module.exports = (app) => {
  const SctFlowProcessProcessingCostByMfgController = require("../../controllers/standardCost/SctFlowProcessProcessingCostByMfgController");

  var router = require("express").Router();

  // *** Create a new
  router.post(
    "/create",
    SctFlowProcessProcessingCostByMfgController.createSctFlowProcessProcessingCostByMfg
  );

  // *** Delete
  router.delete(
    "/delete",
    SctFlowProcessProcessingCostByMfgController.DeleteBySctId
  );

  router.get(
    "/getBySctId",
    SctFlowProcessProcessingCostByMfgController.GetBySctId
  );

  app.use("/api/sct-flow-process-processing-cost-by-mfg", router);
};

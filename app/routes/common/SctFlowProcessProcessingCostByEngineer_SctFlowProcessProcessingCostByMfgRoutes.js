module.exports = (app) => {
  const SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgController = require("../../controllers/common/SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgController");
  var router = require("express").Router();

  // *** Get Data

  router.get(
    "/getBySctId",
    SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgController.GetBySctId
  );

  app.use("/api/sct-flow-process-processing-cost-by-engineer-mfg", router);
};

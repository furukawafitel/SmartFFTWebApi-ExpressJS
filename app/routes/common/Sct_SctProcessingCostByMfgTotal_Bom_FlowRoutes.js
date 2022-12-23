module.exports = (app) => {
  const Sct_SctProcessingCostByMfgTotal_Bom_FlowController = require("../../controllers/common/Sct_SctProcessingCostByMfgTotal_Bom_FlowController");
  var router = require("express").Router();

  // *** Get Data

  router.get(
    "/getBySctId",
    Sct_SctProcessingCostByMfgTotal_Bom_FlowController.GetBySctId
  );

  app.use("/api/sct-sct-processing-cost-by-mfg-total-bom-flow", router);
};

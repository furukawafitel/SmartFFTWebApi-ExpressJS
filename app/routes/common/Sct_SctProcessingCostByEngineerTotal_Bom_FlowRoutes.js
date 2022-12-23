module.exports = (app) => {
  const Sct_SctProcessingCostByEngineerTotal_Bom_FlowController = require("../../controllers/common/Sct_SctProcessingCostByEngineerTotal_Bom_FlowController");
  var router = require("express").Router();

  // *** Get Data

  router.get(
    "/getBySctId",
    Sct_SctProcessingCostByEngineerTotal_Bom_FlowController.GetBySctId
  );

  app.use("/api/sct-sct-processing-cost-by-engineer-total-bom-flow", router);
};

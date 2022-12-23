module.exports = (app) => {
  const SctFlowProcessProcessingCostByEngineerController = require("../../controllers/standardCost/SctFlowProcessProcessingCostByEngineerController");

  var router = require("express").Router();

  // *** Create a new
  router.post(
    "/create",
    SctFlowProcessProcessingCostByEngineerController.createSctFlowProcessProcessingCostByEngineer
  );

  // *** Delete
  router.delete(
    "/delete",
    SctFlowProcessProcessingCostByEngineerController.DeleteBySctId
  );

  router.get(
    "/getBySctId",
    SctFlowProcessProcessingCostByEngineerController.GetBySctId
  );

  app.use("/api/sct-flow-process-processing-cost-by-engineer", router);
};

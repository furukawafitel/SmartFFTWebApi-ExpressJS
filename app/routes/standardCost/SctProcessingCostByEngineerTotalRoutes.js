module.exports = (app) => {
  const SctTotalCostController = require("../../controllers/standardCost/SctProcessingCostByEngineerTotalController");

  var router = require("express").Router();

  // *** Create a new
  router.post(
    "/create",
    SctTotalCostController.createSctFlowProcessProcessingCostByEngineer
  );

  // *** Delete
  router.delete("/delete", SctTotalCostController.DeleteBySctId);

  router.get("/getBySctIdAndInuse", SctTotalCostController.GetBySctIdAndInuse);

  app.use("/api/sct-processing-cost-by-engineer-total", router);
};

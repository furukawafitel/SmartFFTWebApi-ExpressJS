module.exports = (app) => {
  const SctProcessingCostByMfgTotalController = require("../../controllers/standardCost/SctProcessingCostByMfgTotalController");

  var router = require("express").Router();

  // *** Create a new
  router.post(
    "/create",
    SctProcessingCostByMfgTotalController.createSctProcessingCostByMfgTotal
  );

  // *** Delete
  router.delete("/delete", SctProcessingCostByMfgTotalController.DeleteBySctId);

  router.get(
    "/getBySctIdAndInuse",
    SctProcessingCostByMfgTotalController.GetBySctIdAndInuse
  );

  app.use("/api/sct-processing-cost-by-mfg-total", router);
};

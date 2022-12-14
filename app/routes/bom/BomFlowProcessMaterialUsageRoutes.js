module.exports = (app) => {
  const BomFlowProcessMaterialUsageController = require("../../controllers/bom/BomFlowProcessMaterialUsageController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/get",
    BomFlowProcessMaterialUsageController.getBomFlowProcessMaterialUsage
  );

  // *** Search
  router.get(
    "/search",
    BomFlowProcessMaterialUsageController.searchBomFlowProcessMaterialUsage
  );

  // *** Create a new
  router.post(
    "/create",
    BomFlowProcessMaterialUsageController.createBomFlowProcessMaterialUsage
  );

  // *** Update
  router.patch(
    "/update",
    BomFlowProcessMaterialUsageController.updateBomFlowProcessMaterialUsage
  );

  // *** Delete
  router.delete(
    "/delete",
    BomFlowProcessMaterialUsageController.deleteBomFlowProcessMaterialUsage
  );

  router.get("/getByFlowId", BomFlowProcessMaterialUsageController.GetByFlowId);

  router.get(
    "/getByBomIdAndFlowProcessIdAndLikeInuse",
    BomFlowProcessMaterialUsageController.GetByBomIdAndFlowProcessIdAndLikeInuse
  );

  router.get(
    "/getByLikeBomFlowProcessMaterialUsageName",
    BomFlowProcessMaterialUsageController.GetByLikeBomFlowProcessMaterialUsageName
  );

  app.use("/api/bom-flow-process-material-usage", router);
};

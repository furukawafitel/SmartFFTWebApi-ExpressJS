module.exports = (app) => {
  const SctTotalCostController = require("../../controllers/standardCost/SctTotalCostController");

  var router = require("express").Router();

  // *** Create a new
  router.post("/create", SctTotalCostController.createSctTotalCost);

  // *** Delete
  router.delete("/delete", SctTotalCostController.DeleteBySctId);

  router.get("/getBySctId", SctTotalCostController.GetBySctId);

  app.use("/api/sct-total-cost", router);
};

module.exports = (app) => {
  const SctCostConditionForFiscalYearResultController = require("../../controllers/standardCost/SctCostConditionForFiscalYearResultController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/get",
    SctCostConditionForFiscalYearResultController.getSctCostConditionForFiscalYearResult
  );

  // *** Search
  router.get(
    "/search",
    SctCostConditionForFiscalYearResultController.searchSctCostConditionForFiscalYearResult
  );

  // *** Create a new
  router.post(
    "/create",
    SctCostConditionForFiscalYearResultController.createSctCostConditionForFiscalYearResult
  );

  // *** Update
  router.patch(
    "/update",
    SctCostConditionForFiscalYearResultController.updateSctCostConditionForFiscalYearResult
  );

  // *** Delete
  router.delete(
    "/delete",
    SctCostConditionForFiscalYearResultController.deleteSctCostConditionForFiscalYearResult
  );

  router.get(
    "/getBySctIdAndInuse",
    SctCostConditionForFiscalYearResultController.GetBySctIdAndInuse
  );

  app.use("/api/sct-cost-condition-for-fiscal-year-result", router);
};

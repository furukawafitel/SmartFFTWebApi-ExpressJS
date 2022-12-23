module.exports = (app) => {
  const SctCostConditionForFiscalYearDefaultController = require("../../controllers/standardCost/SctCostConditionForFiscalYearDefaultController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/get",
    SctCostConditionForFiscalYearDefaultController.getSctCostConditionForFiscalYearDefault
  );

  // *** Search
  router.get(
    "/search",
    SctCostConditionForFiscalYearDefaultController.searchSctCostConditionForFiscalYearDefault
  );

  // *** Create a new
  router.post(
    "/create",
    SctCostConditionForFiscalYearDefaultController.createSctCostConditionForFiscalYearDefault
  );

  // *** Update
  router.patch(
    "/update",
    SctCostConditionForFiscalYearDefaultController.updateSctCostConditionForFiscalYearDefault
  );

  // *** Delete
  router.delete(
    "/delete",
    SctCostConditionForFiscalYearDefaultController.deleteSctCostConditionForFiscalYearDefault
  );

  router.get(
    "/getBySctIdAndInuse",
    SctCostConditionForFiscalYearDefaultController.GetBySctIdAndInuse
  );

  app.use("/api/sct-cost-condition-for-fiscal-year-default", router);
};

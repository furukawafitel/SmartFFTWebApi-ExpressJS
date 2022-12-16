module.exports = (app) => {
  const CostConditionForFiscalYearReferToProductMainController = require("../../controllers/standardCost/costConditionForFiscalYearReferToProductMainController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/get",
    CostConditionForFiscalYearReferToProductMainController.getCostConditionForFiscalYearReferToProductMain
  );

  // *** Search
  router.get(
    "/search",
    CostConditionForFiscalYearReferToProductMainController.searchCostConditionForFiscalYearReferToProductMain
  );

  // *** Create a new
  router.post(
    "/create",
    CostConditionForFiscalYearReferToProductMainController.createCostConditionForFiscalYearReferToProductMain
  );

  // *** Update
  router.patch(
    "/update",
    CostConditionForFiscalYearReferToProductMainController.updateCostConditionForFiscalYearReferToProductMain
  );

  // *** Delete
  router.delete(
    "/delete",
    CostConditionForFiscalYearReferToProductMainController.deleteCostConditionForFiscalYearReferToProductMain
  );

  app.use("/api/cost-condition-for-fiscal-year-refer-to-product-main", router);
};

module.exports = (app) => {
  const CostConditionForFiscalYearReferToProductTypeController = require("../../controllers/standardCost/costConditionForFiscalYearReferToProductTypeController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/get",
    CostConditionForFiscalYearReferToProductTypeController.getCostConditionForFiscalYearReferToProductType
  );

  // *** Search
  router.get(
    "/search",
    CostConditionForFiscalYearReferToProductTypeController.searchCostConditionForFiscalYearReferToProductType
  );

  // *** Create a new
  router.post(
    "/create",
    CostConditionForFiscalYearReferToProductTypeController.createCostConditionForFiscalYearReferToProductType
  );

  // *** Update
  router.patch(
    "/update",
    CostConditionForFiscalYearReferToProductTypeController.updateCostConditionForFiscalYearReferToProductType
  );

  // *** Delete
  router.delete(
    "/delete",
    CostConditionForFiscalYearReferToProductTypeController.deleteCostConditionForFiscalYearReferToProductType
  );

  app.use("/api/cost-condition-for-fiscal-year-refer-to-product-type", router);
};

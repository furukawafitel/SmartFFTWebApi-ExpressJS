module.exports = (app) => {
  const common = require("../../controllers/common/CostConditionForFiscalYearReferToProductMain_ProductTypeController");
  var router = require("express").Router();

  // *** Get Data

  router.get(
    "/getByProductMainIdAndProductTypeIdAndFiscalYear",
    common.GetByProductMainIdAndProductTypeIdAndFiscalYear
  );

  app.use(
    "/api/cost-condition-for-fiscal-year-refer-to-product-main-product-type",
    router
  );
};

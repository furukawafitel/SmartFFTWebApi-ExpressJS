module.exports = (app) => {
  const FiscalYearPeriodReferToCustomerInvoiceToController = require("../../controllers/standardCost/FiscalYearPeriodReferToCustomerInvoiceToController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/get",
    FiscalYearPeriodReferToCustomerInvoiceToController.getFiscalYearPeriodReferToCustomerInvoiceTo
  );

  // *** Search
  router.get(
    "/search",
    FiscalYearPeriodReferToCustomerInvoiceToController.searchFiscalYearPeriodReferToCustomerInvoiceTo
  );

  // *** Create a new
  router.post(
    "/create",
    FiscalYearPeriodReferToCustomerInvoiceToController.createFiscalYearPeriodReferToCustomerInvoiceTo
  );

  // *** Update
  router.patch(
    "/update",
    FiscalYearPeriodReferToCustomerInvoiceToController.updateFiscalYearPeriodReferToCustomerInvoiceTo
  );

  // *** Delete
  router.delete(
    "/delete",
    FiscalYearPeriodReferToCustomerInvoiceToController.deleteFiscalYearPeriodReferToCustomerInvoiceTo
  );

  router.get(
    "/getByLikeProductionPurposeNameAndInuse",
    FiscalYearPeriodReferToCustomerInvoiceToController.GetByLikeProductionPurposeNameAndInuse
  );

  app.use("/api/fiscal-year-period-refer-to-customer-invoice-to", router);
};

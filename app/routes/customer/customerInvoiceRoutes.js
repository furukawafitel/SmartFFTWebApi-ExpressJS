module.exports = (app) => {
  const CustomerInvoiceController = require("../../controllers/customer/customerInvoiceController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", CustomerInvoiceController.getCustomerInvoice);

  // *** Search
  router.get("/search", CustomerInvoiceController.searchCustomerInvoice);

  // *** Create a new
  router.post("/create", CustomerInvoiceController.createCustomerInvoice);

  // *** Update
  router.patch("/update", CustomerInvoiceController.updateCustomerInvoice);

  // *** Delete
  router.delete("/delete", CustomerInvoiceController.deleteCustomerInvoice);

  router.get(
    "/getByLikeCustomerInvoiceToName",
    CustomerInvoiceController.GetByLikeCustomerInvoiceToName
  );

  router.get(
    "/getByLikeCustomerInvoiceToAlphabetAndInuse",
    CustomerInvoiceController.GetByLikeCustomerInvoiceToAlphabetAndInuse
  );

  router.get(
    "/getCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse",
    CustomerInvoiceController.GetCustomerInvoiceToAndFiscalYearPeriodByLikeCustomerInvoiceToAlphabetAndInuse
  );

  app.use("/api/customer-invoice-to", router);
};

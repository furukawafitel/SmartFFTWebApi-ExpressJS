module.exports = (app) => {
  const CustomerOrderFromController = require("../../controllers/customer/customerOrderFromController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", CustomerOrderFromController.getCustomerOrderFrom);

  // *** Search
  router.get("/search", CustomerOrderFromController.searchCustomerOrderFrom);

  // *** Create a new
  router.post("/create", CustomerOrderFromController.createCustomerOrderFrom);

  // *** Update
  router.patch("/update", CustomerOrderFromController.updateCustomerOrderFrom);

  // *** Delete
  router.delete("/delete", CustomerOrderFromController.deleteCustomerOrderFrom);

  router.get(
    "/getByLikeCustomerOrderFromName",
    CustomerOrderFromController.GetByLikeCustomerOrderFromName
  );

  router.get(
    "/getByLikeCustomerOrderFromAlphabetAndInuse",
    CustomerOrderFromController.GetByLikeCustomerOrderFromAlphabetAndInuse
  );

  app.use("/api/customer-order-from", router);
};

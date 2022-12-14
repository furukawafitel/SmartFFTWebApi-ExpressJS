module.exports = (app) => {
  const CustomerShipToController = require("../../controllers/customer/customerShipController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", CustomerShipToController.getCustomerShipTo);

  // *** Search
  router.get("/search", CustomerShipToController.searchCustomerShipTo);

  // *** Create a new
  router.post("/create", CustomerShipToController.createCustomerShipTo);

  // *** Update
  router.patch("/update", CustomerShipToController.updateCustomerShipTo);

  // *** Delete
  router.delete("/delete", CustomerShipToController.deleteCustomerShipTo);

  router.get(
    "/getByLikeCustomerShipToName",
    CustomerShipToController.GetByLikeCustomerShipToName
  );

  router.get(
    "/getByLikeCustomerShipToAlphabetAndInuse",
    CustomerShipToController.GetByLikeCustomerShipToAlphabetAndInuse
  );

  app.use("/api/customer-ship-to", router);
};

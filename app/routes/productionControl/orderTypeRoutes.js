module.exports = (app) => {
  const OrderTypeController = require("../../controllers/productionControl/orderTypeController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", OrderTypeController.getOrderType);

  // *** Search
  router.get("/search", OrderTypeController.searchOrderType);

  // *** Create a new
  router.post("/create", OrderTypeController.createOrderType);

  // *** Update
  router.patch("/update", OrderTypeController.updateOrderType);

  // *** Delete
  router.delete("/delete", OrderTypeController.deleteOrderType);

  router.get(
    "/getByLikeOrderTypeNameAndInuse",
    OrderTypeController.GetByLikeOrderTypeNameAndInuse
  );

  router.get(
    "/getByLikeOrderTypeNameAndProductionPurposeIdAndInuse",
    OrderTypeController.GetByLikeOrderTypeNameAndProductionPurposeIdAndInuse
  );

  app.use("/api/order-type", router);
};

module.exports = (app) => {
  const WorkOrderController = require("../../controllers/customerCondition/workOrderController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", WorkOrderController.getWorkOrder);

  // *** Search
  router.get("/search", WorkOrderController.searchWorkOrder);

  // *** Create a new
  router.post("/create", WorkOrderController.createWorkOrder);

  // *** Update
  router.patch("/update", WorkOrderController.updateWorkOrder);

  // *** Delete
  router.delete("/delete", WorkOrderController.deleteWorkOrder);

  router.get(
    "/getByLikeWorkOrderCodeAndInuse",
    WorkOrderController.GetByLikeWorkOrderCodeAndInuse
  );

  router.get(
    "/getByLikeWorkOrderCodeAndProductMainIdAndInuse",
    WorkOrderController.GetByLikeWorkOrderCodeAndProductMainIdAndInuse
  );

  app.use("/api/work-order", router);
};

module.exports = (app) => {
  const FlowTypeController = require("../../controllers/flow/flowTypeController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", FlowTypeController.getFlowType);

  // *** Search
  router.get("/search", FlowTypeController.searchFlowType);

  // *** Create a new
  router.post("/create", FlowTypeController.createFlowType);

  // *** Update
  router.patch("/update", FlowTypeController.updateFlowType);

  // *** Delete
  router.delete("/delete", FlowTypeController.deleteFlowType);

  router.get(
    "/getByLikeFlowTypeName",
    FlowTypeController.GetByLikeFlowTypeName
  );

  app.use("/api/flow-type", router);
};

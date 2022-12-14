module.exports = (app) => {
  const FlowProcessController = require("../../controllers/flow/flowProcessController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", FlowProcessController.getFlowProcess);

  // *** Search
  router.get("/search", FlowProcessController.searchFlowProcess);

  // *** Create a new
  router.post("/create", FlowProcessController.createFlowProcess);

  // *** Update
  router.patch("/update", FlowProcessController.updateFlowProcess);

  // *** Delete
  router.delete("/delete", FlowProcessController.deleteFlowProcess);

  router.get(
    "/getByLikeFlowProcessName",
    FlowProcessController.GetByLikeFlowProcessName
  );

  router.get("/getByFlowId", FlowProcessController.GetByFlowId);

  app.use("/api/flow-process", router);
};

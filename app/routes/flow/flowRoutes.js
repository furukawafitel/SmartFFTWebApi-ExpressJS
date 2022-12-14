module.exports = (app) => {
  const FlowController = require("../../controllers/flow/flowController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", FlowController.getFlow);

  // *** Search
  router.get("/search", FlowController.searchFlow);

  // *** Create a new
  router.post("/create", FlowController.createFlow);

  // *** Update
  router.patch("/update", FlowController.updateFlow);

  // *** Delete
  router.delete("/delete", FlowController.deleteFlow);

  router.get("/getByLikeFlowName", FlowController.GetByLikeFlowName);

  router.get("/searchByProductMainId", FlowController.SearchByProductMainId);

  app.use("/api/flow", router);
};

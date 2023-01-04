module.exports = (app) => {
  const flowFlowProcessController = require("../../controllers/common/flowFlowProcessController");

  var router = require("express").Router();

  // *** Get
  router.get("/getByBomId", flowFlowProcessController.GetByBomId);

  app.use("/api/flow-flow-process", router);
};

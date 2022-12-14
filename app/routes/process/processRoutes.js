module.exports = (app) => {
  const ProcessController = require("../../controllers/process/processController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", ProcessController.getProcess);

  // *** Search
  router.get("/search", ProcessController.searchProcess);

  // *** Create a new
  router.post("/create", ProcessController.createProcess);

  // *** Update
  router.patch("/update", ProcessController.updateProcess);

  // *** Delete
  router.delete("/delete", ProcessController.deleteProcess);

  router.get("/getByLikeProcessName", ProcessController.GetByLikeProcessName);

  router.get(
    "/getByLikeProcessNameAndProductMainIdAndInuse",
    ProcessController.GetByLikeProcessNameAndProductMainIdAndInuse
  );

  app.use("/api/process", router);
};

module.exports = (app) => {
  const PartNoController = require("../../controllers/customerCondition/partNoController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", PartNoController.getPartNo);

  // *** Search
  router.get("/search", PartNoController.searchPartNo);

  // *** Create a new
  router.post("/create", PartNoController.createPartNo);

  // *** Update
  router.patch("/update", PartNoController.updatePartNo);

  // *** Delete
  router.delete("/delete", PartNoController.deletePartNo);

  router.get(
    "/getByLikePartNoCodeAndInuse",
    PartNoController.GetByLikePartNoCodeAndInuse
  );

  router.get(
    "/getByLikePartNoCodeAndProductMainIdAndInuse",
    PartNoController.GetByLikePartNoCodeAndProductMainIdAndInuse
  );

  app.use("/api/part-no", router);
};

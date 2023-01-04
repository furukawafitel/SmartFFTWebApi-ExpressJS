module.exports = (app) => {
  const SctController = require("../../controllers/standardCost/SctController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", SctController.getSct);

  // *** Search
  router.get("/search", SctController.searchSct);

  // *** Create a new
  router.post("/create/step1", SctController.createSctStep1);
  router.post("/create/step2", SctController.createSctStep2);
  router.post("/create/step3", SctController.createSctStep3);
  router.post("/create/step4", SctController.createSctStep4);

  // *** Update
  router.patch("/update/step1", SctController.updateSctStep1);
  router.patch("/update/step2", SctController.updateSctStep2);
  router.patch("/update/step3", SctController.updateSctStep3);
  router.patch("/update/step4", SctController.updateSctStep4);

  // *** Delete
  router.delete("/delete", SctController.deleteSct);

  router.get(
    "/getByLikeUnitOfMeasurementName",
    SctController.getByLikeSctNameAndInuse
  );

  router.get("/exportExcel", SctController.GetExcelFromURL);

  app.use("/api/sct", router);
};

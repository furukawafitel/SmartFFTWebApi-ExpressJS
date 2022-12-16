module.exports = (app) => {
  const SctController = require("../../controllers/standardCost/SctController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", SctController.getSct);

  // *** Search
  router.get("/search", SctController.searchSct);

  // *** Create a new
  router.post("/create", SctController.createSct);

  // *** Update
  router.patch("/update", SctController.updateSct);

  // *** Delete
  router.delete("/delete", SctController.deleteSct);

  router.get(
    "/getByLikeUnitOfMeasurementName",
    SctController.getByLikeSctNameAndInuse
  );

  router.get("/exportExcel", SctController.GetExcelFromURL);

  app.use("/api/sct", router);
};

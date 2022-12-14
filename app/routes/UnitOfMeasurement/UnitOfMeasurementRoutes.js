module.exports = (app) => {
  const unitOfMeasurementController = require("../../controllers/UnitOfMeasurement/UnitOfMeasurementController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", unitOfMeasurementController.getUnit);

  // *** Search
  router.get("/search", unitOfMeasurementController.searchUnit);

  // *** Create a new
  router.post("/create", unitOfMeasurementController.createUnit);

  // *** Update
  router.patch("/update", unitOfMeasurementController.updateUnit);

  // *** Delete
  router.delete("/delete", unitOfMeasurementController.deleteUnit);

  router.get(
    "/getByLikeUnitOfMeasurementName",
    unitOfMeasurementController.GetByLikeUnitOfMeasurementName
  );

  router.get("/getByLikeSymbol", unitOfMeasurementController.GetByLikeSymbol);

  app.use("/api/unit-of-measurement", router);
};

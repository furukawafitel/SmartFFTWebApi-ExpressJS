module.exports = (app) => {
  const MaterialPurposeController = require("../../controllers/itemMaster/materialPurposeController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", MaterialPurposeController.getMaterialPurpose);

  // *** Search
  router.get("/search", MaterialPurposeController.searchMaterialPurpose);

  // *** Create a new
  router.post("/create", MaterialPurposeController.createMaterialPurpose);

  // *** Update
  router.patch("/update", MaterialPurposeController.updateMaterialPurpose);

  // *** Delete
  router.delete("/delete", MaterialPurposeController.deleteMaterialPurpose);

  router.get(
    "/getByLikeMaterialPurposeNameAndInuse",
    MaterialPurposeController.GetByLikeMaterialPurposeNameAndInuse
  );

  app.use("/api/material-purpose", router);
};

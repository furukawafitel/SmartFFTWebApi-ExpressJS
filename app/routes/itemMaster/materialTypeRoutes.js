module.exports = (app) => {
  const MaterialTypeController = require("../../controllers/itemMaster/materialTypeController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", MaterialTypeController.getMaterialType);

  // *** Search
  router.get("/search", MaterialTypeController.searchMaterialType);

  // *** Create a new
  router.post("/create", MaterialTypeController.createMaterialType);

  // *** Update
  router.patch("/update", MaterialTypeController.updateMaterialType);

  // *** Delete
  router.delete("/delete", MaterialTypeController.deleteMaterialType);

  router.get(
    "/getByLikeMaterialTypeName",
    MaterialTypeController.GetByLikeMaterialTypeName
  );

  router.get(
    "/getByLikeMaterialTypeNameAndMaterialTypeCategoryId",
    MaterialTypeController.GetByLikeMaterialTypeNameAndMaterialTypeCategoryId
  );

  app.use("/api/material-type", router);
};

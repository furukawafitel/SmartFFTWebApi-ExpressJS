module.exports = (app) => {
  const MaterialCategoryController = require("../../controllers/itemMaster/materialCategoryController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", MaterialCategoryController.getMaterialCategory);

  // *** Search
  router.get("/search", MaterialCategoryController.searchMaterialCategory);

  // *** Create a new
  router.post("/create", MaterialCategoryController.createMaterialCategory);

  // *** Update
  router.patch("/update", MaterialCategoryController.updateMaterialCategory);

  // *** Delete
  router.delete("/delete", MaterialCategoryController.deleteMaterialCategory);

  router.get(
    "/getByLikeMaterialCategoryNameAndInuse",
    MaterialCategoryController.GetByLikeMaterialCategoryNameAndInuse
  );

  router.get(
    "/getForBomByLikeMaterialCategoryNameAndInuse",
    MaterialCategoryController.GetForBomByLikeMaterialCategoryNameAndInuse
  );

  router.get(
    "/getByLikeMaterialCategoryNameAndPurchaseModuleIdAndInuse",
    MaterialCategoryController.GetByLikeMaterialCategoryNameAndPurchaseModuleIdAndInuse
  );

  router.get(
    "/getMaterialCategoryCanBeSoldByLikeMaterialCategoryNameAndInuse",
    MaterialCategoryController.GetMaterialCategoryCanBeSoldByLikeMaterialCategoryNameAndInuse
  );

  router.get("/getAllByInuse", MaterialCategoryController.GetAllByInuse);

  app.use("/api/material-category", router);
};

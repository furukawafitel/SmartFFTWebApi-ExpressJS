module.exports = (app) => {
  const MaterialPriceController = require("../../controllers/itemMaster/materialPriceController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", MaterialPriceController.getMaterialPrice);

  // *** Search
  router.get("/search", MaterialPriceController.searchMaterialPrice);

  // *** Create a new
  router.post("/create", MaterialPriceController.createMaterialPrice);

  // *** Update
  router.patch("/update", MaterialPriceController.updateMaterialPrice);

  // *** Delete
  router.delete("/delete", MaterialPriceController.deleteMaterialPrice);

  router.get(
    "/getByLikeMaterialPriceNameAndInuse",
    MaterialPriceController.GetByLikeMaterialPriceNameAndInuse
  );

  app.use("/api/material-price", router);
};

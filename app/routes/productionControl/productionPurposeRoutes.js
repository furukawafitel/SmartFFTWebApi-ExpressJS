module.exports = (app) => {
  const productionPurposeController = require("../../controllers/productionControl/productPurposeController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", productionPurposeController.getProductionPurpose);

  // *** Search
  router.get("/search", productionPurposeController.searchProductionPurpose);

  // *** Create a new
  router.post("/create", productionPurposeController.createProductionPurpose);

  // *** Update
  router.patch("/update", productionPurposeController.updateProductionPurpose);

  // *** Delete
  router.delete("/delete", productionPurposeController.deleteProductionPurpose);

  router.get(
    "/getByLikeProductionPurposeNameAndInuse",
    productionPurposeController.getByLikeProductionPurposeNameAndInuse
  );

  app.use("/api/production-purpose", router);
};

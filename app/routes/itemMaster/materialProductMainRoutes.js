module.exports = (app) => {
  const MaterialProductMainController = require("../../controllers/itemMaster/materialProductMainController");

  var router = require("express").Router();

  // *** Create a new
  router.post(
    "/create",
    MaterialProductMainController.createMaterialProductMain
  );

  // *** Delete
  router.delete(
    "/delete",
    MaterialProductMainController.deleteMaterialProductMain
  );

  app.use("/api/material-product-main", router);
};

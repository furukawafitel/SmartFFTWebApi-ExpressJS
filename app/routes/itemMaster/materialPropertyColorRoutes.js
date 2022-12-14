module.exports = (app) => {
  const MaterialPropertyColorController = require("../../controllers/itemMaster/materialPropertyColorController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", MaterialPropertyColorController.getMaterialPropertyColor);

  // *** Search
  router.get(
    "/search",
    MaterialPropertyColorController.searchMaterialPropertyColor
  );

  // *** Create a new
  router.post(
    "/create",
    MaterialPropertyColorController.createMaterialPropertyColor
  );

  // *** MaterialPropertyColor
  router.patch(
    "/update",
    MaterialPropertyColorController.updateMaterialPropertyColor
  );

  // *** Delete
  router.delete(
    "/delete",
    MaterialPropertyColorController.deleteMaterialPropertyColor
  );

  router.get(
    "/getByLikeMaterialPropertyColorName",
    MaterialPropertyColorController.GetByLikeMaterialPropertyColorName
  );

  app.use("/api/material-property-color", router);
};

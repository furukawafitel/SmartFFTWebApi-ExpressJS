module.exports = (app) => {
  const MaterialPropertyMadeByController = require("../../controllers/itemMaster/materialPropertyMadeByController");

  var router = require("express").Router();

  // *** Get
  router.get(
    "/get",
    MaterialPropertyMadeByController.getMaterialPropertyMadeBy
  );

  // *** Search
  router.get(
    "/search",
    MaterialPropertyMadeByController.searchMaterialPropertyMadeBy
  );

  // *** Create a new
  router.post(
    "/create",
    MaterialPropertyMadeByController.createMaterialPropertyMadeBy
  );

  // *** Update
  router.patch(
    "/update",
    MaterialPropertyMadeByController.updateMaterialPropertyMadeBy
  );

  // *** Delete
  router.delete(
    "/delete",
    MaterialPropertyMadeByController.deleteMaterialPropertyMadeBy
  );

  router.get(
    "/getByLikeMaterialPropertyMadeByName",
    MaterialPropertyMadeByController.GetByLikeMaterialPropertyMadeByName
  );

  app.use("/api/material-property-made-by", router);
};

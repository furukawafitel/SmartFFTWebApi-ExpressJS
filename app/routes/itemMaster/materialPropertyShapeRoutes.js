module.exports = (app) => {
  const MaterialPropertyShapeController = require("../../controllers/itemMaster/materialPropertyShapeController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", MaterialPropertyShapeController.getMaterialPropertyShape);

  // *** Search
  router.get(
    "/search",
    MaterialPropertyShapeController.searchMaterialPropertyShape
  );

  // *** Create a new
  router.post(
    "/create",
    MaterialPropertyShapeController.createMaterialPropertyShape
  );

  // *** Update
  router.patch(
    "/update",
    MaterialPropertyShapeController.updateMaterialPropertyShape
  );

  // *** Delete
  router.delete(
    "/delete",
    MaterialPropertyShapeController.deleteMaterialPropertyShape
  );

  router.get(
    "/getByLikeMaterialPropertyShapeName",
    MaterialPropertyShapeController.GetByLikeMaterialPropertyShapeName
  );

  app.use("/api/material-property-shape", router);
};

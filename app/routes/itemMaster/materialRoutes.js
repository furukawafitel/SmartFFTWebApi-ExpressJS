module.exports = (app) => {
  const MaterialController = require("../../controllers/itemMaster/materialController");
  const fileUpload = require("express-fileupload");
  var router = require("express").Router();

  // *** Get
  router.get("/get", MaterialController.getMaterial);

  // *** Search
  router.get("/search", MaterialController.searchMaterial);

  // *** Create a new
  router.post(
    "/create",
    fileUpload({ createParentPath: true }),
    MaterialController.createMaterial
  );

  // *** Update
  router.patch("/update", MaterialController.updateMaterial);

  // *** Delete
  router.delete("/delete", MaterialController.deleteMaterial);

  router.get(
    "/getByLikeMaterialNameAndInuse",
    MaterialController.GetByLikeMaterialNameAndInuse
  );

  router.get(
    "/getCountByMaterialCategoryId",
    MaterialController.GetCountByMaterialCategoryId
  );

  router.get(
    "/getCountByMaterialPurposeId",
    MaterialController.GetCountByMaterialPurposeId
  );

  router.get(
    "/getCountByMaterialTypeId",
    MaterialController.GetCountByMaterialTypeId
  );

  router.get("/getCountByVendorId", MaterialController.GetCountByVendorId);

  router.get("/getCountByMakerId", MaterialController.GetCountByMakerId);

  router.get(
    "/getImageByItemCodeForSupportMesAndOldSystem",
    MaterialController.GetImageByItemCodeForSupportMesAndOldSystem
  );

  app.use("/api/material", router);
};

module.exports = (app) => {
  const BomController = require("../../controllers/bom/BomController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", BomController.getBom);

  // *** Search
  router.get("/search", BomController.searchBom);

  // *** Create a new
  router.post("/create", BomController.createBom);

  // *** Update
  router.patch("/update", BomController.updateBom);

  // *** Delete
  router.delete("/delete", BomController.deleteBom);

  router.get("/getByLikeBomName", BomController.GetByLikeBomName);

  router.get("/searchByProductTypeId", BomController.SearchByProductTypeId);

  app.use("/api/bom", router);
};

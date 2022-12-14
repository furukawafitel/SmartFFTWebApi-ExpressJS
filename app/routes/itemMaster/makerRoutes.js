module.exports = (app) => {
  const MakerController = require("../../controllers/itemMaster/makerController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", MakerController.getMaker);

  // *** Search
  router.get("/search", MakerController.searchMaker);

  // *** Create a new
  router.post("/create", MakerController.createMaker);

  // *** Update
  router.patch("/update", MakerController.updateMaker);

  // *** Delete
  router.delete("/delete", MakerController.deleteMaker);

  router.get(
    "/GetByLikeMakerNameAndInuse",
    MakerController.GetByLikeMakerNameAndInuse
  );

  app.use("/api/maker", router);
};

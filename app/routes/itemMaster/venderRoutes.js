module.exports = (app) => {
  const VenderController = require("../../controllers/itemMaster/venderController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", VenderController.getVender);

  // *** Search
  router.get("/search", VenderController.searchVender);

  // *** Create a new
  router.post("/create", VenderController.createVender);

  // *** Update
  router.patch("/update", VenderController.updateVender);

  // *** Delete
  router.delete("/delete", VenderController.deleteVender);

  router.get("/getByLikeVendorName", VenderController.GetByLikeVendorName);

  router.get(
    "/getByLikeVendorAlphabetAndInuse",
    VenderController.GetByLikeVendorAlphabetAndInuse
  );

  app.use("/api/vendor", router);
};

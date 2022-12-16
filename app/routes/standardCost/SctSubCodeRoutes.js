module.exports = (app) => {
  const SctSubCodeController = require("../../controllers/standardCost/SctSubCodeController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", SctSubCodeController.getSctSubCode);

  // *** Search
  router.get("/search", SctSubCodeController.searchSctSubCode);

  // *** Create a new
  router.post("/create", SctSubCodeController.createSctSubCode);

  // *** Update
  router.patch("/update", SctSubCodeController.updateSctSubCode);

  // *** Delete
  router.delete("/delete", SctSubCodeController.deleteSctSubCode);

  router.get(
    "/getByLikeSctSubCodeNameAndInuse",
    SctSubCodeController.GetByLikeSctSubCodeNameAndInuse
  );

  app.use("/api/sct-sub-code", router);
};

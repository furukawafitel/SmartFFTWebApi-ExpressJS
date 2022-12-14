module.exports = (app) => {
  const SpecificationController = require("../../controllers/customerCondition/SpecificationController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", SpecificationController.getSpecification);

  // *** Search
  router.get("/search", SpecificationController.searchSpecification);

  // *** Create a new
  router.post("/create", SpecificationController.createSpecification);

  // *** Update
  router.patch("/update", SpecificationController.updateSpecification);

  // *** Delete
  router.delete("/delete", SpecificationController.deleteSpecification);

  router.get(
    "/getByLikeSpecificationCodeAndInuse",
    SpecificationController.GetByLikeSpecificationCodeAndInuse
  );

  router.get(
    "/getByLikeSpecificationCodeAndProductMainIdAndInuse",
    SpecificationController.GetByLikeSpecificationCodeAndProductMainIdAndInuse
  );

  app.use("/api/specification", router);
};

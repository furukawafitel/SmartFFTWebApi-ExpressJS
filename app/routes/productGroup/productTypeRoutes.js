module.exports = (app) => {
  const productType = require("../../controllers/productGroup/productTypeController");

  var router = require("express").Router();

  router.get("/get", productType.getProductType);

  router.get("/search", productType.searchProductType);

  router.post("/create", productType.createProductType);

  router.patch("/update", productType.updateProductType);

  router.delete("/delete", productType.deleteProductType);

  router.get(
    "/getByLikeProductTypeNameAndInuse",
    productType.GetByLikeProductTypeNameAndInuse
  );

  router.get(
    "/getByLikeProductTypeNameAndProductSubIdAndInuse",
    productType.GetByLikeProductTypeNameAndProductSubIdAndInuse
  );

  router.get("/getByProductSubId", productType.GetByProductSubId);

  app.use("/api/product-type", router);
};

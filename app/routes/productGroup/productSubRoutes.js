module.exports = (app) => {
  const productSub = require("../../controllers/productGroup/productSubController");

  var router = require("express").Router();

  router.get("/get", productSub.getProductSub);

  router.get("/search", productSub.searchProductSub);

  router.get(
    "/getByLikeProductSubNameAndInuse",
    productSub.getByLikeProductSubNameAndInuse
  );

  router.get(
    "/getByLikeProductSubNameAndProductMainIdAndInuse",
    productSub.getByLikeProductSubNameAndProductMainIdAndInuse
  );

  router.post("/create", productSub.createProductSub);

  router.patch("/update", productSub.updateProductSub);

  router.delete("/delete", productSub.deleteProductSub);

  router.get("/getByProductMainId", productSub.getByProductMainId);

  app.use("/api/product-sub", router);
};

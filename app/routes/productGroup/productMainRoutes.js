module.exports = (app) => {
  const productMain = require("../../controllers/productGroup/productMainController");

  var router = require("express").Router();

  // *** Get Data
  router.get("/get", productMain.GetProductMain);

  // *** Get Data
  router.get("/search", productMain.SearchProductMain);

  // *** Get Data
  router.get(
    "/getByLikeProductMainNameAndInuse",
    productMain.GetByLikeProductMainNameAndInuse
  );

  // *** Create a new product-category
  router.post("/create", productMain.CreateProductMain);

  // *** Update product-category
  router.patch("/update", productMain.UpdateProductMain);

  // *** Delete product-category
  router.delete("/delete", productMain.DeleteProductMain);

  router.get(
    "/getByLikeProductMainNameAndProductCategoryIdAndInuse",
    productMain.GetByLikeProductMainNameAndProductCategoryIdAndInuse
  );

  app.use("/api/product-main", router);
};

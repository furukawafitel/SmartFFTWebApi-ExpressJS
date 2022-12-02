module.exports = (app) => {
  const productCategory = require("../../controllers/productGroup/productCategoryController");

  var router = require("express").Router();

  // *** Get signin Data
  router.get("/get", productCategory.GetProductcategory);

  // *** Get signin Data
  router.get("/search", productCategory.SearchProductcategory);

  // *** Get signin Data
  router.get(
    "/getByLikeProductCategoryNameAndInuse",
    productCategory.GetByLikeProductCategoryNameAndInuse
  );

  // *** Create a new product-category
  router.post("/create", productCategory.CreateProductCategory);

  // *** Update product-category
  router.patch("/update", productCategory.UpdateProductcategory);

  // *** Delete product-category
  router.delete("/delete", productCategory.DeleteProductcategory);

  app.use("/api/product-category", router);
};

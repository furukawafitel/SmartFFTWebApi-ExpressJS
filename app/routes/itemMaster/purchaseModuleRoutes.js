module.exports = (app) => {
  const PurchaseModuleController = require("../../controllers/itemMaster/purchaseModuleController");

  var router = require("express").Router();

  // *** Get
  router.get("/get", PurchaseModuleController.getPurchaseModule);

  // *** Search
  router.get("/search", PurchaseModuleController.searchPurchaseModule);

  // *** Create a new
  router.post("/create", PurchaseModuleController.createPurchaseModule);

  // *** Update
  router.patch("/update", PurchaseModuleController.updatePurchaseModule);

  // *** Delete
  router.delete("/delete", PurchaseModuleController.deletePurchaseModule);

  router.get(
    "/getByLikePurchaseModuleNameAndInuse",
    PurchaseModuleController.GetByLikePurchaseModuleNameAndInuse
  );

  app.use("/api/purchase-module", router);
};

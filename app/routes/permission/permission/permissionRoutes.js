module.exports = (app) => {
  const permission = require("../../../controllers/permission/permission/permissionController");

  var router = require("express").Router();

  // *** Get Data

  router.get("/PermissionCheck", permission.getPermissionCheck);

  router.get("/SignIn", permission.signin);

  router.get("/getUserGroup", permission.getUserGroup);

  router.get("/getMenu", permission.getLoginMenu);

  app.use("/api/permission", router);
};

const express = require("express");

const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");

var corsOptions = {
  //origin: "http://localhost:3001",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "SmartFFT API application is running :D" });
});
// require("./app/routes/common/commonRoutes")(app);
require("./app/routes/common/ImageRoutes")(app);
require("./app/routes/permission/permission/permissionRoutes")(app);
require("./app/routes/productGroup/productCategoryRoutes")(app);
require("./app/routes/productGroup/productMainRoutes")(app);
require("./app/routes/productGroup/productSubRoutes")(app);
require("./app/routes/productGroup/productTypeRoutes")(app);
require("./app/routes/UnitOfMeasurement/UnitOfMeasurementRoutes")(app);
require("./app/routes/productionControl/productionPurposeRoutes")(app);
require("./app/routes/productionControl/orderTypeRoutes")(app);
require("./app/routes/customer/customerOrderFromRoutes")(app);
require("./app/routes/customer/customerShipRoutes")(app);
require("./app/routes/customer/customerInvoiceRoutes")(app);
require("./app/routes/customerCondition/partNoRoutes")(app);
require("./app/routes/customerCondition/workOrderRoutes")(app);
require("./app/routes/customerCondition/SpecificationRoutes")(app);
require("./app/routes/itemMaster/materialCategoryRoutes")(app);
require("./app/routes/itemMaster/materialPurposeRoutes")(app);
require("./app/routes/itemMaster/materialTypeRoutes")(app);
require("./app/routes/itemMaster/materialPriceRoutes")(app);
require("./app/routes/itemMaster/materialProductMainRoutes")(app);
require("./app/routes/itemMaster/materialRoutes")(app);
require("./app/routes/itemMaster/materialPropertyColorRoutes")(app);
require("./app/routes/itemMaster/materialPropertyMadeByRoutes")(app);
require("./app/routes/itemMaster/materialPropertyShapeRoutes")(app);
require("./app/routes/itemMaster/venderRoutes")(app);
require("./app/routes/itemMaster/makerRoutes")(app);
require("./app/routes/itemMaster/purchaseModuleRoutes")(app);
require("./app/routes/process/processRoutes")(app);
require("./app/routes/flow/flowTypeRoutes")(app);
require("./app/routes/flow/flowProcessRoutes")(app);
require("./app/routes/flow/flowRoutes")(app);
require("./app/routes/Bom/BomRoutes")(app);
require("./app/routes/Bom/BomFlowProcessMaterialUsageRoutes")(app);
require("./app/routes/standardCost/costConditionForFiscalYearReferToProductMainRoutes")(
  app
);
require("./app/routes/standardCost/SctTotalCostRoutes")(app);
require("./app/routes/standardCost/costConditionForFiscalYearReferToProductTypeRoutes")(
  app
);
require("./app/routes/standardCost/SctBomFlowProcessMaterialUsagePriceRoutes")(
  app
);
require("./app/routes/standardCost/FiscalYearPeriodReferToCustomerInvoiceToRoutes")(
  app
);
require("./app/routes/standardCost/SctSubCodeRoutes")(app);
require("./app/routes/standardCost/SctRoutes")(app);

require("./app/routes/common/CostConditionForFiscalYearReferToProductMain_ProductTypeRoutes")(
  app
);
require("./app/routes/standardCost/SctCostConditionForFiscalYearResultRoutes")(
  app
);
require("./app/routes/standardCost/SctCostConditionForFiscalYearDefaultRoutes")(
  app
);

require("./app/routes/common/SctFlowProcessProcessingCostByEngineer_SctFlowProcessProcessingCostByMfgRoutes")(
  app
);

require("./app/routes/common/Sct_SctProcessingCostByMfgTotal_Bom_FlowRoutes")(
  app
);

require("./app/routes/common/Sct_SctProcessingCostByEngineerTotal_Bom_FlowRoutes")(
  app
);

require("./app/routes/common/BomFlowProcessMaterialUsageMaterialPriceRoutes")(
  app
);

require("./app/routes/standardCost/SctProcessingCostByEngineerTotalRoutes")(
  app
);

require("./app/routes/standardCost/SctFlowProcessProcessingCostByEngineerRoutes")(
  app
);

require("./app/routes/standardCost/SctFlowProcessProcessingCostByMfgRoutes")(
  app
);

require("./app/routes/standardCost/SctProcessingCostByMfgTotalRoutes")(app);
require("./app/routes/common/flowFlowProcessRoutes")(app);

const PORT = process.env.PORT || 8091;
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

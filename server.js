const express = require("express");

const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");

var corsOptions = {
  // origin: "http://localhost:3001",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "SmartFFT API application is running :D" });
});

require("./app/routes/permission/permission/permissionRoutes")(app);
require("./app/routes/productGroup/productCategoryRoutes")(app);
require("./app/routes/productGroup/productMainRoutes")(app);
require("./app/routes/productGroup/productSubRoutes")(app);
require("./app/routes/productGroup/productTypeRoutes")(app);
require("./app/routes/common/commonRoutes")(app);

const PORT = process.env.PORT || 8091;
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

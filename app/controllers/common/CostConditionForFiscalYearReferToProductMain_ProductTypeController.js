const CostConditionForFiscalYearReferToProductMain_ProductTypeModel = require("../../models/common/CostConditionForFiscalYearReferToProductMain_ProductTypeModel");

// ** Get productMain
const GetByProductMainIdAndProductTypeIdAndFiscalYear = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CostConditionForFiscalYearReferToProductMain_ProductTypeModel.GetByProductMainIdAndProductTypeIdAndFiscalYear(
        dataItem,
        (err, data) => {
          for (let i = 0; i < data.length; i++) {
            data["No"] = i + 1;
          }
          res.send({
            Status: true,
            Message: "Search Data Success",
            ResultOnDb: data,
            MethodOnDb:
              "Search GetByProductMainIdAndProductTypeIdAndFiscalYear",
            TotalCountOnDb: ""
          });
        }
      );
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

module.exports = {
  GetByProductMainIdAndProductTypeIdAndFiscalYear
};

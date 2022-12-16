// ** COMMON CONTROLLER
const CommonModels = require("../../models/common/commonModel");

const getImageFromUrl = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      const picPath = dataItem["URL_PATH"];
      res.sendFile(picPath);
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

const GetYearNow = async (req, res) => {
  try {
    let dataItem;

    CommonModels.GetYearNow(dataItem, (err, data) => {
      res.send({
        Status: true,
        Message: "Search Data Success",
        ResultOnDb: data,
        MethodOnDb: "Search GetYearNow",
        TotalCountOnDb: ""
      });
    });
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

const GetByLikeMonthShortNameEnglish = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      CommonModels.GetByLikeMonthShortNameEnglish(dataItem, (err, data) => {
        for (let i = 0; i < data.length; i++) {
          data["No"] = i + 1;
        }
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search GetByLikeMonthShortNameEnglish",
          TotalCountOnDb: ""
        });
      });
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

module.exports = {
  getImageFromUrl,
  GetYearNow,
  GetByLikeMonthShortNameEnglish
};

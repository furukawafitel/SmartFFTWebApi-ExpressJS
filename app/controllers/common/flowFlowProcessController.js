const Flow_FlowProcessModel = require("../../models/common/flowFlowProcessModel");

// ** Get productMain
const GetByBomId = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      Flow_FlowProcessModel.GetByBomId(dataItem, (err, data) => {
        const allowed = [
          "PROCESS_ID",
          "PROCESS_NO",
          "PROCESS_NAME",
          "FLOW_PROCESS_ID"
        ];
        (hash = data.reduce(
          (p, c) => (
            p[c.PROCESS_ID] ? p[c.PROCESS_ID].push(c) : (p[c.PROCESS_ID] = [c]),
            p
          ),
          {}
        )),
          (newData = Object.keys(hash).map((k) => ({
            PROCESS_ID: k,
            PROCESS_NO: hash[k][0]["PROCESS_NO"],
            PROCESS_NAME: hash[k][0]["PROCESS_NAME"],
            FLOW_PROCESS_ID: hash[k][0]["FLOW_PROCESS_ID"],
            LIST_MATERIAL_IN_PROCESS:
              hash[k][0]["MATERIAL_ID"] != null ? hash[k] : []
          })));

        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: newData,
          MethodOnDb: "Search GetByBomId",
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
  GetByBomId
};

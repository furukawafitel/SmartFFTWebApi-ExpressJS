const PermissionModel = require("../../../models/permission/permission/permissionModel.js");

// ** Get userGroupByUsername
const getPermissionCheck = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      PermissionModel.getPermissionCheck(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search UserGroup",
          TotalCountOnDb: data.length
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

// ** Get permission from the database (with condition).
const signin = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      PermissionModel.signin(dataItem, (err, data) => {
        if (data.StatusOnDb == true) {
          if (data.length > 0) {
            res.send({
              Status: true,
              Message: "Sign In Successs",
              ResultOnDb: data,
              MethodOnDb: "Signin",
              TotalCountOnDb: ""
            });
          } else {
            res.send({
              Status: false,
              Message: "Username or Password incorrect",
              ResultOnDb: "",
              MethodOnDb: "Signin",
              TotalCountOnDb: ""
            });
          }
        } else {
          res.send({
            Status: false,
            Message: "Couldn't find employee code.",
            ResultOnDb: "",
            MethodOnDb: "Signin",
            TotalCountOnDb: ""
          });
        }
      });
    }
  } catch (err) {
    res.send({
      Message: err.message,
      Status: false
    });
  }
};

// ** Get userGroupByUsername
const getUserGroup = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }
    if (dataItem !== "") {
      PermissionModel.getUserGroup(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: data,
          MethodOnDb: "Search UserGroup",
          TotalCountOnDb: data.length
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

// ** Get GetMenu
const getLoginMenu = async (req, res) => {
  try {
    let dataItem;
    if (Object.entries(req.body).length === 0) {
      dataItem = JSON.parse(req.query.data);
    } else {
      dataItem = req.body;
    }

    if (dataItem !== "") {
      PermissionModel.getLoginMenu(dataItem, (err, data) => {
        res.send({
          Status: true,
          Message: "Search Data Success",
          ResultOnDb: createMenuTree(data, 0),
          MethodOnDb: "Search MenuLogin",
          TotalCountOnDb: data.length
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

// ** CreateMenu Tree
function createMenuTree(data, menuParentId) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (element["MENU_PARENT_ID"] == menuParentId) {
      if (element["MENU_LEAF"] == 1) {
        menu = {
          id: String(element["MENU_ID"]),
          text: element["MENU_NAME"],
          leaf: element["MENU_LEAF"] == 1 ? true : false,
          expanded: true,
          children: []
        };
        result.push(menu);
      } else {
        menu = {
          id: String(element["MENU_ID"]),
          text: element["MENU_NAME"],
          leaf: element["MENU_LEAF"] == 1 ? true : false,
          expanded: true,
          children: createMenuTree(data, element["MENU_ID"])
        };
        result.push(menu);
      }
    }
  }

  return result;
}

module.exports = {
  getPermissionCheck,
  signin,
  getUserGroup,
  getLoginMenu
};

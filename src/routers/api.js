const express = require("express");
const routerAPI = express.Router();
const {
  getHomePage,
  getFHA,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  deleteUser,
} = require("../controllers/homeController");
const {
  getHomeAPI,
  postApiCreateUser,
  putApiUpdateUser,
  deleteUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
  res.status(200).json({ message: "API status is working" });
  res.send("API is working");
});
routerAPI.get("/users", getHomeAPI);
//router.get
routerAPI.get("/FHA", getFHA);
//router.post
routerAPI.post("/users", postApiCreateUser);
routerAPI.put("/users", putApiUpdateUser);
routerAPI.get("/createUser", getCreatePage);
routerAPI.get("/updateUser/:id", getUpdatePage);
//router.get('/updateUser/:id',  getUpdatePage);
routerAPI.post("/updateUser", postUpdateUser);
routerAPI.delete("/users", deleteUserAPI);
module.exports = routerAPI;

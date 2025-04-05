const express = require("express");
const AuthRoute = express.Router();
const AuthController = require("../../controllers/authcontroller/AuthController")


AuthRoute.post("/signin", AuthController.SignIn);
AuthRoute.post("/signup", AuthController.SignUp);

module.exports = AuthRoute
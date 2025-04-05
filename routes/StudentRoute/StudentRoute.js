const express = require("express");
const StudentRoute = express.Router();
const StudentController = require("../../controllers/studentcontroller/StudentController");
const AuthMiddleware = require("../../middlewares/AuthMiddleware");

StudentRoute.use(AuthMiddleware(["student"]));

StudentRoute.get("/dashboard", StudentController.Dhashboard);
StudentRoute.put("/profile", StudentController.UpdateStudent);

module.exports = StudentRoute;

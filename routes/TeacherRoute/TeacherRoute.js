const express = require("express");
const TeacherRoute = express.Router();
const TeacherController = require("../../controllers/teachercontroller/TeacherController");
const StudentController = require("../../controllers/studentcontroller/StudentController")
const AuthMiddleware = require("../../middlewares/AuthMiddleware");

TeacherRoute.use(AuthMiddleware(["admin","teacher","student"]));

TeacherRoute.get("/dashboard", TeacherController.Dhashboard);
TeacherRoute.put("/profile", TeacherController.UpdateTeacher);
TeacherRoute.get("/classstudent", TeacherController.ClassStudent);

// student Route
TeacherRoute.get("/student", StudentController.GetStudent);
TeacherRoute.get("/student/:id", StudentController.GetSingleStudent);
TeacherRoute.post("/student", StudentController.StudentAdd);
TeacherRoute.put("/student", StudentController.UpdateStudent);
TeacherRoute.delete("/student/:id", StudentController.deleteStudent);



module.exports = TeacherRoute;
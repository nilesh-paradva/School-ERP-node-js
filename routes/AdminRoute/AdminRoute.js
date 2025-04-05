const express = require("express");
const AdminRoute = express.Router();
const AdminController = require("../../controllers/admincontroller/AdminController");
const AuthMiddleware = require("../../middlewares/AuthMiddleware");
const TeacherController = require("../../controllers/teachercontroller/TeacherController");
const StudentController = require("../../controllers/studentcontroller/StudentController")

AdminRoute.use(AuthMiddleware(["admin"]));


AdminRoute.get("/dashboard", AdminController.Dashboard);
AdminRoute.put("/profile", AdminController.AdminProfile);

// teacher Route
AdminRoute.get("/teacher", TeacherController.GetTeachers);
AdminRoute.get("/teacher/:id", TeacherController.GetSingleTeacher);
AdminRoute.post("/teacher", TeacherController.TeacherAdd);
AdminRoute.put("/teacher", TeacherController.UpdateTeacher);
AdminRoute.delete("/teacher/:id", TeacherController.deleteTeacher);

// student route
AdminRoute.get("/student", StudentController.GetStudent);
AdminRoute.get("/student/:id", StudentController.GetSingleStudent);
AdminRoute.post("/student", StudentController.StudentAdd);
AdminRoute.put("/student", StudentController.UpdateStudent);
AdminRoute.delete("/student/:id", StudentController.deleteStudent);


module.exports = AdminRoute
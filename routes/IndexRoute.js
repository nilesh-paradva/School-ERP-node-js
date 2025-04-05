const express = require("express");
const IndexRoute = express.Router();

const AuthRoute = require("./AuthRoute/AuthRoute");
const AdminRoute = require("../routes/AdminRoute/AdminRoute");
const TeacherRoute = require("../routes/TeacherRoute/TeacherRoute");
const StudentRoute = require("../routes/StudentRoute/StudentRoute")

IndexRoute.use("/auth", AuthRoute);
IndexRoute.use("/admin", AdminRoute);
IndexRoute.use("/teacher", TeacherRoute);
IndexRoute.use("/student", StudentRoute);

module.exports = IndexRoute
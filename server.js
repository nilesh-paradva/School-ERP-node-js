const express = require("express");
const app = express();

// env file get 
const dotenv = require("dotenv");
dotenv.config();

//port
const PORT = process.env.PORT || 5000;

//db connect
const db = require("./config/db");
db();

// route
const Routes = require("./routes/IndexRoute");

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/", Routes);

app.listen(PORT, (err) => {
    (!err) ? console.log(`server is started in http://localhost:${PORT}`) : console.log("server is not started");
})
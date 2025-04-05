const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");

const Dhashboard = (req,res) => {
    res.status(200).json({status : true, msg : "Welcom to Student Dashboard"})
}

const GetStudent = async(req,res) => {
    try{
        const AllStudent = await UserModel.find({role : 'student'});
        res.status(200).json({status : true, data : AllStudent, msg : "All Student Get"})
    }catch(err){
        console.log("Server Err", err);
        res.status(500).json({status : false, msg : "Server Err"})
    }
}

const GetSingleStudent = async(req,res) => {
    try{
        const SingleStudent = await UserModel.findOne({_id : req.params.id});
        res.status(200).json({status : true, SingleStudent, msg : "Get Single Student"})
    }catch(err){
        console.log("Server Err", err);
        res.status(500).json({status : false, msg : "Server Err"})
    }
}

const StudentAdd = async(req,res) => {
    try{

        const userFind = await UserModel.findOne({email : req.body.email});
        if(!req.body.username || !req.body.email || !req.body.password ) return res.status(400).json({status : false, msg : "Please fill in all fields"}); 
        if(userFind) return res.status(400).json({status : false, msg : "Student Alredy Register"});  
        
        await UserModel.create({
            ...req.body,
            teacherId : req.user.id,
            password : await bcrypt.hash(req.body.password, 12)
        })

        res.status(200).json({status : true, msg : "Student Add SucessFully"});

    }catch(err){
        console.log("Server Err", err);
        res.status(500).json({status : false, msg : "Server Err"})
    }
}

const UpdateStudent = async(req,res) => {
    try{
        const updateStudent = await UserModel.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({status : true, updateStudent, msg : "Student profile update sucessfully"});
    }catch(err){
        console.log("Server Err", err);
        res.status(200).json({status : false, msg : "Server Err"})
    }
}

const deleteStudent = async(req,res) => {
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({status : true, msg : "Student Delete sucessfully"});
    }catch(err){
        console.log("Server Err", err);
        res.status(200).json({status : false, msg : "Server Err"})
    }
}

module.exports = {Dhashboard, GetStudent, GetSingleStudent, StudentAdd, UpdateStudent, deleteStudent}
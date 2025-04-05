const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");

const Dhashboard = (req,res) => {
    res.status(200).json({status : true, msg : "Welcom to Teacher Dashboard"})
}

const GetTeachers = async(req,res) => {
    try{
        const AllTeachers = await UserModel.find({role : 'teacher'});
        res.status(200).json({status : true, data : AllTeachers, msg : "Welcom to Teacher Dashboard"})
    }catch(err){
        console.log("Server Err", err);
        res.status(500).json({status : false, msg : "Server Err"})
    }
}

const GetSingleTeacher = async(req,res) => {
    try{
        const SingleTeacher = await UserModel.findOne({_id : req.params.id});
        res.status(200).json({status : true, SingleTeacher, msg : "Get Single Teacher"})
    }catch(err){
        console.log("Server Err", err);
        res.status(500).json({status : false, msg : "Server Err"})
    }
}

const TeacherAdd = async(req,res) => {
    try{

        const userFind = await UserModel.findOne({email : req.body.email});
        if(!req.body.username || !req.body.email || !req.body.password ) return res.status(400).json({status : false, msg : "Please fill in all fields"}); 
        if(userFind) return res.status(400).json({status : false, msg : "Teacher Alredy Register"});  
        
        await UserModel.create({
            ...req.body,
            password : await bcrypt.hash(req.body.password, 12)
        })

        res.status(200).json({status : true, msg : "Teacher Add SucessFully"});

    }catch(err){
        console.log("Server Err", err);
        res.status(500).json({status : false, msg : "Server Err"})
    }
}

const UpdateTeacher = async(req,res) => {
    try{
        const updateTeacher = await UserModel.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({status : true, updateTeacher, msg : "Teacher profile update sucessfully"});
    }catch(err){
        console.log("Server Err", err);
        res.status(200).json({status : false, msg : "Server Err"})
    }
}

const deleteTeacher = async(req,res) => {
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({status : true, msg : "Teacher Delete sucessfully"});
    }catch(err){
        console.log("Server Err", err);
        res.status(200).json({status : false, msg : "Server Err"})
    }
}

const ClassStudent = async(req,res) => {
    try{
        const ClassStudentGet =  await UserModel.find({
            teacherId : req.user.id
        }).populate('teacherId')
        res.status(200).json({status : true,ClassStudentGet, msg : "Teacher Delete sucessfully"});
        
    }catch(err){
        console.log("Server Err", err);
        res.status(200).json({status : false, msg : "Server Err"})
    }
}

module.exports = {Dhashboard, GetTeachers, GetSingleTeacher, TeacherAdd, UpdateTeacher, deleteTeacher, ClassStudent}
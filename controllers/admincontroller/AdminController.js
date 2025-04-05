const UserModel = require("../../models/UserModel")

const Dashboard = (req,res) => {
    res.status(200).json({status : true, msg: "welcom to Admin dashboard"});
}

const AdminProfile = async (req,res) => {
    try{
        const updateAdmin = await UserModel.findByIdAndUpdate(req.user._id, req.body)
        res.status(200).json({status : true, updateAdmin, msg : "admin profile update sucessfully"});
    }catch(err){
        console.log("Server Err", err);
        res.status(200).json({status : false, msg : "Server Err"})
    }
}

module.exports = {Dashboard, AdminProfile}
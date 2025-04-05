const UserModel = require("../../models/UserModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignUp = async (req,res) => {

    try{
        const userFind = await UserModel.findOne({email : req.body.email});
        if(!req.body.username || !req.body.email || !req.body.password ) return res.status(400).json({status : false, msg : "Please fill in all fields"}); 
        if(userFind) return res.status(400).json({status : false, msg : "User Alredy Register Please SignIn"});  
        
        await UserModel.create({
            ...req.body,
            password : await bcrypt.hash(req.body.password, 12)
        })

        res.status(200).json({status : true, msg : "SignUp SucessFully"});

    }catch(err){
        res.status(500).json({status : false, msg : "server error"})
    }
}

const SignIn = async (req,res) => {
    try{
        if(!req.body.email || !req.body.password) return res.status(400).json({status : false, msg : "Please Fill All Field"});
        
        const userFind = await UserModel.findOne({email : req.body.email});
        if(!userFind) return res.status(400).json({status : false, msg : "User not register please signUp"});
        
        const varify = await bcrypt.compare(req.body.password, userFind.password);
        if(!varify) return res.status(400).json({status : false, msg : "Password Not Match"});
        
        const Token = jwt.sign({id : userFind._id, role : userFind.role}, "prectice-web-token")
        res.status(200).json({status : false, Token, msg : "SignIn SucessFully"});

    }catch(err){
        res.status(500).json({status : false, msg : "server error"})
    }
}

module.exports = {SignUp, SignIn}
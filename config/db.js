const mogoose = require("mongoose");

const Dbconnect = async() => {
    try{
        // console.log("db connecting string", process.env.MONGO_URL);
        await mogoose.connect(process.env.MONGO_URL);
        console.log("db is connected");
    }catch(err){
        console.log("db not connrcted", err);
    }
}

module.exports = Dbconnect
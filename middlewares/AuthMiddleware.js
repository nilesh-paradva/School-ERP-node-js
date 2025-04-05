const jwt = require("jsonwebtoken");
const AuthModel = require("../models/UserModel");

const Auth = (roles) => async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.slice(7);
        const decoded = jwt.verify(token, "prectice-web-token");

        req.user = await AuthModel.findOne({ _id: decoded.id });
        if (!req.user) return res.status(400).json({ status: false, msg: "Authentication is Required" });

        if (roles.includes(decoded.role)) {
            next();
        } else return res.status(400).json({status : false, msg : "Authentication is Required"});

    } catch (err) {
        res.status(400).json({status : false, msg : "Authentication is Required"})
    }
}

module.exports = Auth
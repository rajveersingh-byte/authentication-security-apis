const jwt = require("jsonwebtoken");

let AuthMiddleware = async (req, res, next) =>{
    try{

        const authHeader  = req.headers.authorization;

        if(!authHeader ){
            return res.status(404).json({
                _status : false,
                message:"Token Missing"
            })
        }

        const token = authHeader .split(" ")[1];

        const verify = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verify;

        next();
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {AuthMiddleware};
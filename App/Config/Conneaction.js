let mongoose = require('mongoose');


let ConnectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONODB);
        console.log("Database Connected Successfully")
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = {ConnectDb}
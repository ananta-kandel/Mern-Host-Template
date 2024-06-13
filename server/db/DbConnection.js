const mongoose = require("mongoose");
const dbconnection = (req,res)=>{
    try{
        mongoose.connect('mongodb://mongo:27017')
        console.log("databasee connected")
    }
    catch(e){
        res.json({
            message:"canot connect to database"
        })
    }
}

module.exports = { dbconnection };

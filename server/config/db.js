const mongoose = require("mongoose");
require('dotenv').config()

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(`${mongoURI}`).then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})
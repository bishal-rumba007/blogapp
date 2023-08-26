const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lite1bishal:warduser@cluster0.l1uajrq.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})
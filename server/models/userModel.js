const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const HistorySchema=new mongoose.Schema({
    amount:{
        type:Number,
    },
    transactionType:{
        type:String,
    },
    receiver:{
        type:String,
    },
    date:{
        type:String,
    },
    amount:{
        type:String,
    },
    senderCurrency:{
        type:String,
    },
    receiverCurrecny:{
        type:String
    },
    receiverCountry:{
        type:String
    },
    senderCountry:{
        type:String
    }
    

})

const userSchema = mongoose.Schema(
  {
    fullName: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    phone:{
        type:"Number",
        required:true,
        unique:true
    },
    amount:{
        type:"Number"
    },
    coins:{
        type:"Number"
    },
    country:{
        type:"String",
    },
    history:[HistorySchema]

   
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
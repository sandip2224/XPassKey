#!/usr/bin/env node

const mongoose=require('mongoose')
const bcrypt = require('bcrypt');
const program=require('commander')
const chalk=require('chalk')
const clipboardy=require('clipboardy')

require('dotenv').config({path: './config/config.env'})
const connectDB=require('./config/db')
const passKeyModel=require('./models/passKeys')

// Connect to db
connectDB()

// ----------------------------------Tested OK Starts----------------------------------------------------------- //

// Create password entry
const addPassKey=(passKey)=>{
    passKeyModel.create(passKey).then(passKey=>{
        console.log(chalk.green("➕ PassKey added to database!!"));
        mongoose.connection.close();
    })
}

// Find account and password
const findPassKey=(res)=>{
    const search=new RegExp(res.acc, 'i');
    console.log("\nMatched Accounts")
    passKeyModel.find({account: search}).then(c1 => {
        c1.forEach(c2=>{
            console.log(" ");
            console.log("⚡ Account Name: "+c2.account);
            console.log("⚡ PassKey: "+c2.passKey);
        })
        console.log(" ");
        console.log(`🔍 Query returned ${c1.length} matches!!`);
        mongoose.connection.close();
    });
}

// Update Account Password
const updatePassKey=(res)=>{
    console.log(res);
    const query={ account: res.account };
    const update=res;
    passKeyModel.findOneAndUpdate(query, update, null, (err, ans)=>{
        console.info('✔ PassKey updated')
        mongoose.connection.close();
    })
}

// Delete account and password
const deletePassKey=(res)=>{
    const query={account: res.acc}
    passKeyModel.findOneAndDelete(query, (err, ans)=>{
        if(err) console.log(err)
        else console.log("Deleted Passkey : ", ans);
        mongoose.connection.close();
    });
}

// Display all existing accounts and passwords
const listPassKeys=()=>{
    passKeyModel.find().then(c1=>{
        console.log("\nList of Passwords")
        c1.forEach(c2=>{
            console.log(" ")
            console.log("⚡ Account ID: "+c2._id)
            console.log("⚡ Account Name: "+c2.account);
            console.log("⚡ PassKey: "+c2.passKey);
        })
        console.log(" ")
        console.info(`🔍️ ${c1.length} accounts(s) found`)
        mongoose.connection.close();
    })
}

// ----------------------------------Tested OK Ends----------------------------------------------------------- //

const authenticator=(res)=>{
    if((res.id).match(/^[0-9a-fA-F]{24}$/)){
        // console.log("\nMatched Accounts")
        // console.log(res);
        passKeyModel.find({_id: res.id}).then(c1 => {
            bcrypt.compare(res.pass, c1[0].passKey, (err, result)=>{
                if(result) console.log("Password is correct!!")
                else console.log("Passkey is incorrect. Use [xpasskey update] to reset your passkey!!")
            });
            console.log(`🔍 Query returned ${c1.length} matches!!`);
            mongoose.connection.close();
        });
    }
    else{
        console.log("Account ID is invalid. Please recheck with your database.")
        console.log("Ctrl+C to exit")
    }
}

module.exports={
    addPassKey,
    findPassKey,
    updatePassKey,
    deletePassKey,
    listPassKeys,
    authenticator
}
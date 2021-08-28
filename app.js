#!/usr/bin/env node

const mongoose=require('mongoose')
const bcrypt = require('bcrypt');
const program=require('commander')
const chalk=require('chalk')
const clipboardy=require('clipboardy')

const passKeyModel=require('./models/passKeys')

mongoose.Promise=global.Promise

//Connect to db
const db=mongoose.connect('mongodb://localhost:27017/passKeyDB', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

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
            console.log("⚡ Account Name: "+c2.account);
            console.log("⚡ PassKey: "+c2.passKey);
        })
        console.log(" ")
        console.info(`🔍️ ${c1.length} accounts(s) found`)
        mongoose.connection.close();
    })
}


module.exports={
    addPassKey,
    findPassKey,
    updatePassKey,
    deletePassKey,
    listPassKeys
}
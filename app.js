#!/usr/bin/env node

const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
require('dotenv').config({ path: './config/config.env' })

const connectDB = require('./config/db')
const passKeyModel = require('./models/passKeys')

connectDB()

// Create password entry
const addPassKey = async (passKey) => {
    try {
        await passKeyModel.create(passKey)
        console.log(chalk.green("➕ PassKey added to database!!"));
        mongoose.connection.close()
    }
    catch (err) {
        console.log("Error in creating passkey!!")
        mongoose.connection.close()
    }
}

// Find account and password
const findPassKey = async (res) => {
    try {
        const search = new RegExp(res.acc, 'i')
        console.log("\nMatched Accounts")
        const c1 = await passKeyModel.find({ account: search })
        c1.forEach(c2 => {
            console.log(" ")
            console.log("⚡ Account Name: " + c2.account)
            console.log("⚡ Encrypted PassKey: " + c2.passKey)
        })
        console.log(" ")
        console.log(`🔍 Query returned ${c1.length} matches!!`)
        mongoose.connection.close()
    }
    catch (err) {
        console.log("Error in searching for passkey!!")
        mongoose.connection.close()
    }
}

// Update Account Password
const updatePassKey = async (res) => {
    if (!mongoose.isValidObjectId(res.id)) {
        console.log("User ID is not valid!");
        return mongoose.connection.close()
    }
    try {
        const query = { account: res.account }
        const update = {
            account: res.account,
            passKey: res.passKey
        }
        await passKeyModel.findByIdAndUpdate(
            res.id,
            { $set: update },
            { new: true }
        )
        console.info('✔ PassKey updated')
        mongoose.connection.close()
    }
    catch (err) {
        console.log("Error in updating passkey!!")
        mongoose.connection.close()
    }
}

// Delete account and password
const deletePassKey = async (res) => {
    try {
        const accountId = res.id;
        if (!mongoose.isValidObjectId(accountId)) {
            console.log("Account ID is not valid!!")
            mongoose.connection.close()
        }
        else {
            const status = await passKeyModel.findByIdAndDelete(accountId)
            console.log("Deleted Passkey : ", status)
            mongoose.connection.close()
        }
    }
    catch (err) {
        console.log("Error in deleting passkey!!")
        mongoose.connection.close()
    }
}

// Display all existing accounts and passwords
const listPassKeys = async () => {
    try {
        const c1 = await passKeyModel.find()
        console.log("\nList of Passwords")
        c1.forEach(c2 => {
            console.log(" ")
            console.log("⚡ Account ID: " + c2._id)
            console.log("⚡ Account Name: " + c2.account)
            console.log("⚡ PassKey: " + c2.passKey)
        })
        console.log(" ")
        console.info(`🔍️ ${c1.length} accounts(s) found`)
        mongoose.connection.close()
    }
    catch (err) {
        console.log("Error in listing passwords!!")
        mongoose.connection.close()
    }
}

const authenticator = async (res) => {
    try {
        if (!mongoose.isValidObjectId(res.id)) {
            console.log("Account ID is not valid!!")
            mongoose.connection.close()
        }
        else {
            const c1 = await passKeyModel.find({ _id: res.id })
            bcrypt.compare(res.pass, c1[0].passKey, (err, result) => {
                if (result) console.log("Password is correct!!")
                else console.log("Passkey is incorrect. Use [xpasskey update] to reset your passkey!!")
            })
            console.log(`🔍 Query returned ${c1.length} matches!!`)
            mongoose.connection.close()
        }
    }
    catch (err) {
        console.log("Error in authenticating passwords!!")
        mongoose.connection.close()
    }
}

module.exports = {
    addPassKey,
    findPassKey,
    updatePassKey,
    deletePassKey,
    listPassKeys,
    authenticator
}
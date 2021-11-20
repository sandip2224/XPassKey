#!/usr/bin/env node

const program = require('commander');
const bcrypt = require('bcrypt')
const clipboardy = require('clipboardy')
const { prompt } = require('inquirer')
const chalk = require('chalk')

const creator = require('./utils/createPassKey')
const savePassKey = require('./utils/savePassKey')

const { addPassKey,
    findPassKey,
    updatePassKey,
    deletePassKey,
    listPassKeys,
    authenticator } = require('./app')

const {
    cQuestions,
    fQuestions,
    uQuestions,
    dQuestions,
    auth
} = require('./utils/info/info')

program
    .version('1.0.0')
    .alias('v')
    .description('XPassKey🔑')

program
    .command('generate')
    .alias('gen')
    .description('➕ Generate a new passkey')
    .action(async () => {
        const answers = await prompt(cQuestions)
        const generatePassword = creator(answers.len, answers.num, answers.sym)
        clipboardy.writeSync(generatePassword)
        if (answers.save === 'y') {
            savePassKey(answers.acc, generatePassword)
        }
        console.log(chalk.blue("🚩 Password copied to clipboard!!"))
        bcrypt.hash(generatePassword, 10, (err, hash) => {
            addPassKey({ account: answers.acc, passKey: hash })
        })
    })

program
    .command('find')
    .alias('f')
    .description('🔍 Search for an existing account')
    .action(async () => {
        const answers = await prompt(fQuestions)
        findPassKey(answers)
    })

program
    .command('update')
    .alias('u')
    .description('📝 Update an existing account passkey')
    .action(async () => {
        const answers = await prompt(uQuestions)
        const generatePassword = creator(answers.len, answers.num, answers.sym)
        clipboardy.writeSync(generatePassword)
        if (answers.save === 'y') {
            savePassKey(answers.acc, generatePassword)
        }
        console.log(chalk.blue("🚩 Password copied to clipboard!!"))
        bcrypt.hash(generatePassword, 10, (err, hash) => {
            updatePassKey({ account: answers.acc, passKey: hash })
        })
    })

program
    .command('delete')
    .alias('del')
    .description('🚩 Delete an existing account passkey')
    .action(async () => {
        const answers = await prompt(dQuestions)
        deletePassKey(answers)
    })

program
    .command('authenticate')
    .alias('auth')
    .description('🔍 Do you remember your passkey? Check here')
    .action(async () => {
        const status = await prompt(auth)
        authenticator(status)
    })

program
    .command('list')
    .alias('l')
    .description('➕ List all available passkeys')
    .action(() => {
        listPassKeys()
    })

program.parse()
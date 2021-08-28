#!/usr/bin/env node

const program=require('commander');
const bcrypt=require('bcrypt')
const clipboardy = require('clipboardy');
const {prompt}=require('inquirer')
const chalk=require('chalk')

const creator=require('./utils/createPassKey')
const {addPassKey, findPassKey, updatePassKey, deletePassKey, listPassKeys}=require('./app')

const cQuestions=[
    {
        type:'input',
        name: 'acc',
        message: 'Enter account name:'
    },
    {
        type:'input',
        name: 'len',
        message: 'Enter length of password:',
		default: '8'
    },
    {
        type:'input',
        name: 'sym',
        message: 'Do you want symbols?(y/n)',
		default: 'y'
    },
    {
        type:'input',
        name: 'num',
        message: 'Do you want numbers?(y/n)',
		default: 'y'
    },
]

const fQuestions=[
    {
        type:'input',
        name: 'acc',
        message: 'Enter account name:'
    }
]

const uQuestions=cQuestions
const dQuestions=fQuestions

program
    .version('1.0.0')
    .alias('v')
    .description('XPassKey🔑')

program
    .command('generate')
    .alias('gen')
    .description('➕ Generate a new passkey')
    .action(()=>{
        	prompt(cQuestions)
			.then(answers=>{
                const generatePassword=creator(answers.len, answers.num, answers.sym)
                clipboardy.writeSync(generatePassword)
                console.log(chalk.blue("🚩 Password copied to clipboard!!"))
                bcrypt.hash(generatePassword, 10, (err, hash)=>{
                    addPassKey({account: answers.acc, passKey: hash})
                });
        	})
    })

program
    .command('find')
    .alias('f')
    .description('🔍 Search for an existing account')
    .action(()=>{
        	prompt(fQuestions)
			.then(answers=>{
                findPassKey(answers)
        	})
    })

program
    .command('update')
    .alias('u')
    .description('📝 Update an existing account passkey')
    .action(()=>{
        	prompt(uQuestions)
			.then(answers=>{
                const generatePassword=creator(answers.len, answers.num, answers.sym)
                clipboardy.writeSync(generatePassword)
                console.log(chalk.blue("🚩 Password copied to clipboard!!"))
                updatePassKey({account: answers.acc, passKey: generatePassword})
        	})
    })

program
    .command('delete')
    .alias('del')
    .description('🚩 Delete an existing account passkey')
    .action(()=>{
        	prompt(dQuestions)
			.then(answers=>{
                deletePassKey(answers)
        	})
    })

program
    .command('list')
    .alias('l')
    .description('➕ Generate a new passkey')
    .action(()=>{
        listPassKeys()
    })

program.parse();
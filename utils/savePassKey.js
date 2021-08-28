const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePassKey = (account, passkey) => {
  fs.open(path.join(__dirname, '../', 'passkeys.txt'), 'a', 666, (e, id) => {
    fs.write(id, account + ': ' +passkey + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.yellow('➕ PassKey saved to passwords.txt!!'))
      })
    })
  })
}

module.exports = savePassKey
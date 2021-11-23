const cQuestions = [
    {
        type: 'input',
        name: 'acc',
        message: 'Enter account name:'
    },
    {
        type: 'input',
        name: 'len',
        message: 'Enter length of password:',
        default: '8'
    },
    {
        type: 'input',
        name: 'sym',
        message: 'Do you want symbols?(y/n)',
        default: 'y'
    },
    {
        type: 'input',
        name: 'num',
        message: 'Do you want numbers?(y/n)',
        default: 'y'
    },
    {
        type: 'input',
        name: 'save',
        message: 'Do you want to save passkey locally (passkeys.txt)?(y/n)',
        default: 'n'
    }
]

const fQuestions = [
    {
        type: 'input',
        name: 'acc',
        message: 'Enter account name:'
    }
]

const uQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter account id:'
    },
    {
        type: 'input',
        name: 'acc',
        message: 'Enter new account name:'
    },
    {
        type: 'input',
        name: 'len',
        message: 'Enter length of password:',
        default: '8'
    },
    {
        type: 'input',
        name: 'sym',
        message: 'Do you want symbols?(y/n)',
        default: 'y'
    },
    {
        type: 'input',
        name: 'num',
        message: 'Do you want numbers?(y/n)',
        default: 'y'
    },
    {
        type: 'input',
        name: 'save',
        message: 'Do you want to save passkey locally (passkeys.txt)?(y/n)',
        default: 'n'
    }
]

const dQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter account id:'
    }
]

const auth = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter account ID:'
    },
    {
        type: 'input',
        name: 'pass',
        message: 'Enter current password:'
    }
]

module.exports = {
    cQuestions,
    fQuestions,
    uQuestions,
    dQuestions,
    auth
}
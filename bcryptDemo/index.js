const bcrypt = require('bcrypt')

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12)
    // console.log(hash)
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if (result) {
        console.log('LOGGED YOU IN! SUCCESFUL MATCH!')
    } else {
        console.log('INCORRECT!')
    }
}

hashPassword('monkey')
login('monkey', '$2b$12$0ezNM3ghRq2wXKDYye0iMuC9xXvCNunnhAM7C7lZJ7Xri0fBFrYVq')

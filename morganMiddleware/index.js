const express = require('express')
const app = express()
const morgan = require('morgan')
const AppError = require('./AppError')

app.use(morgan('tiny'))

app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})

app.use((req, res, next) => {
    console.log('I love dogs!')
    next()
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query
    if (password === 'chickennugget') {
        next()
    }
    throw new AppError('Password required', 401)
    // res.send('SORRY YOU NEED A PASSWORD!!')
    // res.status(401)
    // throw new Error('Password required')
})


// app.use((req, res, next) => {
//     console.log('First middleware!')
//     return next()
// })
// app.use((req, res, next) => {
//     console.log('Second middleware!')
//     return next()
// })


app.get('/', (req, res) => {
    return res.send('SUCCES!')
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('THERE IS NO SECRET!!!')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err
    res.status(status).send(message)
})

// app.use((err, req, res, next) => {
//     console.log('****************************************')
//     console.log('*****************ERROR******************')
//     console.log('****************************************')
//     console.log(err)
//     next(err)
// })


/////////////////////////////////////////////////////
app.listen(3000, () => {
    console.log('App is running on localhost 3000!')
})
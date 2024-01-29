const express = require('express')
const app = express()
const morgan = require('morgan')

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
    res.send('SORRY YOU NEED A PASSWORD!!')

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

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('THERE IS NO SECRET!!!')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})


/////////////////////////////////////////////////////
app.listen(3000, () => {
    console.log('App is running on localhost 3000!')
})
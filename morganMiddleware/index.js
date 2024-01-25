const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use((req, res, next) => {
    console.log('First middleware!')
    return next()
})
app.use((req, res, next) => {
    console.log('Second middleware!')
    return next()
})


app.get('/', (req, res) => {
    return res.send('SUCCES!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.listen(3000, () => {
    console.log('App is running on localhost 3000!')
})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ErrorApp = require('./ErrorApp')


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

app.get('/', (req, res) => {
    res.send('Lo lograste!!')
})

app.get('/error', (req, res) => {
    throw new ErrorApp('pollo.vuela no existe viejo!!!', 401)
    pollo.vuela()
})

app.get('/newError', (req, res) => {
    pollo.alhorno()
})

app.get('/admin', (req, res) => {
    throw new ErrorApp('Vos no sos un admin!!', 403)
})


app.use((err, req, res, next) => {
    const { status = 500, message = message } = err
    res.status(status).send(message)
    console.error(err.stack);

});


app.listen(3000, () => {
    console.log('LISTENIG ON PORT 3000')
})
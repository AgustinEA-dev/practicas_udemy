const express = require('express')
const app = express()

app.set('')

app.get('/', (req, res) => {
    res.send('HI!!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
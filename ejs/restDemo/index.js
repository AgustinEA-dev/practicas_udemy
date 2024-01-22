const express = require('express')
const app = express()
const path = require('path')
const { v4: uuid } = require('uuid');
uuid()

app.use(express.urlencoded({ extended: true })) //se usa para realizar un parseIn del req.body
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//////////////////////////////////

const comments = [
    {
        id: uuid(),
        username: 'Agu',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Sara',
        comment: 'Not funny'
    },
    {
        id: uuid(),
        username: 'Pedro',
        comment: 'Please make a tutorial about carne asada.'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    console.log(req.body.comment)
    res.send('all good')
    // const comment = comments.find(c => c.id === id)
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

/////////////////////////////////////////

app.get('/tacos', (req, res) => {
    res.send('Tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    console.log(req.body)

})

///////////////////////////////////////

app.listen(3000, () => {
    console.log('ON PORT 3000')
}) 
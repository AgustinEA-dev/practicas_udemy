const express = require('express')
const path = require('path')
const app = express()
const redditdata = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num: num })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    const data = redditdata[subreddit]
    if (data) {
        res.render('subreddit', { ...data })
    } else res.render('notfound', { subreddit })

})

app.get('/cats', (req, res) => {
    const cats = [
        'Jaime', 'Bruno', 'Simón'
    ]
    res.render('cats', { cats })
})




//)))))))))) -LISTEN- ((((((((((
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
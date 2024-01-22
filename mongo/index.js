const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('We are Conected!!!')
    })
    .catch(err => {
        console.log('OH NO ERROR!!!')
        console.log(err)
    })

// {
//     title: 'Amadeus',
//     year: 1996,
//     score: 9.2,
//     rating: 'R',
// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'A' })

// Movie.insertMany([
//     { title: 'Jaws', year: 1975, score: 8.3, rating: 'R' },
//     { title: 'El secreto de sus ojos', year: 2009, score: 9.2, rating: 'R' },
//     { title: 'Alien', year: 1986, score: 9.5, rating: 'R' },
//     { title: 'Eva', year: 2011, score: 7.5, rating: 'R' }
// ])
//     .then(data => {
//         console.log('It WORKED!!!')
//         console.log(data)
//     })



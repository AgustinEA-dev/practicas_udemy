const Product = require('./models/product')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const seedsProducts = [
    {
        name: 'Vanilla Yougurt',
        price: 1.5,
        category: 'dairy'
    },
    {
        name: 'apple',
        price: 0.5,
        category: 'fruit'
    },
    {
        name: 'Goat Cheese',
        price: 1.7,
        category: 'dairy'
    },
    {
        name: 'Carrots',
        price: 1,
        category: 'vegetables'
    },

]

Product.insertMany(seedsProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })



// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

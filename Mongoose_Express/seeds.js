// ESTE ARCHIVO ES PARA CREAR NUEVOS PRODUCTOS

const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log('OH NO, MONGO ERROR!!!')
        console.log(err)
    })


const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    cataegory: 'fruit'
})

p.save().then(p => {
    console.log(p)
})
    .catch(e => {
        console.log(e)
    })



const seedProducts = [{
    name: 'Yogurt',
    price: 2.15,
    cataegory: 'dairy'
},
{
    name: 'Apples',
    price: 1.5,
    cataegory: 'fruit'
},
{
    name: 'Organic Celery',
    price: 2.30,
    cataegory: 'vegetable'
}
]


Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })





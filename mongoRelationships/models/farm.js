const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)


// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'Villa María, ARG' })
//     const melon = await Product.findOne({ name: 'Goddes Melon' })
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm)
// }

// makeFarm()

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' })
    const watermelon = await Product.findOne({ name: 'Baby Watermelon' })
    farm.products.push(watermelon)
    await farm.save()
    console.log(farm)
}

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))

// Product.insertMany([
//     { name: 'Goddes Melon', price: 4.99, season: 'Summer' },
//     { name: 'Baby Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ])


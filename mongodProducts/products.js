const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('We are Conected!!!')
    })
    .catch(err => {
        console.log('OH NO ERROR!!!')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String]
    ,
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

productSchema.methods.greet = function () {
    console.log('HELLOOOOOO')
    console.log(`- from ${this.name}`)
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'bike Helmet' })
    foundProduct.greet()
}
findProduct()

// const bike = new Product({ name: 'Cyclin Jersey', price: 28.50, categories: ['Cyclin'], size: 'S' })
// bike.save()
//     .then(data => {
//         console.log('It Worked')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('oh no error!!!')
//         console.log(err)
//     })
const mongoose = require('mongoose')

const productsChema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetables', 'dairy']
    }
})

const Product = mongoose.model('Product', productsChema)

module.exports = Product
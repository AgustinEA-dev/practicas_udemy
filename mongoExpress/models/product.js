const mongoose = require('mongoose')
const { Schema } = mongoose;

const productsChema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetables', 'dairy']
    },
    farm: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Farm'
        }
    ]
})

const Product = mongoose.model('Product', productsChema)

module.exports = Product
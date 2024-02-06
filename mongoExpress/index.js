const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')
const methodOverride = require('method-override')
const FarmError = require('./FarmError')
const wrapAsync = require('./utils/wrapAsync')


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetables', 'dairy', 'fungi']

app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
}))


app.get('/products/new', (req, res, next) => {
    res.render('products/new', { categories })
})

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
}))

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    if (!product) {
        return next(new FarmError('Product not Found', 404))
    }
    res.render('products/show', { product })
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (!product) {
            return next(new FarmError('Product not Found', 404))
        }
        res.render('products/edit', { product, categories })
    }
    catch (e) {
        e
    }
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        res.redirect(`/products/${product._id}`)
    }
    catch (e) {
        next(e)
    }
}))

app.delete('/products/:id', wrapAsync(async (req, res, next) => {
    try {
        const { id } = req.params
        const deltedproduct = await Product.findByIdAndDelete(id)
        res.redirect('/products')
    }
    catch (e) {
        next(e)
    }
}))

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('APP LISTENING PORT:3000')
})
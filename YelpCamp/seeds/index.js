
const mongoose = require('mongoose')
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campGround');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDb = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 30 + 10)
        const camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam quo vel, repellendus sed eligendi qui, cupiditate sunt nihil voluptatibus a totam corporis dolor iusto! Nostrum perspiciatis ipsam odit voluptatum?',
            price
        })
        await camp.save()

    }
}

seedDb().then(() => {
    mongoose.connection.close()
})
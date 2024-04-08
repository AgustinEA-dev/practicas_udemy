const mongoose = require('mongoose')
const Campground = require('../models/campground')
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20)
        const camp = new Campground({
            author: '65fb2114996471ea4c417933',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/degivmkfv/image/upload/v1711206316/YelpCamp/ssifvcm1ywtixfkuanzc.jpg',
                    filename: 'YelpCamp/ssifvcm1ywtixfkuanzc',
                },
                {
                    url: 'https://res.cloudinary.com/degivmkfv/image/upload/v1711206316/YelpCamp/gapb241k9xecwmykrizh.jpg',
                    filename: 'YelpCamp/gapb241k9xecwmykrizh',
                }
            ]
        })
        await camp.save()
    }
}

seedDB()
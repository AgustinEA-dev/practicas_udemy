const jokes = require('give-me-a-joke')
const colors = require('colors')
const cowsay = require('cowsay')
// To get a random dad joke
jokes.getRandomDadJoke(function (joke) {
    console.log(cowsay.say({
        text: joke.rainbow,
        e: "oO",
        T: "U "
    }));
});


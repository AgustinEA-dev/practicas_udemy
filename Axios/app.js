// STARSWARS API

// axios.get('https://swapi.dev/api/people/1')
//     .then(res => {
//         console.log('Response:', res.data.name)
//     })
//     .catch((e) => {
//         console.log('Error', e)
//     })

// const getStarsWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log(res.data)
//     } catch (error) {
//         console.log('ERROR', e)
//     }

// }
// getStarsWarsPerson(1)
// getStarsWarsPerson(3)
// getStarsWarsPerson(10)
// getStarsWarsPerson(80)

// JOKES API

// const jokes = document.querySelector('#jokes')
// const button = document.querySelector('button')

// const addNewJoke = async () => {
//     const jokeText = await getDadJoke()
//     const newLi = document.createElement('li');
//     newLi.append(jokeText)
//     jokes.append(newLi)
// }

// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get('https://icanhazdadjoke.com', config)
//         return res.data.joke
//     } catch (error) {
//         return 'no joke available'
// }
// }

// button.addEventListener('click', addNewJoke)

// MOVIES API



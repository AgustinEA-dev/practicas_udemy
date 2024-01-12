// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log('Resolved!!', res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data.name)
//         return fetch('https://swapi.dev/api/people/2')
//     })
//     .then((res) => {
//         console.log('Second request resolved!!')
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data.name)
//     })
//     .catch((err) => {
//         console.log('EROR!!', err)
//     })

const loadStarsWarsPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1')
        const data = await res.json()
        console.log(data)
        const res2 = await fetch('https://swapi.dev/api/people/2')
        const data2 = await res2.json()
        console.log(data2)

    } catch (error) {
        console.log('ERROR!!', error)
    }
}

loadStarsWarsPeople()





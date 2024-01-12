const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]
const gatos = ['jaime', 'bruno', 'Simón']
const perros = ['Tonio', 'Tana', 'Negro']
const allPets = [...gatos, ...perros, 'cush']



// const [primero, segundo, tercero] = numbers;
// const [masLindo, noTanto, loco] = gatos;
// const [másJoven, intermedio, másViejo, ...losDemás] = allPets;


// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

const dataFormform = {
    email: 'blueman@gmail.com',
    password: 'tobias123',
    username: 'tfunk'
}

const movies = [
    {
        nombre: 'Amadeus',
        año: 1996
    },
    {
        nombre: 'Odiseo',
        año: 2000
    }
]

const año = movies.filter(({ año }) => año > 1999)

// function emPass({ email, password: pass }) {
//     return `${email} ${pass}`
// }

// const {email, password} = dataFormform;
// const {email: emailadress} = dataFormform;

// const newUser = { ...dataFormform, id: 23456, isAdmin: false}

// numbers.forEach((el) => {
//     console.log(el)
// })

// numbers.forEach((el) => {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

// numbers.forEach((el) => {
//     if (el % 3 === 0) {
//         console.log(el)
//     }
// })

// const doubles = numbers.map((num) => {
//     return num * 2;
// })

// const result = numbers.reduce((acum, curr)=>{
//     return acum + curr
// })

// Math.max(...numbers)







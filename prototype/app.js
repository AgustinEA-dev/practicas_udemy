// const ul = document.querySelector('#saludos')
// const body = document.querySelector('body')
// const h1 = document.querySelector('h1')

// const newObject = {
//     name: 'Agustín',
//     age: 25,
//     greeter: () => {
//         const msg = 'HOLA!'
//         const li = document.createElement('li')
//         li.innerText = msg
//         ul.append(msg)
//     }
// }

// newObject.carrera = 'Técnico compositor'

// Object.prototype.color = (color) => {
//     document.body.style.backgroundColor = color
// }

// Object.prototype.apostolGreeter = (msg, name) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (msg && name) {
//                 console.log(`${msg} ${name}`)
//                 resolve('good work!')
//             } else {
//                 reject('error')
//             }
//         }, 3000);
//     })
// }

// newObject.greeter()

// newObject.color('#d62828')

// newObject.apostolGreeter('BIENVENIDO', 'JUAN!')
//     .then(() => apostolGreeter('BIENVENIDO', 'PEDRO!'))
//     .then(() => apostolGreeter('BIENVENIDO', 'PABLO'))
//     .then(() => apostolGreeter('BIENVENIDO', 'ADRIÁN!'))
//     .then(() => apostolGreeter('BIENVENIDO', 'SANTIAGO!'))
//     .then(() => apostolGreeter('BIENVENIDO', 'LUCAS!'))
//     .then(() => apostolGreeter('BIENVENIDO', 'AGUSTÍN!'))



// h1.addEventListener('click', () => {
//     alert('you clicked de H1!')
// })

// const ObjectFactory = (name, apellido, edad, ocupación) => {
//     const nObject = {};
//     nObject.name = 'Agustín';
//     nObject.apellido = 'Alvarez';
//     nObject.edad = 37;
//     nObject.ocupación = 'Artista';
//     nObject.aguSaluda = (msg, nombre) => {
//         return `${msg}, ${nombre}`
//     }

//     return nObject;
// }
// const ul = document.querySelector('#saludos')

// const ObjectFactory = (name, apellido, edad, ocupación, img) => {
//     const nObject = {};
//     nObject.name = name
//     nObject.apellido = apellido
//     nObject.edad = edad
//     nObject.ocupación = ocupación
//     nObject.img = img
//     nObject.Saluda = (msg, nombre) => {
//         const saludo = `${msg} ${nombre}`
//         const img = document.createElement('img')
//         const li = document.createElement('li')
//         img.src = nObject.img
//         img.classList.add('square')
//         li.classList.add('text')
//         li.innerText = saludo
//         ul.append(img)
//         ul.append(li)
//     }

//     return nObject;
// }

// const person1 = ObjectFactory('agustin', 'alvarez', 37, 'artista', './assets/20240105_112951.jpg')
// const person2 = ObjectFactory('Milena', 'Gracioso', 33, 'Emprendedora', './assets/IMG-20240101-WA0037.jpg')
// // const person3 = ObjectFactory('Milena', 'Gracioso', '33', 'Emprendedora')
// person1.Saluda('HOLA!!!', 'SOY AGUSTÍN!!!')
// person2.Saluda('HOLA!!!', 'SOY MILENA!!!')

// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// }

// const makeColor = (r, g, b) => {
//     const color = {}
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = () => {
//         const { r, g, b } = this
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     return color
// }

// const firstColor = makeColor(12, 52, 36)
















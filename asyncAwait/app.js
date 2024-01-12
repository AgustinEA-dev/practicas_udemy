// async function hello(){

// }

// const sing = async () => {
//     throw new Error('ahhhhh')
//     return 'lalalalal'
// }


// sing()
//     .then((data) => {
//         console.log('promise resolved', data)
//     })
//     .catch(err => {
//         console.log('oh no, problem')
//         console.log(err)
//     })

// const loging = async (username, password) => {
//     if (!username || !password) throw 'Missing credentials'
//     if (password === 'corgifeet') return 'WELCOME'
//     throw 'Invalid password'
// }

// loging('Agustín', 'corgifeet')
//     .then(msg => {
//         console.log('Logged in')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('error')
//         console.log(err)
//     })

// const delayColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve()
//         }, delay);
//     })

// }

// const delayColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve()
//         }, delay);
//     })
// }

// delayColorChange('red', 1000)
//     .then(() => delayColorChange('blue', 1000))
//     .then(() => delayColorChange('green', 1000))
//     .then(() => delayColorChange('yellow', 1000))
//     .then(() => delayColorChange('violet', 1000))
//     .then(() => delayColorChange('orange', 1000))

// async function rainbow() {
//     await delayColorChange('red', 1000)
//     await delayColorChange('blue', 1000)
//     await delayColorChange('green', 1000)
//     await delayColorChange('violet', 1000)
//     await delayColorChange('yellow', 1000)
//     await delayColorChange('orange', 1000)
// }

// const fakerequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4000) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Conection timeout :(')
//             } else {
//                 resolve('here is your fake data')
//             }
//         }, delay);
//     })
// }

// async function makeTwo() {
//     let data1 = await fakerequest('/page1')
//     console.log(data1)

// }


// async function hello() {
//     return 'lalalal'
// }

// const sing = async () => {
//     throw new Error('uh oh')
//     return 'lalalal'
// }

// sing()
//     .then((data) => {
//         console.log('Resolve', data)
//     })
//     .catch(err =>{
//         console.log('problem!!')
//         console.log(err)
//     })

// const logIn = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'corgifeet') return 'Welcome!'
//     throw 'Invalid password'
// }

// logIn('jajajdf', 'corgifeet')
//     .then(msg => {
//         console.log('logged in!')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('That is not your data')
//         console.log(err)
//     })

// creando mi propia promesa

const apostolsGreeter = (msg, name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg && name) {
                console.log(`${msg} ${name}`)
                resolve('good work!')
            } else {
                reject('error')
            }
        }, 3000);
    })
}

// apostolsGreeter('Hello!!', 'Juan')
// .then(()=> apostolsGreeter('Hello!!', 'Pedro'))
// .then(()=> apostolsGreeter('Hello!!', 'Pablo'))
// .then(()=> apostolsGreeter('Hello!!', 'Lucas'))
// .then(()=> apostolsGreeter('Hello!!', 'Diego'))
// .then(()=> apostolsGreeter('Hello!!', 'Santiago'))
// .then(()=> apostolsGreeter('Hello!!', 'Andrés'))
// .then(()=> apostolsGreeter('Hello!!', 'Felipe'))
// .then(()=> apostolsGreeter('Hello!!', 'Tadeo'))
// .then(()=> apostolsGreeter('Hello!!', 'Simón'))

async function jesusSays() {
    let data1 = await apostolsGreeter('Hello!!', 'Juan')
    console.log(data1)
    let data2 = await apostolsGreeter('Hello!!', 'Pedro')
    console.log(data2)
    let data3 = await apostolsGreeter('Hello!!', 'Lucas')
    console.log(data3)
    let data4 = await apostolsGreeter('Hello!!', 'Diego')
    console.log(data4)
    let data5 = await apostolsGreeter('Hello!', 'Simón')
    console.log(data5)
}

jesusSays().then(() => console.log('BIENVENIDOS!!'))











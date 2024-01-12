const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))


// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))


//SERVIDOR


// METODOS HTTP
// CREACIÓN DE PUERTOS
// ROUTING
// CRUD

// app.get('/', (req, res) => {
//     res.send('hello world!!')
// })

// app.get('/miArchivo', (req, res) => {
//     res.sendFile('./EVA.jpeg', {
//         root: __dirname
//     })
// })

// app.get('/user', (req, res) => {
//     res.json({
//         name: 'Agustín',
//         apellido: 'Álvarez',
//         points: [1, 2, 3, 4],
//         adress: {
//             city: 'new york',
//             street: 'fifth av.'
//         }
//     })
// })

// app.get('/isAlive', (req, res) => {
//     res.sendStatus(204)
// })


// app.get('/products', (req, res) => {
//     res.send('lista de productos')
// })

// app.post('/products', (req, res) => {
//     res.send('creando productos')
// })

// app.put('/products', (req, res) => {
//     res.send('actualizando productos')

// })
// app.delete('/products', (req, res) => {
//     res.send('eliminando productos')

// })
// app.patch('/products', (req, res) => {
//     res.send('actualizando una parte del producto')
// })


//CLIENTE

// app.post('/user', (req, res) => {
//     console.log(req.body)
//     res.send('Nuevo usuario creado')
// })

//VALORES DE URL DINAMICOS - PARÁMETROS -

//  ALL METHOD la ruta funciona con cualquier método http.

// app.all('/info', (req, res) => {
//     res.send('Server info!')
// })

//MIDLEWARE


app.use((req, res, next) => {
    console.log(`Route:${req.url} Método:${req.method}`)
    next()
})

app.get('/profile', (req, res) => {
    res.send('profile page')
})

app.all('/about', (req, res) => {
    res.send('About page')
})

app.use((req, res, next) => {
    if (req.query.login === 'agu@hotmail.com') {
        next()
    } else {
        res.send('No estás autorizado')
    }
})

app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})

// (((((((((((((-PORT-)))))))))))))
app.listen(3000, () => {
    console.log('Listening on por 3000')
})



let body = document.querySelector("body")

// creando elementos

let div = document.createElement('div')
let h2 = document.createElement('h2')
let img = document.createElement('img')

h2.innerText = 'Aguanta el Rock Nacional'
img.setAttribute('src', './abducción (20230819115843).png')
img.setAttribute('class', 'img')

div.appendChild(h2)
div.appendChild(img)
body.appendChild(div)

const titulo = 'Animales'
const arrayAnimales = ['perro', 'gato', 'ornitorrinco', 'empanada']

// con bloque html

body.innerHTML += `
<h1>${titulo}</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse, nesciunt ea optio possimus aspernatur? Nulla doloribus, ratione distinctio odit sequi accusantium assumenda laboriosam nostrum cupiditate sint earum? Non, dolor.</p>
${arrayAnimales.map(a => `<p>Hola soy un ${a}</p>`).join('')}
`
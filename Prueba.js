const Contenedor = require('./PerezPablo');
const express = require("express")

const app = express()
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Escuchando servidor ${PORT}...`)
})
server.on('error', error => console.log(`Error en el servidor`, error))

app.get('/', (request, response) => {
    response.send(`<h3>Hola</h3>`)
})
app.get('/productos', (request, response) => {
    response.send(`<p>${JSON.stringify(contenedor.getAll())}</p>`)
    
})
app.get('/productoRandom', (request, response) => {
    let indice = Math.floor(Math.random() * contenedor.getAll().length)
    response.send(`<p>${JSON.stringify(contenedor.getAll()[indice])}</p>`)
})

(async function() {
    await contenedor.init()
    //await contenedor.save({title: 'Arroz', price: 200, thumbnail: "https://tumarchante.mx/wp-content/uploads/2021/03/arroz-sos-grueso-super-extra-1-kg-e1604468251675-1.jpg"})
    //await contenedor.save({title: 'Fideos', price: 300, thumbnail: "https://th.bing.com/th/id/OIP.IqSVK7IP84kuyNzbtyE-wQHaHa?pid=ImgDet&rs=1"})
    //await contenedor.save({title: 'Puré', price: 100, thumbnail: "https://th.bing.com/th/id/OIP.HjKHD9Cnkddibfyi5G7rVQHaHa?pid=ImgDet&rs=1"})

    //await contenedor.getById(3)
    //console.log(contenedor.getById(6))
    //console.log(contenedor.getById(111))
    
    //await contenedor.deleteById(6)
    //console.log(contenedor.getAll())

    //await contenedor.deleteAll()
})()

const contenedor = new Contenedor('productos.txt');

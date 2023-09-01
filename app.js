const express = require('express')
//preparar server para subirlo a un hosting
//instalar dotenv 
//configuración de las variables de entorno en un archivo .env
//crear el comando de script en package.json
require('dotenv').config();
const port = process.env.PORT
const app = express()
//el app.use es para usar middlewares
//este es un path estatico
app.use(express.static('public'))

app.get('/generic', function (req, res) {
    //con send respondemos 
  res.sendFile( __dirname + '/public/generic.html'  )
})
app.get('/elements', function (req, res) {
    //con send respondemos 
  res.sendFile( __dirname + '/public/elements.html'  )
})

app.listen(port)
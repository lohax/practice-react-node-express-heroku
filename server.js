const express = require('express')
const path = require('path')

require('dotenv').config() // permet d'avoir un .env avec les var d'environnement

const PORT = process.env.PORT || 5000

const app = express() 

app.use(express.json())

app.use(express.static('client/build')) // permet de dire a express que l'on veut servir des pages static + adresse


app.get('/api/youtube', (_, res) => {
    res.send({
        msg: 'Hello world !'
    })
})

/* Si on est pas dans une API, page à servir pour tout trafic */
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => { 
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
})
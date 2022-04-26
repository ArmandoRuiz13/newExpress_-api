// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000
// Esto es un endpoint
// routes
// Methods HTTP: GET,POST,PUT,DELETE
app.get('/v1/explorers',(req,res) => {
    console.log(`Get explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorer3 = {id: 3, name: "Explorer3"}
    const explorer4 = {id: 4, name: "Explorer4"}
    const explorers = [explorer1, explorer2,explorer3,explorer4]
    // HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})
app.get('/v1/explorers/:id',(req,res) => {
    console.log(`Get explorers V1 API ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    // HTTP CODE STATUS: 200
    res.status(200).json(explorer1)
})
app.post('/v1/explorers',(req,res) => {
    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body // Parametros de un cliente
    // HTTP CODE STATUS: 201, por ser post tambien se puede con put pero no es lo correcto
    console.log(req.body)
    res.status(201).json({message:"Created"})
})
app.put('/v1/explorers/:id',(req,res) => {
    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body // Parametros de un cliente
    // HTTP CODE STATUS: 200 para put es lo correcto
    console.log(req.body)
    res.status(200).json({message:"Updated!"})
})
// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})
const express = require('express')

const app = express()
const port = 80

app.get('/', (req,res) => res.send("Hello, Express !"))
app.get('/api/pokemons/:id/:name',(req, res) => {
    const name = req.params.name
    const id = req.params.id
    res.send(`Vous venez d\'attraper un ${name}, c'est le pokemon n°${id}`)
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

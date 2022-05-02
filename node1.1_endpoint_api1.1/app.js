const express = require('express')
let pokemons = require('./moke-pokemon');

const app = express()
const port = 80

app.get('/', (req,res) => res.send("Hello, Express !"))
app.get('/api/pokemons/:id',(req, res) => {
    const id = Number(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.send(`Vous avez demandez un ${pokemon.name}, ne bougez pas il arrive...`)
})
app.get('/api/pokemons', (req, res) =>{
    const Numberpokemon = pokemons.length
    res.send(`Vous avez ${Numberpokemon} pokemons dans votre pokedex`)
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

const express = require('express');
const { success } = require('./helper');
let pokemons = require('./moke-pokemon');

const app = express();
const port = 80;

app.get('/', (req,res) => res.send("Hello, Express !"));
app.get('/api/pokemons/:id',(req, res) => {
    const id = Number(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    const message = "Un pokemon a bien été trouvé";
    res.json(success(message, pokemon));
});
app.get('/api/pokemons', (req, res) =>{
    const message = "La liste des pokemons a bien été récupérée";
    res.json(success(message, pokemons));
});


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));

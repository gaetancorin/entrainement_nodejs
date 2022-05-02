const express = require('express');
const morgan = require('morgan');
const { success } = require('./helper');
let pokemons = require('./moke-pokemon');

const app = express();
const port = 80;

// ceci est un middleware fait par nous
// const logger = (req, res, next) =>{
//     console.log(`URL : ${req.url}`);
//     next();
// }
// app.use(logger);

// on peut aussi l ecrire comme cela car on est en app.use
// app.use((req,res,next) =>{
// console.log(`URL : ${req.url}`);
// next();
// });

// le middleware tiers morgan fait la meme chose
app.use(morgan('dev'));

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

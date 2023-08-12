const { Router } = require('express');

const routerVideoGames = Router();

routerVideoGames.get('/videogames', (req, res)=>{})//body
routerVideoGames.get('/videogames/:idVideogame', (req, res)=>{})//params
routerVideoGames.get('/videogame', (req, res)=>{}) //query

routerVideoGames.post('/videogames',(req, res)=>{})//body

module.exports = routerVideoGames;
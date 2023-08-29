const { Router } = require('express');
const {getAllGames} = require('../controllers/getAllGames')
const {getById} = require('../controllers/getById')
const {onSearch} = require('../controllers/onSearch')
const {createGame} = require('../controllers/createGame')
const routerVideoGames = Router();

routerVideoGames.get('/videogames', getAllGames)
routerVideoGames.get('/videogames/:id', getById)//params
routerVideoGames.get('/onsearch', onSearch) //query

routerVideoGames.post('/videogames/create', createGame)//body

module.exports = routerVideoGames;
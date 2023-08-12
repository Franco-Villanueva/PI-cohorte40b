const { Router } = require('express');
const getGenres = require('../controllers/getGenres')


const routerGenres = Router();

routerGenres.get('/', getGenres)

module.exports = routerGenres;
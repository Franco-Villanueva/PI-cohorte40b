const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerVideoGames = require('./videogames')
const routerGenres = require('./genres')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/games', routerVideoGames)
router.use('/genres', routerGenres)

module.exports = router;

axios = require('axios');
const {Videogame, Genre} = require('../db');
require('dotenv').config();
const {API_KEY}= process.env;

const createGame = async (req, res) => {
    try {
        const { name, description, platforms, image, release, rating, genres } = req.body;

        // Crea el videojuego en la base de datos
        const newVideogame = await Videogame.create({
            name:name,
            description:description,
            platforms:platforms,
            image:image,
            release:release,
            rating:rating,
        });
        //console.log("----->", Object.keys(newVideogame.__proto__))
        // Busca los géneros en la base de datos por sus nombres
        const foundGenres = await Genre.findAll({
            where: { name: genres },
        });

        // Asocia los géneros encontrados al videojuego
        await newVideogame.setGenres(foundGenres);

        return res.status(201).json(newVideogame);
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
}

module.exports={createGame}
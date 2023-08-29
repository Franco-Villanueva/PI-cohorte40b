axios = require('axios');
const {Videogame, Genre} = require('../db');
require('dotenv').config();
const {API_KEY}= process.env;

const getById = async (req, res) => {

    const {id} = req.params
    try {
        if (id.includes('-')) {
            let videogameDb = await Videogame.findOne({
                where: {
                    id: id,
                },
                include: Genre // Esto cargará los géneros asociados
            });

            return res.status(200).json({
                name: videogameDb.name,
                description: videogameDb.description,
                platforms: videogameDb.platforms,
                image: videogameDb.image,
                release: videogameDb.release,
                rating: videogameDb.rating,
                genres: videogameDb.genres.map(genre => genre.name) // Obtener solo los nombres de los géneros
            });
        }
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

        return res.status(200).json({
            name: response.data.name,
            description: response.data.description,
            platforms: response.data.platforms.map(platform => platform.platform.name),
            image: response.data.background_image,
            release: response.data.released,
            rating: response.data.rating,
            genres: response.data.genres.map(genre => genre.name) 
        });

    } catch (error) {
        return res.status(404).json({error:error.message});
    }
}

module.exports={getById}
axios = require('axios');
const {Videogame, Genre} = require('../db');
const {Op}= require('sequelize');
require('dotenv').config();
const {API_KEY}= process.env;

const onSearch = async (req, res) => {
    const {game} = req.query
    try {
        const dbGames = await Videogame.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${game}%` // Realizar búsqueda sin importar mayúsculas o minúsculas
                }
            },
            limit: 15
        });

        const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${game}&page_size=15`);
        const apiGames = response.data.results.map(game => ({
            id:game.id,
            name: game.name,
            image: game.background_image,
            description:game.description,
            plataformas: game.platforms.map(platform => platform.platform.name),
            release: game.released,
            rating: game.rating,
            genres: game.genres.map(genre => ( genre.name )),
        }));
        
        const combinedResults = [...apiGames, ...dbGames];

        return res.status(200).json(combinedResults);
    } catch (error) {

        return res.status(404).json({error:error.message});
    }
}

module.exports={onSearch}
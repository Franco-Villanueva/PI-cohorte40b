axios = require('axios');
const {Videogame, Genre} = require('../db');
require('dotenv').config();
const {API_KEY}= process.env;

const getAllGames = async (req, res) => {
    try {
        const apiPromises = [];
        for (let i = 1; i <= 7; i++) {
            const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`;
            apiPromises.push(axios.get(apiUrl));
        }

        const apiResponses = await Promise.all(apiPromises);
        
        const gamesApi = apiResponses.flatMap(response =>
            response.data.results.map(game => ({
                id: game.id,
                name: game.name,
                image: game.background_image,
                description: game.description,
                plataformas: game.platforms.map(platform => platform.platform.name),
                release: game.released,
                rating: game.rating,
                genres: game.genres.map(genre => genre.name),
            }))
        );

        const dbGames = await Videogame.findAll({
            include: {
                model: Genre,
                as: 'genres', 
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            }
        });

        const dbGamesFormatted = dbGames.map(game => ({
            id: game.id,
            name: game.name,
            description: game.description,
            platforms: game.platforms,
            image: game.image,
            release: game.release_date,
            rating: game.rating,
            genres: game.genres.map(genre => genre.name),
        }));

        return res.status(200).json([...dbGamesFormatted, ...gamesApi]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports={getAllGames}
axios = require('axios');
const {Genre} = require('../db')
require('dotenv').config();
const {API_KEY}= process.env;

const getGenres = async (req, res) => {
    try {
        const dbGenres = await Genre.findAll();
        if (dbGenres.length) { // Cambio aquí: verificamos si dbGenres tiene elementos
            const genreNames = dbGenres.map(genre => genre.name);
            return res.status(200).json(genreNames);
        }

        const genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`).then((response)=>{
            return response.data.results.map(genre => genre.name);
        });

        for (const genreName of genres) {
            await Genre.create({ name: genreName });
        }

        return res.status(200).json(genres);
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
}

module.exports= getGenres;

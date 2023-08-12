axios = require('axios');
require('dotenv').config();
const {API_KEY}= process.env;

const getGenres = async (req, res) => {
    try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

        const genres = response.data.results.map(genre => genre.name);

        // Aquí puedes utilizar la función para crear los géneros en tu base de datos, si es necesario

        return res.status(200).json(genres);
    } catch (error) {
        return res.status(400).send('Algo salió mal');
    }
}

module.exports= getGenres;

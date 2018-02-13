const Movie = require('../models/movie');
module.exports = {
    method: 'GET',
    path: '/api/movies/count',
    handler: async (req, h) =>{
        return await Movie.count()
    }
}
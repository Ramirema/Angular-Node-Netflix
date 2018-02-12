const Movie = require('../models/movie')

module.exports = {
  method: 'GET',
  path: '/api/movies/{id}',
  handler: async (req, h) => {
    let movies = await Movie.find({id: req.params.id})
    return movies;
  }
};

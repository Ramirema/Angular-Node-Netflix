const Movie = require('../models/movie')

module.exports = {
  method: 'PUT',
  path: '/api/movies/{id}',
  handler: async (req, h) => {
    return Movie.findByIdAndUpdate(
        req.params.id,
        { $set : req.payload},
        { new : true}
    );
  }
};

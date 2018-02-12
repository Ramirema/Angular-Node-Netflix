module.exports = {
  method: 'GET',
  path: '/api/movies',
  handler: async (req, h) => {
    return {
      message: 'you are on your first route'
    };
  }
};

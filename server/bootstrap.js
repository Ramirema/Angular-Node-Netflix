const Glue = require('glue');
const routes = require('hapi-routes-plugin');
const models = require('hapi-moongoose-models-plugin');
const manifest = {
  server: {
    port: 9000
  },
  register: {
    plugins: [{ plugin: models, options: { database: 'portal' } }, routes]
  }
};

const startServer = async () => {
  try {
    const server = await Glue.compose(manifest);
    await server.start();
    console.log('Server started at :' + server.info.uri);
  } catch (err) {
    console.log('There was an error');
    console.error(err);
    process.exit(1);
  }
};

startServer();

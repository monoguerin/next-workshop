const express = require('express');
const graphqlHTTP = require('express-graphql');
const next = require('next');
const schema = require('./api');

const dev = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare()
  .then(() => {
    server.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true,
    }));

    server.get('/test', (req, res) => res.send('TEST'));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

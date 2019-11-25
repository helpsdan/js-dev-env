import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../../../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compliler = webpack(config);

app.use(require('webpack-dev-middleware')(compliler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/users', (req, res) => {
  res.json([
  {"id": 1, "firstName": "Daniel", "lastName": "Alves", "email": "daniel.alves@evoluservices.com"},
  {"id": 2, "firstName": "Gabriel", "lastName": "Oliveira", "email": "gabriel.oliveira@evoluservices.com"},
  {"id": 3, "firstName": "Gustavo", "lastName": "Cavalheri", "email": "gustavo.cavalheri@evoluservices.com"}
  ])
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

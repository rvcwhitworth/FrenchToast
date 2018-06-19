const express = require('express');

// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
const app = express();
const bodyParser = require('body-parser');
// const compiler = webpack(webpackConfig);

// app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());



const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/iehIhhdqgkaYzoo',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()

// Stop forwarding events
// events.close()

// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));

app.get('/events', (req, res) => {
	console.log('we are in events/get', req.body)
})

app.post('/events', (req, res) => {
	console.log('we are in events/post', req.body)
})

  app.set('port', process.env.PORT || 3000)

  const server = app.listen(app.get('port'))
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
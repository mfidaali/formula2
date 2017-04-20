var express = require('express');
var path = require('path');
var chalk = require('chalk');
var open = require('open');
var compression = require('compression');
var engine = require('ejs-locals');
var routes = require('./routes');

var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 9002;

var app = express();

app.use(compression());
app.use(express.static(path.resolve(__dirname, 'app/assets')));
app.set('views', [__dirname, 'app/views'].join('/'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', routes);
app.get('/:formula', routes);

app.listen(port, function(err) {
  if (err) {
    console.log(chalk.red(err));
  } else {
		console.log(chalk.blue('Server listing under http://' + host + ':' + port + ''));
    open('http://' + host + ':' + port + '');
  }
});
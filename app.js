var express = require('express')
var path = require('path');

var routes_index = require('./routes/index');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes_index);

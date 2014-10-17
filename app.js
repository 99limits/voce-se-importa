var express = require('express'),
    path = require('path'),
    routes_index = require('./routes/index'),
    mongo = require('mongodb');
    monk = require('monk');
    db = monk(process.env.MONGOHQ_URL || 'localhost:27017/voceseimporta'),
    app = express();

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'));

app.use(function(req, res, next) {
  req.db = db;
  next();
})

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes_index);

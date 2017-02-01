var express = require('express');
var application = express();

var cors = require('cors');

var entries = require('./data').entries;

application.use(cors());

application.get('/', function(req, res){
   res.json(entries);
});

application.get('/posts/:entry_id', function(req, res){
   res.json(entries[req.params.entry_id]);
});

application.listen(3001, function() {
  console.log('Server started on 3001 ');
});

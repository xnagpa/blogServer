var express = require('express');
var application = express();

var cors = require('cors');

var entries = require('./data').entries;

const per_page = 2;

application.use(cors());

var bodyParser = require('body-parser')
application.use( bodyParser.json() );

application.get('/', function(req, res){
   res.json(entries);
});

application.put('/posts/:entry_id/edit', function(req, res){
   console.log(req.body);
   res.json({
     entry: {}
   });
});

application.get('/posts/:entry_id', function(req, res){
   res.json(entries[req.params.entry_id]);
});

application.get('/posts/pages/:page', function(req, res){
   res.json(entries.slice((req.params.page-1)*per_page, (req.params.page)*per_page));
});

application.listen(3001, function() {
  console.log('Server started on 3001 ');
});

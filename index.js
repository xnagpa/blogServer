var express = require('express');
var _ = require('lodash');
var application = express();

var cors = require('cors');

var entries = require('./data').entries;
var comments = require('./data').comments;

var bodyParser = require('body-parser');

const perPage = 2;

application.use(cors());
application.use(bodyParser.json());

var bodyParser = require('body-parser')
application.use( bodyParser.json() );

application.get('/', function(req, res){
   var page = parseInt(req.query['page']) || 1;
   res.json({
     pagination:{
       page: req.query['page'] || 1,
       perPage: perPage,
       totalCount: entries.length
     },
     entries: entries.slice((page-1)*perPage, page*perPage) || []
   }
   );
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

application.get('/posts/:entry_id', function(req, res){
   var entry = entries[req.params.entry_id];
   if (entry == undefined){
     res.status(404).send('Not found');
   } else {
     res.json(entries[req.params.entry_id]);
   }

});

application.put('/posts/:entry_id/edit', function(req, res){
   var response = req.body;
   var post = entries[req.params.entry_id];
   post.text = response.text;
   post.meta.createdAt = response.createdAt;
   post.meta.author.name = response.authorName;
   res.json(post);
});

application.get('/posts/:entry_id/comments/', function(req,res){
  console.log(comments);
  res.json(comments);
});

application.post('/posts/:entry_id/comments/', function(req,res){
  var new_comment = req.body;
  console.log(`NEW COMMENT: ${new_comment}`);
  comments.push(new_comment);
  res.json(comments);
});

application.listen(3001, function() {
  console.log('Server started on 3001 ');
});

var express = require('express');
var _ = require('lodash');
var application = express();

var cors = require('cors');

var entries = require('./data').entries;

const perPage = 2;

application.use(cors());

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


application.put('/posts/:entry_id/likes', function(req, res){
   entries[req.params.entry_id].likes++;
   var response = _.map(entries, function(entry){
                      return _.pick(entry, ['id', 'likes'])
                  }) || []
   res.json({
     entries: response
   });
});

application.get('/posts/:entry_id', function(req, res){
   var entry = entries[req.params.entry_id];
   if (entry == undefined){
     res.status(404).send('Not found');
   } else {
     res.json(entries[req.params.entry_id]);
   }

});

application.listen(3001, function() {
  console.log('Server started on 3001 ');
});

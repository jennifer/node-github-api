"use strict";

require('dotenv').config();
require('./config');

const 
  express = require('express'),
  app = express(),
  morgan = require('morgan'),
  request = require('request-promise'),
  https = require('https'),
  { PORT } = require('./config') 
;

app.use(express.static('public'));
app.use(morgan('common'));

//function isPublic(repo) {
//    if (repo.private) {
//      return 'private repo'
//    }
//  return !repo.private;
//},

request({
  "method":"GET", 
  "uri": "https://api.github.com/repos/hapijs/hapi",
  "json": true,
  "headers": {
    "User-Agent": "node.js"
  }
})
.then(console.log, console.log);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
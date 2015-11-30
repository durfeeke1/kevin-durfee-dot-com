var express = require('express');

var app = express();
// serve all files out of public folder
app.use(express.static('public'));

// TODO: soundcloud finder code

var port = 3000;
console.log('Listening at 127.0.0.1:' + port);
app.listen(port);

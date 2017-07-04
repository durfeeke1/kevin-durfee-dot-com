const express = require('express')
const http = require('http')

const app = express()

var server = http.createServer(app);

// serve all files out of public folder
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

require('./routes/index.js')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

const express = require('express')

const app = express()
// serve all files out of public folder
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// TODO: soundcloud finder code

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

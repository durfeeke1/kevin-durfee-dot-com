/**
 * Creates the routes for the given express application.
 *
 * @param app - the express application
 * @param nconf - the configuration settings
 */

var https = require('https');
var soundCloud = require('../lib/sound-cloud');

module.exports = function(app, nconf) {

  app.get('/', function(request, response) {
    response.render('index.html');
  });

  app.get('/search', function(request, response) {
    var title = request.query.title;
    var artist = request.query.artist;

    if (!title || !artist) {
      response.send('You must specify both a title and artist.', 422);
    } else {
      soundCloud.search(title, artist, function(error, body) {
        if (error) {
          throw error;
        } else {
          response.send(body, 200);
        }
      });
    }
  });

};

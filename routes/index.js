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
};

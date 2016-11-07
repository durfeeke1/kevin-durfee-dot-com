const request = require('request')

// soundcloud api key
const SC_CLIENT_ID = '1c3aeb3f91390630d351f3c708148086'

/* Searches SoundCloud for a track with the given title and/or artist.
 *
 * Calls callback(error, tracks):
 *  error - an error if one occurred
 *  tracks - an array of matching SoundCloud tracks
 */
module.exports.search = function(title, artist, callback) {
  // TODO
}

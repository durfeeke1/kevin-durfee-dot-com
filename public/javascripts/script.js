(function(window, document, undefined) {
  // SoundCloud API key
  var SC_CLIENT_ID = "1c3aeb3f91390630d351f3c708148086";

  /* Initialize SoundCloud JavaScript API
   *
   * No arguments
   */
  function initializeSoundCloud() {
    SC.initialize({
      client_id: SC_CLIENT_ID
    });
  }

  /* Display SoundCloud HTML player
   *
   * Arguments:
   * response -- parsed response data from the SoundCloud search results
   */
  function displayFirstSong(songResults) {
    if (songResults.length === 0 || !songResults[0].permalink_url) {
      $("#player").html("No tracks found.");
      return;
    }

    var trackUrl = songResults[0].permalink_url;
    SC.oEmbed(trackUrl, { auto_play: true }, function(player) {
      $("#player").html(player.html);
    });
  }

  $(document).ready(function() {
    initializeSoundCloud();
    // TODO
  });

})(this, this.document);

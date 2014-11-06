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
  function displayPlayer(response) {
    if (response.length === 0 || !response[0].permalink_url) {
      $("#player").html("No tracks found.");
      return;
    }

    var trackUrl = response[0].permalink_url;
    SC.oEmbed(trackUrl, { auto_play: true }, function(player) {
      $("#player").html(player.html);
    });
  }

  function searchSoundCloud() {
    event.preventDefault();

    var title = $('#search input[name="title"]').val();
    var artist = $('#search input[name="artist"]').val();

    if (!title || !artist) {
      $("#player").html("Enter both a title and artist");
      return;
    }

    $("#player").html("Loading...");

    var searchRequest = new XMLHttpRequest();
    searchRequest.addEventListener("load", function() {
      var response = JSON.parse(searchRequest.responseText);
      displayPlayer(response);
    });

    searchRequest.addEventListener("error", function() {
      $("#player").html('Error in accessing the server.');
    });

    var searchParams = "artist=" + encodeURIComponent(artist) + "&title=" + encodeURIComponent(title);
    searchRequest.open('GET', "/search?" + searchParams);
    searchRequest.send();
  }

  $(document).ready(function() {
    initializeSoundCloud();
    $("#search").submit(searchSoundCloud);
  });

})(this, this.document);

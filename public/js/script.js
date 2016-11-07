// soundcloud api key
const SC_CLIENT_ID = '1c3aeb3f91390630d351f3c708148086'
const STATUS_OK = 200

SC.initialize({client_id: SC_CLIENT_ID})
const player = document.querySelector('#player')

// TODO: soundcloud finder code

/* Display SoundCloud player for the given track. */
function displayPlayer(track) {
  SC.oEmbed(track.permalink_url, {auto_play: true}, output => {
    player.innerHTML = output.html
  })
}

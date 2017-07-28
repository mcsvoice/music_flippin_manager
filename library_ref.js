var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: {
    function(library) {

  var playListResult = [];

  for (var id in this.playlists) {
     playListResult.push(id + ": " + this.playlists[id]["name"] + " - " + this.playlists[id]["tracks"].length + " tracks");
    }
    //console.log(playListResult);
    return (playListResult);
}

//console.log("This is printPlaylistS: " + printPlaylists(library));
  }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function(library) {

  var playListResult = [];

  for (var id in library.playlists) {
     playListResult.push(id + ": " + library.playlists[id]["name"] + " - " + library.playlists[id]["tracks"].length + " tracks");
    }
    //console.log(playListResult);
    return (playListResult);
}

console.log("This is printPlaylistS: " + printPlaylists(library));


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (library) {

  var printTracksResult = [];

  for (var id in library.tracks) {
     printTracksResult.push(library.tracks["id"] + ": " + library.tracks[id]["name"] + " by " + library.tracks[id]["artist"]);
    }
    //console.log(playListResult);
    return (printTracksResult);
}

console.log("This is printTracks: " + printTracks(library));

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  var printPList = [];

  printPList.push(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks")
                                                                                                            //^JHOLMAN did this :D
  var trackPlist = [];
    for (var i of library.playlists[playlistId].tracks) {
      trackPlist.push(i + ": " + library.tracks[i].name + " by " + library.tracks[i].artist + "(" + library.tracks[i].album + ")")
    }
    var theListDelivered = [printPList, trackPlist]

    return theListDelivered
}

console.log("This is printPlaylist(one): " + printPlaylist("p01"));

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var songToAdd = library.tracks[trackId].id;

  library.playlists[playlistId].tracks.push(songToAdd);
    console.log("Added tracks: " + library.playlists[playlistId].tracks);
}

addTrackToPlaylist ("t03", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

//console.log(uid());


// adds a track to the library

var addTrack = function (name, artist, album) {

  var newTrackID = uid();

  library.tracks[newTrackID] = {id : newTrackID, name: name, artist: artist, album: album};

  console.log(library.tracks);

}

console.log(addTrack('Le Perv(Live)','Carpenter Brut','CARPENTERBRUTLIVE'));


var addPlaylist = function (name) {

  var newPlayListID = uid();

  library.playlists[newPlayListID] = {id : newPlayListID, name: name, tracks: ['SCHMOOP']};
  console.log(library.playlists);

}

addPlaylist("p55");

var printSearchResults = function(query) {


}

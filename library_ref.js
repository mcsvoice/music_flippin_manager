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

             printPlaylists: function() {

  playListResult = [];

  for (var id in library.playlists) {
     playListResult.push(id + ": " + library.playlists[id]["name"] + " - " + library.playlists[id]["tracks"].length + " tracks");
    }
    //console.log(playListResult);
    return console.log(this);
    console.log("This is printPlaylists" + playListResult);
}
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function(library) {

//   var playListResult = [];

//   for (var id in library.playlists) {
//      playListResult.push(id + ": " + library.playlists[id]["name"] + " - " + library.playlists[id]["tracks"].length + " tracks");
//     }
//     //console.log(playListResult);
//     return (playListResult);
// }

// console.log("This is printPlaylistS: " + printPlaylists(library));


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

  //var trackToAdd = library.tracks{};
  var newTrackID = uid();
  //console.log(newTrackID);

  library.tracks[newTrackID] = {id : newTrackID, name: name, artist: artist, album: album};

  console.log(library.tracks);

}

console.log(addTrack('Le Perv(Live)','Carpenter Brut','CARPENTERBRUTLIVE'));

//library.playlists.p01.name = 'Awesome music';

// adds a playlist to the library

var addPlaylist = function (name) {

  var newPlayListID = uid();

  library.playlists[newPlayListID] = {id : newPlayListID, name: name, tracks: ['SCHMOOP']};
  console.log(library.playlists);

}

addPlaylist("p55");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  // var iFoundIt = [];

  // var searchRequest = query;

  // for (var i = 0; i < library.tracks.length; i++) {
  //   for (name in library.tracks["name"]) {
  //     if (library.tracks[i]["name"] ????????? profit)
  //       iFoundIt.push(library.tracks[i]);
  //     }
  //     console.log(iFoundit);
  //     console.log(library.tracks.length);
  //   }
  // }

  // console.log(searchRequest)

          /* THIS IS NOT GOING TO WORK */

  // library.tracks["name"].search()

}

// console.log(printSearchResults("tri"));


// var input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];

// //a is getting the value in the object in the array but I don't want that
// //I want a to be equal to x and b to be equal to y

// var result = input.map(function(a){
//   console.log(a);
//   return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y,2));
// });

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);
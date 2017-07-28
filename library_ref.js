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
      return (playListResult);
    }
  },

  printTracks: { function (library) {

    var printTracksResult = [];

    for (var id in this.tracks) {
      printTracksResult.push(this.tracks["id"] + ": " + this.tracks[id]["name"] + " by " + this.tracks[id]["artist"]);
    }
    //console.log(playListResult);
    return (printTracksResult);
  }
  },

  printPlaylist: { function (playlistId) {

    var printPList = [];

    printPList.push(playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");

    var trackPlist = [];
    for (var i of this.playlists[playlistId].tracks) {
      trackPlist.push(i + ": " + this.tracks[i].name + " by " + this.tracks[i].artist + "(" + this.tracks[i].album + ")");
    }
    var theListDelivered = [printPList, trackPlist];

    return theListDelivered;
  }
  },

  addTrackToPlaylist: { function (trackId, playlistId) {

    var songToAdd = this.tracks[trackId].id;

    this.playlists[playlistId].tracks.push(songToAdd);
    console.log("Added tracks: " + this.playlists[playlistId].tracks);
  }
  },

  uid: { function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  },

  addTrack: { function (name, artist, album) {

    var newTrackID = uid();

    library.tracks[newTrackID] = {id: newTrackID, name: name, artist: artist, album: album};

  }
  },

  addPlaylist: { function (name) {

    var newPlayListID = uid();

    library.playlists[newPlayListID] = {id: newPlayListID, name: name, tracks: ['SCHMOOP']};

  //addPlaylist("p55");
  }
  }

};


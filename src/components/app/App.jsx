import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import SearchResults from '../searchResults/SearchResults';
import Playlist from '../playlist/Playlist';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          id: 0,
          name: 'trackName',
          artist: 'trackArtist',
          album: 'trackAlbum'
        }
      ],
      playlistName : 'My Playlist',
      playlistTracks : [
        {
          id: 10,
          name: 'playlistTrackName',
          artist: 'playlistTrackArtist',
          album: 'playlistTrackAlbum'
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      return;
    }
    newPlaylistTracks.push(track);
    this.setState( {playlistTracks: newPlaylistTracks} );
  }

  removeTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks;
    newPlaylistTracks = newPlaylistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
    this.setState( {playlistTracks: newPlaylistTracks} );
  }

  updatePlaylistName(name) {
    this.setState( {playlistName: name} );
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
              onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

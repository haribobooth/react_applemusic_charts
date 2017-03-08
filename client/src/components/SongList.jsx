import React from 'react';
import Song from './Song.jsx'

const SongList = React.createClass({
  render: function(){

    const songNodes = this.props.songs.map(function(song, index){
      return <Song key={index} position={index + 1} song={song} />
    });

    return (
      <div className="song-list">
        {songNodes}
      </div>
    );
  },
});

export default SongList;

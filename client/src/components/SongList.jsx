var React = require('react');
var Song = require('./Song.jsx');

var SongList = React.createClass({
  render: function(){

    var songNodes = this.props.songs.map(function(song, index){
      return <Song key={index} position={index + 1} song={song} />
    });

    return (
      <div className="song-list">
        {songNodes}
      </div>
    );
  },
});

module.exports = SongList;

var React = require('react');
var SongList = require('./SongList.jsx');

var SongContainer = React.createClass({
  getInitialState: function(){
    return {songs: []};
  },

  getSongs: function(){
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function(){
      var responseData = JSON.parse(request.responseText);
      var entryList = responseData.feed.entry;
      this.setState({songs: entryList});
    }.bind(this);

    request.send();
  },

  componentDidMount: function(){
    this.getSongs();
  },

  render: function(){
    return (
      <div className="song-container">
        <p id="title">UK Top 20</p>
        <SongList songs={this.state.songs}/>
      </div>
    );
  },
});

module.exports = SongContainer;

import React from 'react';
import SongList from './SongList.jsx';

const SongContainer = React.createClass({
  getInitialState: function(){
    return {songs: []};
  },

  getSongs: function(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const entryList = responseData.feed.entry;
      this.setState({songs: entryList});
    };

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

export default SongContainer;

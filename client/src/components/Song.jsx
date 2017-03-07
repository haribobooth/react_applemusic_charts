var React = require('react');

var Song = React.createClass({
  render: function(){
    return (
      <div className="song">
        <img src={(this.props.song['im:image'][0]['label'])}/>
        <p>{(this.props.song['im:name']['label'])}</p>
        <p> - </p>
        <p>{(this.props.song['im:collection']['im:name']['label'])}</p>
      </div>
    );
  },
});

module.exports = Song;

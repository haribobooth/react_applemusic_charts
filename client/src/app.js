var React = require('react');
var ReactDOM = require('react-dom');
var SongContainer = require('./components/SongContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <SongContainer />,
    document.getElementById('app')
  );
}

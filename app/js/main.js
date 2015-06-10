/** @jsx React.DOM */
var React = require('react');
var App = require('./components/app.js');

function render () {
    console.log("HASH CHANGE");
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('container'));
}

window.addEventListener('hashchange', render);

render();

//React.render(
//    <App />,
//    document.getElementById('container')
//);
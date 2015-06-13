
var React = require('react');
var App = require('./components/app');
var Router = require('react-router');
var Route = Router.Route;


function render () {
    console.log("HASH CHANGE");
    var path = window.location.hash.substr(1);
    //React.render(<App route={path} />, document.getElementById('container'));
}

//window.addEventListener('hashchange', render);
//render();

//React.render(
//    <App />,
//    document.getElementById('container')
//);
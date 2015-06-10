/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var App = React.createClass({

    render: function () {
        var Child;
            switch (this.props.route){
                case 'about': Child = About; break;
                case 'contact': Child = Contact; break;
                default: Child = Home;
            }
        return (
            <div>
                <ToolBar />
                <Child/>
            </div>
        );
    }
});
var About = React.createClass({
    render: function () {
        return (
            <h3> I m About Page</h3>
        );
    }
});
var Contact = React.createClass({
    render: function () {
        return (
            <h3> I m Contact Page</h3>
        );
    }
});
var Home = React.createClass({
    handleInput: function () {
        AppActions.addItem(event.target.value);
    },
    componentDidMount: function () {
        AppStore.addListener('change', this.storeChanged);
    },
    componentDidUnMount: function () {
        AppStore.removeListener('change',this.storeChanged);
    },
    storeChanged: function () {
        this.forceUpdate();
    },
    render: function () {
        return (
            <div>
                <div> Name : {AppStore.inputStore.input} </div>
                <input type = "text" value = {AppStore.inputStore.input} onChange = {this.handleInput}/>
                <input type = "text" value = {AppStore.inputStore.input} onChange = {this.handleInput}/>
            </div>
        );
   }
});
var ToolBar = React.createClass({
    handleRoute: function () {
        switch (event.target.value){
            case 'about':
                window.location.hash = "about";
                break;
            case 'contact':
                window.location.hash = "contact";
                break;
            default :
                window.location.hash = "/";
        }
    },
    render: function () {
        return (
            <div>
                <input type = "submit" value = "home" style = {{width: '100px;'}} onClick = {this.handleRoute}/>
                <input type = "submit" value = "about" style = {{width: '100px;'}} onClick = {this.handleRoute}/>
                <input type = "submit" value = "contact" style = {{width: '100px;'}} onClick = {this.handleRoute}/>
            </div>
        );
    }
});
module.exports = App;
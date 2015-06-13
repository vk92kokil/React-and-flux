"use strict";
require('babel');
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var App = React.createClass({

    render: function () {
        //var Child;
        //switch (this.props.route){
        //    case 'about': Child = App.About; break;
        //    case 'contact': Child = App.Contact; break;
        //    default: Child = App.Home;
        //}
        return (
            <div>
                <ToolBar />
            </div>
        );
    }
});

App.About = React.createClass({
    render: function() {
        return (
            <h3> I m About Page</h3>
        );
    }
});

App.Contact = React.createClass({

    render: function (){
        return (
            <h3> I m Contact Page</h3>
        );
    }
});

App.Home = React.createClass ({
    /* use state when force update is removed
    getInitialState(){
        return {input: AppStore.inputStore.input}
    },
    */
    handleInput() {
        AppActions.addItem(event.target.value);
    },
    componentDidMount() {
        AppStore.on('change', this.storeChanged);
    },
    componentWillUnmount() {
        AppStore.removeListener('change',this.storeChanged);
    },
    storeChanged() {
        //this.setState({input: AppStore.inputStore.input});
        this.forceUpdate();
    },
    render: function() {
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

    contextTypes: {
        router: React.PropTypes.func
    },
    handleRoute: function () {
        //switch (event.target.value){
        //    case 'about':
        //        window.location.hash = "about";
        //        break;
        //    case 'contact':
        //        window.location.hash = "contact";
        //        break;
        //    default :
        //        window.location.hash = "";
        //}
        //
        this.context.router.transitionTo(event.target.value);
    },
    render: function () {
        return (
            <div>
                <input type = "submit" value = "home" style = {{width: '100px'}} onClick = {this.handleRoute}/>
                <input type = "submit" value = "about" style = {{width: '100px'}} onClick = {this.handleRoute}/>
                <input type = "submit" value = "contact" style = {{width: '100px'}} onClick = {this.handleRoute}/>
                <RouteHandler />
            </div>

        );
    }
});
var routes = (
    <Route handler={App}>
        <Route name= "about" handler={App.About}/>
        <Route name= "contact" handler={App.Contact}/>
        <DefaultRoute name="home" handler={App.Home} />
    </Route>
);
Router.run(routes,  function(Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});
module.exports = App;
/** @jsx React.DOM **/

var React = require('react');
var Fluxxor = require('fluxxor');

window.React = React; //For debugging with React debug tool 

var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.react');
var Inbox = require('./components/Inbox.react');
var Calendar = require('./components/Calendar.react');

var actions = {

};

var stores = require('./stores');

var flux  = new Fluxxor.Flux(stores,actions);

var routers = (
    <Routes location="history" flux={flux}>
        <Route name="app" path="/" handler={App} >
            <Route name="inbox"  handler={Inbox} />
            <Route name="calendar"  handler={Calendar} />
            <DefaultRoute handler={Inbox} />
        </Route>
    </Routes>
);

React.renderComponent(
    routers,
    document.getElementById('react')
);

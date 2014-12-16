/** @jsx React.DOM **/

var React = require('react');
var Fluxxor = require('fluxxor');

window.React = React; //For debugging with React debug tool 

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.react');
var Inbox = require('./components/Inbox.react');
var Calendar = require('./components/Calendar.react');
var Todo = require('./components/Todo.react');

var actions = require('./actions');
var stores = require('./stores');

var flux  = new Fluxxor.Flux(stores,actions);
flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

console.log(flux);
console.log("app.js");

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="inbox"  handler={Inbox} />
        <Route name="calendar"  handler={Calendar} />
        <Route name="todo" handler={Todo} />
        <DefaultRoute handler={Inbox} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler flux={flux} />, document.body);
});


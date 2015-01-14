/** @jsx React.DOM **/

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function() {
        var flux = this.props.flux;
        return  (
            <div>
                <header>
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="inbox">Inbox</Link></li>
                        <li><Link to="calendar">Calendar</Link></li>
                        <li><Link to="todo">Todo</Link></li>
                    </ul>
                    Logged in as Joe
                </header>
                <RouteHandler flux={flux} />
            </div>
        );
    }
});

module.exports = App;

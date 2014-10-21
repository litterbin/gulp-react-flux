/** @jsx React.DOM */
var React = require('react');  // Browserify!

var SearchBox = React.createClass({
    render: function() {
        return (
            <div>
            <p>Search Box</p>
            <input />
            </div>
        );
    }
});

React.renderComponent(
        new SearchBox({}), 
        document.body);

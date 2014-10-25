/** @jsx React.DOM **/

var React = require('react');
var Outline = require('./Outline.react');
var App = React.createClass({
    render: function() {
        return  (
            <div className="outlineapp">
                <Outline />
            </div>
        );
    }
});

module.exports = App;

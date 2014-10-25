var Outline = require('./Outline.react');

var React = require('react');

var App = React.createClass({
    render: function() {
        return  (
            <div className="outlineapp">
            <Outline />
            </div>
        );
    }
});

console.log('App',App,module);

module.exports = App;

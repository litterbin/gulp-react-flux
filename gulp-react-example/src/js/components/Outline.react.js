/** @jsx React.DOM **/

var React = require('react');
var OutlineStore = require('../stores/OutlineStore');
var Node = require('./Node.react');

function getStateFromStore() {
    return {
        nodes: OutlineStore.getAll()
    };
}

var Outline = React.createClass({
    getInitialState: function() {
        return getStateFromStore();
    },
    componentDidMount: function() {
        OutlineStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
        console.log("_onChange."); 
        this.setState(getStateFromStore());
    },
    render: function() {
        var rootNode = this.state.nodes;
        return(
         <div className="outline-section">
            <Node key={rootNode.key} node={rootNode} />
         </div>
        );
    }
});

module.exports = Outline;

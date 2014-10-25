/** @jsx React.DOM **/

var React = require("react");
var ReactPropTypes = React.PropTypes;
var NodeActionCreators = require('../actions/NodeActionCreators');
var SelectedMarker = require('./SelectedMarker.react');

var Node = React.createClass({
    propTypes: {
        node: ReactPropTypes.object,
        key: ReactPropTypes.string
    },
    render: function() {
        var node = this.props.node;
        var selected = this.props.selected;




        return (
            <li className="node-item" onKeyDown={this._onToggleCollapseNode}>
                <div className="node-content" onClick={this._onClick}>+{node.key} - {node.content}</div>
            </li>
        );
    },
    _onToggleCollapseNode: function(e) {
        alert("onToggle");
    },
    _onClick: function(e) {
        alert("onClick");
    }
});

module.exports = Node;

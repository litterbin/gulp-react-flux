/** @jsx React.DOM **/

var React = require("react");
var ReactPropTypes = React.PropTypes;

var Node = React.createClass({
    props: {
        node: ReactPropTypes.object,
    },
    render: function() {
        var node = this.props.node;
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

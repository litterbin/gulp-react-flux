/** @jsx React.DOM */
var React = require('react');  // Browserify!

var SearchBox = React.createClass({
    getInitialState: function() {
        return {
            value: "Javascript rules..."
        }
    },
    onInputChange: function(e) {
        this.setState({value: e.target.value});
        this.props.onChange(e);
    },
    render: function() {
        return (
            <div>
            <p>Search Box</p>
            <input placeholder={this.props.defaultText} value={this.state.value} onChange={this.onInputChange} />
            </div>
        );
    }
});

var globalValue = "";

var render = function() {
    React.renderComponent(
        new React.DOM.div({},
            new SearchBox({
                defaultText: "my text",
                onChange: function(e) {
                    globalValue = e.target.value;
                    render();
                }
            }), 
            new React.DOM.p({},globalValue)
        ),
        document.body);
}

render();

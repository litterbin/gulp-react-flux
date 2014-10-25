var React = require('react');

var OutlineStore = require('../stores/OutlineStore');

function getStateFromStore() {
    return {
        nodes: OutlineStore.getAll()
    };
}


var Outline = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },
    componentDidMount: function() {
        OutlineStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState(getStateFromStores());
    },
    render: function() {
        return(
         <div className="outline-section">
            outline section
         </div>
        );

    }
});

module.exports = Outline;
    

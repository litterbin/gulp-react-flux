/** @jsx React.DOM **/

var React = require('react');
window.React = React; //For debugging with React debug tool 

var App = require('./components/App.react');

var OutlineStartingData = require('./OutlineStartingData');
var OutlineWebAPIUtils = require('./utils/OutlineWebAPIUtils');

OutlineStartingData.init();
OutlineWebAPIUtils.getAllNodes();

React.renderComponent(
    <App />,
    document.getElementById('react')
);

/** @jsx React.DOM **/

var App = require('./components/App.react');
var React = require('react');

var OutlineStartingData = require('./OutlineStartingData');
var OutlineWebAPIUtils = require('./utils/OutlineWebAPIUtils');

OutlineStartingData.init();
OutlineWebAPIUtils.getAllNodes();


React.renderComponent(
    <App />,
    document.getElementById('react')
);

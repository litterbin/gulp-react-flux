var AppDispatcher = require('../dispatcher/AppDispatcher');

moduels.exports = {
    selectNode: function(key) {
        AppDispatcher.handleServerAction({
            type: "SELECT_NODE",
            key: key
        });
    },
    nextVisibleNode: function() {
        AppDispatcher.handleServerAction({
            type: "NEXT_VISIBLE_NODE"
        });
    },
    toggleCollapseNode: function() {
        AppDispatcher.handleServerAction({
            type: "TOGGLE_COLLAPSE_NODE"
        });
    },
    previousVisibleNode: function() {
        AppDispatcher.handleServerAction({
            type: "PREVIOUS_VISIBLE_NODE"
        });
    }
}

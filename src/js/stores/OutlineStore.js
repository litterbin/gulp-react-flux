var AppDispatcher = require('../dispatcher/AppDispatcher');

var EventEmitter = require('events').EventEmitter;

var merge = require('react/lib/merge');

var CHAGE_EVENT = 'change';

var _nodes = {};

var OutlineStore = merge(EventEmitter.prototype,{
    emitChange: function() {
        this.emit(CHAGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHAGE_EVENT,callback);
    },
    get: function(id) {
        return _nodes[id];
    },
    getAll: function() {
        return _nodes;
    }
});

OutlineStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {
        case "RECEIVE_RAW_NODES":
            OutlineStore.emitChange();
            break;
        default:
            //do nothing
    }

});


module.exports = OutlineStore;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var AppStore = assign({},EventEmitter.prototype,{
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});
AppStore.inputStore = {input: ""};

AppDispatcher.register(function (payload) {
    AppStore.inputStore.input = payload.input.input;
    console.log(payload.input.input);
    AppStore.emitChange();
    return true;
});
module.exports = AppStore;

var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
    addItem: function (item) {
        AppDispatcher.handleViewAction({
            input: item
        })
    }
};
    module.exports = AppActions;
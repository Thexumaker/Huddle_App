var mongoose = require('mongoose');
var messagesSchema = require('./../messages');

messagesSchema.statics = {
    create : function(data, cb) {
        var message = new this(data);
        message.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },


    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var messagesModel = mongoose.model('Messages', messagesSchema);
module.exports = messagesModel;
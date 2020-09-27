var mongoose = require('mongoose');
var usersSchema = require('./../user');

usersSchema.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },


    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    },
    getMessages: function(query,cb) {
        this.find(query,cb);
    }
}

var huddlesModel = mongoose.model('Huddles', usersSchema);
module.exports = huddlesModel;
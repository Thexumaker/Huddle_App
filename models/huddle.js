var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var huddleSchema = new Schema({
    memberCount: {
        type:Number,
        
    },
    interests: [{type:String}],
    members: [
        {
            name: String,
            userId: String

        }


    ]
    
}, {
    timestamps: true
});


module.exports = huddleSchema;
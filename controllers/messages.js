var User = require('./../models/messages');
var mongoose = require('mongoose');


exports.createMessage =  function (req, res, next) {
    newmessage = {
        messageSender: mongoose.Types.ObjectId(req.body.id),
        message: req.body.message,
        huddle: 'Dick'
    }
    Messages.create(newmessage, function(err,testMessage){
       
        if(err) {
            res.json({
                error : 'sdsadsad'
                })
            }
            
            else {
                console.log(testMessage)
                Users.findOneAndUpdate(
                    { _id: testMessage.messageSender }, 
                    { $push: { messages: testMessage._id} },
                   function (error, success) {
                         if (error) {
                             
                            res.json({
                                error : error
                            })
                         } else {

                            res.json({
                                message : "User updated successfully"
                            })
                         }
                     });
                 
                
    
        }
        
    }
        
        )}

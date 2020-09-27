var Users = require('./../models/doa/user.dao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.createUser =  function (req, res, next) {
    bcrypt.hash(req.body.password,10, (err,hash) => {
        if (err) {
            return res.status(500).json({error:err});
        }
        else {
            const newUser = {
                userEmail: req.body.email,
                password: hash
            };
            Users.create(newUser, function(err, user) {
                if(err) {
                    res.json({
                        error : err
                    })
                }
                else {
                    res.json({
                        message : "User created successfully"
                    })
        
                }
                
            })

        }
       
    }
    )
    
    
}

exports.getUsers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }else {
            res.json({
                users: users
            })

        }
        
    })
}
exports.getMessages = function(req, res, next) {

    Users.getMessages({_id: req.body.id}, function(err, users) {
        console.log(users)
        if(err) {
            res.json({
                error: err
            })
        }else {
            Users.populate(users,  { path:"messages", model:"Messages" }, function(err, course){
                console.log(course[0].messages)
                res.json({
                    message: course[0].messages
                })
               
    });


        }
        
    })
}

exports.getUser = function(req, res, next) {
    Users.get({userEmail: req.body.email}, function(err, user) {
        if(err || user.length == 0) {
            res.status(401).json({
                error: 'Auth failed'
            })
        }
        else {
            bcrypt.compare(req.body.password, user[0].password, (err2,result) => {
                if(err2) {
                    res.json({
                        error : 'Auth failed'
                    })

                }
                if (result) {
                    const token = jwt.sign({
                        email:user[0].userEmail,
                        id: user[0]._id

                    }, 'Secret_Key', {expiresIn: '1hr'});
                    
                    res.status(200).json({
                        user: user,
                        token: token

                    })
                }
                else  {
                    res.status(401).json({
                        error: 'Auth failed'
                    })
                }

            })

            

        }
        
    })
}

exports.updateUser = function(req, res, next) {
    bcrypt.hash(req.body.password,10, (err,hash) => {
        if (err) {
            return res.status(500).json({error:err});
        }
        else {
            const newUser = {
                userEmail: req.body.email,
                password: hash
            };
            Users.update({_id: req.params.id}, newUser, function(err, user) {
                if(err) {
                    res.json({
                        error : err
                    })
                }
                else {
                    res.json({
                        message : "User updated successfully"
                    })
                    
                }
                
            })

        }
       
    }
    )
    
    
}

exports.removeUser = function(req, res, next) {
    Users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User deleted successfully"
        })
    })
}
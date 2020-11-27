var User = require('./../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../utils/config')



exports.createUser =  function (req, res, next) {
    bcrypt.hash(req.body.password,10, (err,hash) => {
        if (err) {
            return res.status(500).json({error:err});
        }
        else {
            const newUser =  new User({
                userEmail: req.body.email,
                password: hash
            });
            newUser.save()
            .then(savedUser => {
                res.json(savedUser)
            })
            .catch(error => console.log(error))

        }
       
    }
    )
    
    
}

exports.getUsers = function(req, res, next) {
    User.find({}).then(users => {
        res.json(users)
    })
}
exports.getUser = function(req, res, next) {
    User.findById(req.params.id).then(user=> {
        if (user) {
            res.json(user)
        }
        else {
            res.status(404).end()
        }
    }).catch(err => {
        console.log(err)
    })

}

exports.logIn = function(req, res, next) {
    User.find({userEmail: req.body.email}, function(err, user) {
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

                    }, config.SECRET_KEY, {expiresIn: '1hr'});
                    
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
            User.findOneAndUpdate({_id: req.params.id},  {$set: newUser},{new: true}, function(err, user) {
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
    User.findByIdAndRemove(req.params.id).then(() => {
        res.status(204).end()
    }).catch(err => console.log(err))
}
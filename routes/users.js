var Users = require('./../controllers/users');
const checkAuth = require('./../controllers/middleware/check-auth');


module.exports = function(router) {
    router.post('/create', Users.createUser);
    router.get('/', Users.getUsers);
    router.post('/', Users.getUser);
    router.put('/update/:id',checkAuth, Users.updateUser);
    router.delete('/remove/:id', Users.removeUser);
    router.get('/getMessages', Users.getMessages);
}
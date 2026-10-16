let express = require('express');
const { UserCreate, UserView, UserUpdate, UserDelete, SingleUser } = require('../Controller/WebController/UserController');


let UserRoutes = express.Router();

UserRoutes.post('/create', UserCreate);

UserRoutes.post('/view', UserView);

UserRoutes.put('/update/:id', UserUpdate);

UserRoutes.delete('/delete/:id', UserDelete);

UserRoutes.post('/single/:id', SingleUser)


module.exports = {UserRoutes};
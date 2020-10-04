const { Router } = require('express')
const UserContoller = require('./controllers/UserController')
const routes = Router()

routes.post('/register', UserContoller.register)
routes.post('/login', UserContoller.login)

routes.get('/users', UserContoller.index)
routes.get('/users/:id', UserContoller.show)
routes.put('/users/:id', UserContoller.update)
routes.delete('/users/:id', UserContoller.delete)

module.exports = routes
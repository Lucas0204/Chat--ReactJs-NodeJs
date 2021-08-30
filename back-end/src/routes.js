const routes = require('express').Router()
const GetMessagesController = require('./controllers/GetMessagesController')

routes.get('/messages', GetMessagesController.get)

module.exports = routes

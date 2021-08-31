const routes = require('express').Router()
const GetMessageHisotryController = require('./controllers/GetMessageHistoryController')

routes.get('/messages', GetMessageHisotryController.get)

module.exports = routes

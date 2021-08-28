const routes = require('express').Router()

routes.get('/', (req, res) => res.send('ola mundo'))
routes.get('/messages', () => {})

module.exports = routes

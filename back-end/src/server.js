const app = require('./app')
const socketConnection = require('./socket')
const port = process.env.PORT

const server = app.listen(port, () => console.log('server running...'))

socketConnection(server)

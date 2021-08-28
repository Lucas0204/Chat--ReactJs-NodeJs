const app = require('./app')
const socket = require('./socket')
const port = process.env.PORT

const server = app.listen(port, () => console.log('server running...'))

socket(server)

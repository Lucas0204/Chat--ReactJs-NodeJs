const socketIo = require('socket.io')

function socket(server) {

    const io = socketIo(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['*']
        }
    })

    io.on('connection', socket => {
        console.log(`Connected: ${socket.id}`)

        socket.on('sendMessage', message => {
            socket.broadcast.emit('newMessage', message)
        })
    })
}

module.exports = socket

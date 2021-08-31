require('dotenv').config()
const socketIo = require('socket.io')
const Messages = require('./model/Messages')

function socketConnection(server) {

    const io = socketIo(server, {
        cors: {
            origin: process.env.CHAT_HOST,
            methods: ['*']
        }
    })

    io.on('connection', socket => {
        console.log(`Connected: ${socket.id}`)

        socket.on('sendMessage', async message => {
            await Messages.saveMessage(message)

            socket.broadcast.emit('newMessage', message)
        })
    })
}

module.exports = socketConnection

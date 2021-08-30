const redis = require('../database')

class Messages {
    async get() {
        const messages = JSON.parse(await redis.get('messages'))

        if (messages) {
            return messages
        }
    }

    async save(message) {
        const messageHistory = JSON.parse(await redis.get('messages'))

        if (messageHistory) {
            const res = await redis.set('messages', JSON.stringify([ ...messageHistory, message ]))
            console.log(res)
        } else {
            await redis.set('messages', JSON.stringify([ message ]))
        }
    }
}

module.exports = new Messages()

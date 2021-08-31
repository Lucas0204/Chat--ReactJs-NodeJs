const redis = require('../database')

class Messages {
    async getMessageHistory() {
        const messageHistory = JSON.parse(await redis.get('messages'))

        if (messageHistory) {
            return messageHistory
        }
    }

    async saveMessage(message) {
        const messageHistory = JSON.parse(await redis.get('messages'))

        if (messageHistory) {
            await redis.set('messages', JSON.stringify([ ...messageHistory, message ]))
        } else {
            await redis.set('messages', JSON.stringify([ message ]))
        }
    }
}

module.exports = new Messages()

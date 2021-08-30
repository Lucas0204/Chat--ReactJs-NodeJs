const Messages = require('../model/Messages')

class GetMessagesController {

    async get(req, res) {

        const messages = await Messages.get()

        return res.json(messages)
    }
}

module.exports = new GetMessagesController()

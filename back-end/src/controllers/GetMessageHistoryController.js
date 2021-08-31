const Messages = require('../model/Messages')

class GetMessageHistoryController {

    async get(req, res) {

        const messageHistory = await Messages.getMessageHistory()

        return res.json(messageHistory)
    }
}

module.exports = new GetMessageHistoryController()

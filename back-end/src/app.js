require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(routes)

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    
    return res.status(500).json({
        error: 'Internal server error!'
    })
})

module.exports = app

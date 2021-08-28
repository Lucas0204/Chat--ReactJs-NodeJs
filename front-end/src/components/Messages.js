import React, { useEffect, useState } from 'react'
// import api from '../services/api'

export default function Messages() {

    const [ messages, setMessages ] = useState([{}])

    useEffect(() => {

        (async () => {
            // const res = await api.get('/messages')
            // const messageHistory = await res.json() 

            const messageHistory = [
                { user: 'Lucas', message: 'Ola mundo' },
                { user: 'Diego', message: 'Salve salve' },
                { user: 'Igor', message: 'Opa, blz' }
            ]

            setMessages(messageHistory)
        })()

    }, [])

    let divMessages = messages.map(message => {
        return (
            <div className="message"><span className="username">{message.user}</span>: {message.message}</div>
        )
    })

    return (
        <div className="messages-container">
            {divMessages}
        </div>
    )
}

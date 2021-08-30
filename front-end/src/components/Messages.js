import React, { useEffect, useState } from 'react'
import { socket } from '../Chat'
// import api from '../services/api'

export default function Messages(props) {
    socket.on('newMessage', message => {
        setMessages([ ...messages, message ])
    })

    const [ messages, setMessages ] = useState([])

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

    useEffect(() => {

        if (props.message.message) {
            setMessages(messages => [ ...messages, props.message ])
        }

    }, [ props.message ])


    return (
        <div className="messages-container">
            {messages.map(message => (
                <div className="message">
                    <span className="username">{message.user}</span>
                    : {message.message}
                </div>
            ))}
        </div>
    )
}

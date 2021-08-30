import React, { useEffect, useState } from 'react'
import { socket } from '../Chat'

export default function Messages(props) {
    
    const [ messages, setMessages ] = useState([])

    socket.on('newMessage', message => {
        messages[0] ? 
            setMessages([ ...messages, message ]) :
            setMessages([ message ])
    })

    useEffect(() => {

        setMessages(props.history)

    }, [ props.history ])

    useEffect(() => {

        if (props.message.message) {
            messages[0] ? 
                setMessages(messages => [ ...messages, props.message ]) : 
                setMessages([ props.message ])
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ props.message ])

    if (!messages[0]) {
        return (
            <div className="messages-container">
            </div>
        )
    } 

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

import React, { useEffect, useState } from 'react'
import socket from '../services/socket'

export default function Messages(props) {
    
    const [ allMessagesSent, setAllMessagesSent ] = useState([])

    socket.on('newMessage', message => {
        allMessagesSent[0] ? 
            setAllMessagesSent([ ...allMessagesSent, message ]) :
            setAllMessagesSent([ message ])
    })

    useEffect(() => {

        setAllMessagesSent(props.messageHistory)

    }, [ props.messageHistory ])

    useEffect(() => {

        if (props.messageSent.message) {
            allMessagesSent[0] ? 
                setAllMessagesSent([ ...allMessagesSent, props.messageSent ]) : 
                setAllMessagesSent([ props.messageSent ])
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ props.messageSent ])

    if (!allMessagesSent[0]) {
        return (
            <div className="messages-container">
            </div>
        )
    } 

    return (
        <div className="messages-container">
            {allMessagesSent.map(message => (
                <div className="message">
                    <span className="username">{message.user}</span>
                    : {message.message}
                </div>
            ))}
        </div>
    )
}

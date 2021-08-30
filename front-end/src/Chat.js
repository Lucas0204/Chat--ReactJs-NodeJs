import React, { useEffect, useState } from 'react'
import Messages from './components/Messages'
import io from 'socket.io-client'

export const socket = io('http://localhost:8080')

export default function Chat() {

    const [ message, setMessage ] = useState('')
    const [ messageToSend, setMessageToSend ] = useState({})

    function getMessage(event) {
        const message = event.target.value
        setMessage(message)
    }
    
    function sendMessage() {

        if (message.trim()) {
            setMessageToSend({
                user: 'Lucas',
                message
            })

            setMessage('')
        }
    }

    useEffect(() => {

        if (messageToSend.message) {
            socket.emit('sendMessage', messageToSend)
        }

    }, [ messageToSend ])


    return (
        <div className="chat-container">

            <Messages message={messageToSend}></Messages>

            <div class="send-message">
                <input onChange={getMessage} type="text" value={message} name="message" placeholder="Digite sua mensagem"/>
                <button onClick={sendMessage}>Enviar</button>
            </div>

        </div>
    )
}

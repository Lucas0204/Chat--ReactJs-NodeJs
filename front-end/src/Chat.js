import React, { useState } from 'react'
import Messages from './components/Messages'
import io from 'socket.io-client'

export default function Chat() {

    const socket = io('http://localhost:8080')

    const [ message, setMessage ] = useState({})

    function getMessage(event) {
        const message = event.target.value

        
        if (message) {
            const messageTemplate = {
                user: 'Lucas',
                message
            }

            setMessage(messageTemplate)
        }
    }
    
    function sendMessage() {
    
        if (message) {
            socket.emit('sendMessage', message)

        }
    }

    return (
        <div className="chat-container">

            <Messages></Messages>

            <div class="send-message">
                <input onChange={getMessage} type="text" name="message" placeholder="Digite sua mensagem"/>
                <button onClick={sendMessage}>Enviar</button>
            </div>

        </div>
    )
}

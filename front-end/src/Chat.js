import React, { useEffect, useState } from 'react'
import Messages from './components/Messages'
import api from './services/api'
import socket from './services/socket'

export default function Chat() {

    const [ message, setMessage ] = useState('')
    const [ messageToBeSent, setMessageToBeSent ] = useState({})
    const [ messageHistory, setMessageHistory ] = useState([])

    function getMessage(event) {
        const message = event.target.value
        setMessage(message)
    }
    
    function sendMessage() {

        if (message.trim()) {
            setMessageToBeSent({
                user: 'Lucas',
                message
            })

            setMessage('')
        }
    }
    
    useEffect(() => {
        (async () => {

            const res = await api.get('/messages')
            const messages = await res.data
            
            if (messages) {
                setMessageHistory(messages)
            }

        })()
    }, [])
    
    useEffect(() => {

        if (messageToBeSent.message) {
            socket.emit('sendMessage', messageToBeSent)
        }
    }, [ messageToBeSent ])
    

    return (
        <div className="chat-container">

            <Messages messageSent={messageToBeSent} messageHistory={messageHistory}></Messages>

            <div class="send-message">
                <input onChange={getMessage} type="text" value={message} name="message" placeholder="Digite sua mensagem"/>
                <button onClick={sendMessage}>Enviar</button>
            </div>

        </div>
    )
}

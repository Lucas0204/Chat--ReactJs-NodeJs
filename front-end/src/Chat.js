import React, { useEffect, useState } from 'react'
import Messages from './components/Messages'
import io from 'socket.io-client'
import api from './services/api'

export const socket = io('http://localhost:8080')

export default function Chat() {

    const [ message, setMessage ] = useState('')
    const [ messageToSend, setMessageToSend ] = useState({})
    const [ messageHistory, setMessageHistory ] = useState([])

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
        (async () => {
            
            const res = await api.get('/messages')
            const messages = await res.data
            
            console.log(messages)
            
            if (messages) {
                setMessageHistory(messages)
            }
            
        })()
    }, [])
    
    useEffect(() => {

        if (messageToSend.message) {
            socket.emit('sendMessage', messageToSend)
        }

    }, [ messageToSend ])
    

    return (
        <div className="chat-container">

            <Messages message={messageToSend} history={messageHistory}></Messages>

            <div class="send-message">
                <input onChange={getMessage} type="text" value={message} name="message" placeholder="Digite sua mensagem"/>
                <button onClick={sendMessage}>Enviar</button>
            </div>

        </div>
    )
}

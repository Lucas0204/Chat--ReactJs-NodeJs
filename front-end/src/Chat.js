import React, { useEffect, useState } from 'react'
import Messages from './components/Messages'
import StartPopUp from './components/StartPopUp'
import api from './services/api'
import socket from './services/socket'

export default function Chat() {

    const [ message, setMessage ] = useState('')
    const [ messageToBeSent, setMessageToBeSent ] = useState({})
    const [ messageHistory, setMessageHistory ] = useState([])

    const  [ username, setUsername ] = useState('')

    function getMessage(event) {
        const message = event.target.value
        setMessage(message)
    }
    
    function sendMessage() {

        if (message.trim() && username !== '') {
            setMessageToBeSent({
                user: username,
                message
            })

            setMessage('')
        }
    }

    function registerUsername(username) {
        setUsername(username)
    }
    
    useEffect(() => {
        (async () => {
            const res = await api.get('/messages')
            const messageHistory = await res.data
            
            if (messageHistory) {
                setMessageHistory(messageHistory)
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

            <StartPopUp onRegisterUsername={(username) => { registerUsername(username) }}></StartPopUp>

            <Messages messageSent={messageToBeSent} messageHistory={messageHistory}></Messages>

            <div class="send-message">
                <input onChange={getMessage} type="text" value={message} name="message" placeholder="Digite sua mensagem"/>
                <button onClick={sendMessage}>Enviar</button>
            </div>

        </div>
    )
}

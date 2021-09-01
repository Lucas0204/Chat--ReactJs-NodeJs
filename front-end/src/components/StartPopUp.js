import React, { useState } from 'react'

export default function StartPopUp(props) {

    const [ username, setUsername ] = useState('')

    function getUsername(event) {
        const username = event.target.value

        setUsername(username)
    }

    function registerUsername(event) {
        if (username.trim()) {
            const popUp = event.target.parentElement.parentElement
            popUp.style.display = 'none'

            props.onRegisterUsername(username)
        }
    }

    return (
        <div className="start-pop-up">

            <label for="username">Digite seu nome de usuário:</label>
            <div class="username-field">
                <input onChange={ getUsername } type="text" name="username" placeholder="Nome"/>
                <button onClick={ registerUsername }>Entrar</button>
            </div>

        </div>
    )   
}

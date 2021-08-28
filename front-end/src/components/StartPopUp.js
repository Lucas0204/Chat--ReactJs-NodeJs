import React, { useState } from 'react'

export default function StartPopUp() {

    const [ name, setName ] = useState('')

    function getUsername(event) {
        const username = event.target.value

        setName(username)
    }

    function registerUsername(event) {
        if (name.trim()) {
            const popUp = event.target.parentElement.parentElement
            popUp.style.display = 'none'
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

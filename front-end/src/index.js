import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';
import WelcomeMessage from './components/WelcomeMessage'

ReactDOM.render(
  <React.StrictMode>
    <WelcomeMessage />
    <Chat />
  </React.StrictMode>,
  document.getElementById('root')
);

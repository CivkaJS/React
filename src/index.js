import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message_name from './Message_name';
import Message_place from './Message_place';
import Message_hobby from './Message_hobby';
// import reportWebVitals from './reportWebVitals';

const myName = 'Андрей';
const myTown = 'Коломна';
const myhobby = 'плавание';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Message_name name = {myName}/>
    <Message_place town = {myTown}/>
    <Message_hobby hobby = {myhobby}/>
  </React.StrictMode>,
  document.getElementById('root'),
);

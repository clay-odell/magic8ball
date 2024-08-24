import React, { useState } from 'react';
import eightballMsgs from './messages.json';
import { selection } from './random.js';
import './Eightball.css';


const Eightball = ({ messages = eightballMsgs }) => {
    const [message, setMessage] = useState({
        msg: "Ask the Magic 8 Ball",
        color: "black"
    });

    const handleClick = (evt) => {
        setMessage(selection(messages));
    };

    return (
        <div
            className="Eightball"
            onClick={handleClick}
            style={{ backgroundColor: message.color }}
        >
            {message.msg}
        </div>
    );
};

export default Eightball;

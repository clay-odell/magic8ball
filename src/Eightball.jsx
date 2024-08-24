import React, { useState } from 'react';
import eightballMsgs from './messages.json';
import { selection } from './random.js';
import './Eightball.css';

const Eightball = ({ messages = eightballMsgs }) => {
  const [message, setMessage] = useState({
    msg: "Ask the Magic 8 Ball",
    color: "black"
  });
  const [formVisibility, setFormVisibility] = useState(false);

  const handleClick = () => {
    setMessage(selection(messages));
    setFormVisibility(true);
  };

  const handleReset = (evt) => {
    evt.preventDefault();
    setMessage({
      msg: "Ask the Magic 8 Ball",
      color: "black"
    });
    setFormVisibility(false);
  };

  return (
    <div
      className="Eightball"
      onClick={handleClick}
      style={{ backgroundColor: message.color }}
    >
      {message.msg}
      {formVisibility && (
        <form className="resetButton" onSubmit={handleReset}>
          <button type="submit">Reset</button>
        </form>
      )}
    </div>
  );
};

export default Eightball;

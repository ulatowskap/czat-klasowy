import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <textarea
      className="input"
      type="text"
      placeholder="Wpisz wiadomość..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>
      Wyślij
    </button>
  </form>
);

export default Input;

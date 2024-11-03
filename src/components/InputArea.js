import React, { useState } from "react";
import "./InputArea.css";

function InputArea({ onSendMessage }) {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    onSendMessage(inputText);
    setInputText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleSend();
  };

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Type a message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default InputArea;

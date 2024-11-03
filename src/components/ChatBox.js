import React from "react";
import "./ChatBox.css";

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default ChatBox;

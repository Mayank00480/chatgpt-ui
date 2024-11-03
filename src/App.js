import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputArea from "./components/InputArea";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);

  const handleSendMessage = (text) => {
    if (text.trim()) {
      const newMessages = [...messages, { text, sender: "user" }];
      setMessages(newMessages);

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm here to help with your queries!", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="app-container">
      <ChatBox messages={messages} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;

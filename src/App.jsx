import './App.css';
import { useState } from 'react';
import { Assistant } from './assistants/googleAi';
// import { GoogleGenerativeAI } from "@google/generative-ai";

import styles from "./App.module.css";
import chatbot from './assets/icons/chat-bot.png';
import Chat from './components/Chat';
import Control from './components/Control';

function App() {
  const [messages, setMessages] = useState([]);
  const assistant = new Assistant();
  // ✅ Initialize Gemini model with correct VITE env variable
  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleContentSend = async (content) => {
    if (!content.trim()) return;
    addMessage({ role: "user", content });
    try {
      const result = await assistant.chat(content);
      addMessage({ role: "assistant", content: [result] });
    } catch (error) {
      console.error("Gemini API Error:", error);
      addMessage({
        role: "system",
        content: "⚠️ Sorry, something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src={chatbot} alt="Chatbot Logo" />
        <h1 className={styles.Title}>Chat Bot</h1>
      </header>

      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>

      <div className="w-[100%]">
        <Control onSend={handleContentSend} />
      </div>
    </div>
  );
}

export default App;

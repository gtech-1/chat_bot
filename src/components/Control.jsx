import React, { useState } from 'react';
import styles from "./Control.module.css";
import { IoSend } from "react-icons/io5";
import TextareaAutosize from 'react-textarea-autosize';


const Control = ({ onSend }) => {
  const [content, setContent] = useState("");

  const handleContentSend = () => {
    const trimmed = content.trim();
    if (trimmed.length === 0) {
      console.log("No input received");
      return;
    }
    onSend(trimmed);
    setContent("");
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleContentSend();
    }
  };

  return (
    <div className={styles.Controls}>
      <div className="w-[100%]">
        <TextareaAutosize
          autoFocus
          value={content}
          className={`${styles.TextArea} rounded-lg`}
          minRows={1}
          maxRows={4}
          placeholder="Message AI Chatbot"
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleEnterPress}
        ></TextareaAutosize>
      </div>
      <button onClick={handleContentSend} className={styles.Button}>
        <IoSend />
      </button>
    </div>
  );
};

export default Control;

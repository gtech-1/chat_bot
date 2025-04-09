import React, { useState } from 'react'
import styles from "./Control.module.css"
import { IoSend } from "react-icons/io5";

const Control = ({onSend}) => {
    const [content,setContent]=useState("");


    const handleContentSend=()=>{
        if(content.length===0){
            console.log("no input recieved")
        }
        onSend(content)
        setContent("")
    }

    const handleEnterPress=(e)=>{
        if(e.key==="Enter" && !e.shiftKey){
            e.preventDefault()
            handleContentSend()
        }
    }

  return (
    <div className={styles.Controls }>
        <div className='w-[100%]'>
        <textarea
          autoFocus
          value={content}
          className={`${styles.TextArea} rounded-lg`}
          placeholder="Message AI Chatbot"
          onChange={e=>setContent(e.target.value)} 
          onKeyDown={handleEnterPress}
        ></textarea>
      </div>
        <button onClick={handleContentSend} className={styles.Button}><IoSend/></button>
    </div>
  )
}

export default Control
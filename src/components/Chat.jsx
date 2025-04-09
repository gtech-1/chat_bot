import React from 'react'
import styles from "./Chat.module.css"

const Chat = ({messages}) => {
    const WELCOME_MESSAGE={
        role:"assistant",
        content:"Hello! How can i assist you?"
    }
  return (
    <div className={styles.Chat}>
        {[WELCOME_MESSAGE,...messages].map(({role,content},index)=>(
            <div key={index} className={styles.Message} data-role={role}>
                {content}
            </div>
        ))}
    </div>
  )
}

export default Chat
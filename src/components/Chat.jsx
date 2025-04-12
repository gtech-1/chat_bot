import React from 'react'
import Markdown from 'react-markdown'
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
                <Markdown 
                class={styles.Markdown}
                components={{
                    p: ({node, ...props}) => <p className={styles.Paragraph} {...props} />,
                    ul: ({node, ...props}) => <ul className={styles.List} {...props} />,
                    li: ({node, ...props}) => <li className={styles.ListItem} {...props} />,
                }}
                >
                {String(content)}
                </Markdown>
            </div>
        ))}
    </div>
  )
}

export default Chat
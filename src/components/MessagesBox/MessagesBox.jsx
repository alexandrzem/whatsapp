import React, { useRef, useEffect } from 'react'
import Message from '../Message/Message'
import styles from './MessagesBox.module.css'

const MessagesBox = ({ messages }) => {
  const endDiv = useRef(null)
  useEffect(() => {
    endDiv.current.scrollIntoView()
  }, [messages])

  return (
    <div className={styles.chats}>
      {messages
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((m) => (
          <Message message={m} key={m.id} />
        ))}
      <div className={styles.ref} ref={endDiv}/>
    </div>
  )
}

export default MessagesBox

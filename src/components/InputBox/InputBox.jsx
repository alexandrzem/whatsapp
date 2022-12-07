import React from 'react'
import styles from './InputBox.module.css'
import smile from '../../assets/smile.svg'
import sendIcon from '../../assets/send.svg'

const InputBox = ({ message, setMessage, pushMessage }) => {
  const  handleKeyDown = (e) => {
    if (e.key === 'Enter' && message) {
      pushMessage()
    }
  }

  const pushMessageHandler = () => {
    if(message) {
      pushMessage()
    }
  } 

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img src={smile} alt="" />
      </div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className={styles.icon} onClick={pushMessageHandler}>
        <img src={sendIcon} alt="" />
      </div>
    </div>
  )
}

export default InputBox
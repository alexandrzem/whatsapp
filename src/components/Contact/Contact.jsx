import React from 'react';
import doubleCheck from '../../assets/done_all.svg';
import Avatar from '../Avatar/Avatar';
import styles from './Contact.module.css';

const Contact = ({ contact, setContactSelected, messages }) => {
  const maxTs = Math.max(...messages.map((m) => m.date.getTime()))
  const lastMsg = messages.find((m) => m.date.getTime() === maxTs)

  const truncate = (text, length) => {
    return text.length > length ? `${text.substring(0, length)} ...` : text
  }

  return (
    <div className={styles.wrapper} onClick={() => setContactSelected(contact)}>
      <Avatar user={contact} isContact />
      <div className={styles.right}>
        <div className={styles.header}>
          <h3 className={styles.title}>{contact.name}</h3>
          <span className={styles.time}>{lastMsg.date.toLocaleDateString()}</span>
        </div>
        <div className={styles.lastMsg}>
          <img src={doubleCheck} alt={contact.name} className={styles.icon} />
          <span className={styles.text}>{truncate(lastMsg.msg, 30)}</span>
        </div>
      </div>
    </div>
  )
}
export default Contact

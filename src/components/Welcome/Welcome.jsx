import React from 'react'
import welcome from '../../assets/welcome.svg'
import styles from './Welcome.module.css'
import locker from '../../assets/locker.svg'

const Welcome = () =>  (
    <div className={styles.welcome}>
      <img src={welcome} alt={welcome} className={styles.image} />
      <p className={styles.title}>WhatsApp Web</p>
      <div className={styles.text}>
        Отправляйте и получайте сообщения без необходимости оставлять телефон
        <br />
        подключённым.
        <br />
        Используйте WhatsApp одновременно на четырёх связанных устройствах и одном
        <br />
        телефоне.
      </div>
      <div className={styles.footer}>
        <img src={locker} alt={welcome} className={styles.locker} />
        Защищено скзвозным шиврованием
      </div>
    </div>
 
)

export default Welcome
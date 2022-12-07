import React from 'react';
import styles from './Avatar.module.css';
import dots from '../../assets/dots.svg';
import group from '../../assets/group.svg';
import chat from '../../assets/chat.svg';
import stories from '../../assets/stories.svg'
import avatarPhoto from '../../assets/avatar.svg'
import useMediaQuery from '../../hooks/useMediaQuery';
import back from '../../assets/back.svg'

const Avatar = ({ user, showName, isContact, isUser, setContactSelected }) => {
  const { avatar, name } = user || {}
  const isSmallerThan480px = useMediaQuery('(max-width: 480px)');

  return (
    <>
      <div className={styles.wrapper} onClick={() => setContactSelected({})}>
        {isSmallerThan480px && !isContact && !isUser && <img src={back} alt={back} className={styles.backIcon} onClick={() => setContactSelected({})} />}
        <img className={styles.avatar} src={avatar || avatarPhoto} style={{ height: isContact && '3rem' }} alt={name} loading="lazy" />
        {showName && <h3 className={styles.title}>{name}</h3>}
      </div>
      {isUser &&
        <div>
          <img src={group} alt={group} className={styles.icon}/>
          <img src={stories} alt={stories} className={styles.icon} />
          <img src={chat} alt={chat} className={styles.icon} />
          <img src={dots} alt={dots} className={styles.icon} />
        </div>
      }
    </>
  )
}

export default Avatar

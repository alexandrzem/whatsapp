import React, { useState, useEffect } from 'react';
import { mainUser, contactsMessages, Message } from './helpers/generateFakeData';
import Avatar from './components/Avatar/Avatar';
import Contact from './components/Contact/Contact';
import MessagesBox from './components/MessagesBox/MessagesBox';
import InputBox from './components/InputBox/InputBox';
import Search from './components/Search/Search';
import Welcome from './components/Welcome/Welcome';
import './App.css'
import useMediaQuery from './hooks/useMediaQuery';


function App() {
  const [data, setData] = useState(contactsMessages)
  const [contactSelected, setContactSelected] = useState({})
  const [currentMessages, setCurrentMessages] = useState([])
  const [message, setMessage] = useState('')
  const [search, setSearch] = useState('')
  const [filteredContacts, setFilterContacts] = useState([])

  const isSmallerThan480px = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    const currContact = data.find((d) => d.contact.id === contactSelected.id)
    setCurrentMessages((currContact && currContact.messages) || [])
    filterContacts(data, search)
  }, [contactSelected, data, search])

  const pushMessage = () => {
    const index = data.findIndex((d) => d.contact.id === contactSelected.id)
    const newData = Object.assign([], data, {
      [index]: {
        contact: contactSelected,
        messages: [...data[index].messages, new Message(true, message, new Date())],
      },
    })

    setData(newData)
    setMessage('')
  }

  const filterContacts = (data, search) => {
    const result = data.filter(({ contact }) => {
      return !search || contact.name.toLowerCase().includes(search.toLowerCase())
    })

    setFilterContacts(result)
  }

  return (
    <div className='container'>
      <div className='header'/>
      <div className="app">
        <aside style={{ width: isSmallerThan480px ? '100%' : '40%' , display: contactSelected.id && isSmallerThan480px ? 'none' : 'flex' }}>
          <header>
            <Avatar user={mainUser} isUser />
          </header>
          <Search search={search} setSearch={setSearch} />
          <div className="contact-boxes">
            {filteredContacts.map(({ contact, messages }) => (
              <Contact
                contact={contact}
                key={contact.name}
                setContactSelected={setContactSelected}
                messages={messages}
              />
            ))}
          </div>
        </aside>
        {contactSelected.id 
          ? <main>
            <header>
              <Avatar user={contactSelected} showName setContactSelected={setContactSelected} />
            </header>
            <MessagesBox messages={currentMessages} />
            <InputBox message={message} setMessage={setMessage} pushMessage={pushMessage} />
          </main> 
          : isSmallerThan480px 
            ? null 
            :<Welcome />
        }
      </div>
    </div>
  )
}

export default App

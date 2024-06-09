import React, { useState } from 'react'
import UserContext from './UserContext'
import ChildContext from './childContext';
import Header from '../components/Header';

const ContextApi = () => {
    const [text, setText] = useState('');
  return (
    <Header>
    <div style={{background: 'pink',height: '100vh'}}>
    <UserContext.Provider value={{text, setText}}>
        <h1 style={{color: 'red',margin: 0}}>Parent Component got changed value: {text}</h1>
        <ChildContext/>
    </UserContext.Provider>
    </div>
    </Header>
  )
}

export default ContextApi
import React, { useContext } from 'react'
import UserName from '../UserContext'

const ChildContext = () => {
    const {text, setText} = useContext(UserName);
  return (
    <>
        <h2>Child Component got changed value: {text}</h2>
        <input onChange={(e)=>setText(e.target.value)}/>
    </>
  )
}

export default ChildContext
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = ({children}) => {
    const navigate = useNavigate(); 
  return (
    <>
        <h5 onClick={()=>navigate('/')} className='text-pink-500 cursor-pointer p-6'>Home</h5>
        <div>{children}</div>
    </>
  )
}

export default Header